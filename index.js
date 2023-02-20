import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config()
mongoose.set('strictQuery', false);
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/', authRoutes)

app.listen(process.env.PORT || 3001, () => {
    const url = `mongodb+srv://${process.env.USER_DB}:${process.env.PW_DB}@quizz.7gz9zjb.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(url, () => {
        console.log("Mongoose Connected!")
    })
    console.log("Backend server listening on port " + process.env.PORT)
})



