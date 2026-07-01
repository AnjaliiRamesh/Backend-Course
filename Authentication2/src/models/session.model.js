
import mongoose from "mongoose";
import { refreshToken } from "../controllers/auth.controllers";

const sessionSchema = new mongoose.Schema({
    user:{
        trpe: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "user is required"]
    },
    refreshTokenHash:{
        type: String,
        required: [true, "refresh token hash is required"]
    },
    ip: {
        type: String,
        required: [true, "Ip address is required"]
    },
    userAgent: {
        type: String,
        required: [true, "user agent is required"]
    },
    revoked: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

const sessionModel = mongoose.model("sessions", sessionSchema)

export default sessionModel