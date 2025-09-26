import mongoose from 'mongoose';

export async function connectToDatabase() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/myntra_clone';
  mongoose.set('strictQuery', true);
  await mongoose.connect(mongoUri, {
    autoIndex: true,
  });
  // eslint-disable-next-line no-console
  console.log('MongoDB connected');
}


