import mongoose from "mongoose";

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Todo", todoSchema);