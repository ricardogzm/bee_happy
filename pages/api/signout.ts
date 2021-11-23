import { NextApiRequest, NextApiResponse } from "next";
import Cookies from 'cookies';

const signOut = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const cookies = new Cookies(req, res);
        cookies.set('token');
        return res.status(200).json({ "message": "goodbye" });
    }
}

export default signOut;