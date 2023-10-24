import { connect } from "@/db/config";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
// import { sendEmail } from "@/helpers/mailer";
import bcryptjs from "bcryptjs";
connect();
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        console.log(reqBody);

        // check if user email already exists
        const user = await User.findOne({ email });

        if (user) {
            return {
                status: 400,
                body: {
                    error: "User already exists"
                }
            };
        }

        // hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        console.log(savedUser);
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        });
    } catch (error: any) {
        return {
            status: 500,
            body: {
                error: error.message
            }
        };
    }
}
