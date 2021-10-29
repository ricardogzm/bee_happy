import {User} from '../models/user';
import { NextApiRequest, NextApiResponse } from "next";

const checkDuplicateUsernameOrEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (user)
       return res.status(400).json({ message: "The user already exists" });
      const email = await User.findOne({ email: req.body.email });
      if (email)
        return res.status(400).json({ message: "The email already exists" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  export { checkDuplicateUsernameOrEmail };