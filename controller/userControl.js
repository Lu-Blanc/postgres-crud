import User from "../model/userModel.js";

export const createUser = async (req, res)=>{
    try {
        const {username, email, password} = req.body;
        const user = await User.create({
        username: username,
        email: email,
        password: password
    });
    res.status(200).json({user})    
    } catch (error) {
        console.log(error);
    }   
}