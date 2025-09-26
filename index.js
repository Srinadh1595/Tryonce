import dotenv from 'dotenv';
import app from './app.js';
import { connectToDatabase } from './config/db.js';

dotenv.config();

const port = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to start server', error);
    process.exit(1);
  }
}

startServer();


