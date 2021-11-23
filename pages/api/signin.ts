import { NextApiRequest, NextApiResponse } from "next";
import { Password } from "../../services/password";
import jwt from "jsonwebtoken";
import { User } from "../../models/user";
import Cookies from 'cookies';
import { connect } from "../../utils/connection";

const signIn = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "GET"){
        const connection = await connect();
        return res.status(200).json({"message": "works!"});
    }

    if (req.method === "POST") {
        try {
            const connection = await connect();

            const userFound = await User.findOne({ email: req.body.email });

            if (!userFound) return res.status(400).json({ message: "wrong username or password" });

            const matchPassword = await Password.compare(
                userFound.password,
                req.body.password
            );

            if (!matchPassword){
                return res.status(401).json({
                    token: null,
                    message: "wrong username or password",
                });
            }
                
            // Create a token
            const token = jwt.sign(
                {
                    id: userFound._id,
                    username: userFound.username,
                    email: userFound.email
                }, 'beehappy', {
            });

            const cookies = new Cookies(req, res);
            cookies.set('token', token);
            
            return res.status(200).json({ "message": "Logged in" });
        } catch (error) {
            console.log(error);
        }
    }
}

export default signIn;