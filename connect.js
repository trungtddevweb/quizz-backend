import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const connectDB = () => {
    const url = process.env.DB_URL
    try {
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log({
            status: 'success',
            message: 'MongDB has been successfully connected!!!',
        });
    } catch (err) {
        console.log({ message: err.message });
    }
};

export default connectDB;