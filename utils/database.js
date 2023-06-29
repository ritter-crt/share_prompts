import mongoose from 'mongoose';

// track connection status
let isConnected = false;

export const connectToDB = async () => {
  // sets up mongoose option (recommended)
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('Mongoose is already connected.');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB connected.');
  } catch (error) {
    console.log(error);
  }
};
