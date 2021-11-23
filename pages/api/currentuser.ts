import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import Cookies from 'cookies';

const currentUser = (req: NextApiRequest, res: NextApiResponse)=>{
    if(req.method === "GET"){
        const cookies = new Cookies(req, res);
        const token: string = cookies.get('token')!;
        if (!token){
            res.status(404).json({message: "no token provided"});
        }
        try{
            jwt.verify(token, 'beehappy', (err, currentUser)=>{
                if (err){
                    res.send(err.message);
                } else {
                    res.status(200).json({currentUser})
                }
            });
        } catch(err){}
    }
    

}

export default currentUser;
