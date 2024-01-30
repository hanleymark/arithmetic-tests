import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: string,
      required: true,
      unique: true,
    },
    password: {
      type: string,
      required: false,
    },
  },
  {
    timestamps: true,
  });

  export default mongoose.models.User || mongoose.model('User', userSchema);
  
