import mongoose from 'mongoose';

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log('Successfully connected to MongoDB');
  } catch (err) {
    throw new Error('Error connecting to MongoDB', err);
  }
};

export default connect;