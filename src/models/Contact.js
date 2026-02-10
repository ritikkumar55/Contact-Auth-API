import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
    name:{type:String,require:true},
    email:{type:String,require:true},
    phone:{type:String,require:true},
    type:{type:String,require:true},
    createdAt:{type:Date,default:Date.now}
})



export default mongoose.model("Contact", contactSchema);