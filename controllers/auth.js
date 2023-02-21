import User from "../models/User.js"
import jwt from 'jsonwebtoken'

export const registerController = async (req, res, next) => {
    try {
        const { password } = req.body;
        if (!password) return res.status(400).json({ message: "Hãy nhập mật khẩu!" })
        const newUser = await User({
            password
        })
        await newUser.save();
        res.status(201).json({ message: "User has been created!" })
    } catch (error) {
        next(console.log({ message: error }))
    }
}

export const loginController = async (req, res, next) => {
    try {
        const { password } = req.body
        const user = await User.findOne({ password })
        if (!user) return res.status(400).json({ message: "Mật khẩu không đúng vui lòng nhập lại!" })
        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, { expiresIn: "3d" })
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json({
            message: "Login successfully!",
            data: user
        })
    } catch (error) {
        next(console.log({ message: error }))
    }
}

export const logoutController = async (req, res) => {
    res.clearCookie('access_token', {
        sameSite: "none",
        secure: true
    }).status(200).json({
        massage: "You are has been logout!"
    })
}