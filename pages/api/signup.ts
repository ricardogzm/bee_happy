import { NextApiRequest, NextApiResponse } from "next";
import { checkDuplicateUsernameOrEmail } from "../../middlewares/verifySignUp";
import jwt from "jsonwebtoken";
import { User } from "../../models/user";
import Cookies from 'cookies';
import { connect } from "../../utils/connection";

const signUp = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "GET"){
        const connection = await connect();
        return res.status(200).json({"message": "works!"});
    }
    
    if (req.method === "POST") {
        try {
            await checkDuplicateUsernameOrEmail(req, res);
        } catch (error) {
            console.error(error);
        }
        try {
            // Getting the Request Body
            const connection = await connect();
            const { username, email, password } = req.body;
            
            // Creating a new User Object
            const newUser =new User({
                username,
                email,
                password,
            });

            // Saving the User Object in Mongodb
            const savedUser = await newUser.save();

            // Create a token
            const token = jwt.sign(
                {
                    id: savedUser._id,
                    username: savedUser.username,
                    email: savedUser.email
                }, 'beehappy', {
            });
            
            const cookies = new Cookies(req, res);
            cookies.set('token', token);
            
            return res.status(201).json({"message": "Registered"});

        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    }
    
}

export default signUp;