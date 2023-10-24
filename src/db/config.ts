import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        console.log("Connecting to MongoDB");
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        });

        connection.on("error", (err) => {
            console.error(err);
        });

        process.exit(1);
    } catch (error) {
        console.error(error);
    }
};
