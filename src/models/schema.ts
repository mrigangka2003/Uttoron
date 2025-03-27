import mongoose, { Schema, Types } from "mongoose";

interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface Icourse {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  creatorId: Types.ObjectId;
}

interface Ipurchase{
    userId : Types.ObjectId,
    courseId :Types.ObjectId
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const adminSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const courseSchema = new Schema<Icourse>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const purchaseSchema= new Schema<Ipurchase>({
    userId:{
        type : Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    courseId:{
        type:Schema.Types.ObjectId,
        ref:'Course',
        required:true
    }
})


const userModel = mongoose.model<IUser>('User', userSchema);
const adminModel = mongoose.model<IUser>('Admin', adminSchema);
const courseModel = mongoose.model<Icourse>('Course', courseSchema);
const purchaseModel = mongoose.model<Ipurchase>('Pucharse',purchaseSchema)


export {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}