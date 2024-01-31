import mongoose from 'mongoose';

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Successfully connected to MongoDB');
  } catch (err) {
    console.log('Error connecting to MongoDB', err);
    //throw new Error('Error connecting to MongoDB', err);
  }
};

export default connect;