import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model("Message", MessageModel);
export default MessageModel;
