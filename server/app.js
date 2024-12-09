import express from 'express';
import { dbPool } from './config/database.js';
import 'dotenv/config';

// Setup express
const app = express();
const connection = await dbPool.getConnection();
    
// Cek status database dengan query sederhana
const [result] = await connection.query('SELECT 1')

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    const connection = await dbPool.getConnection();
    
    // Cek status database dengan query sederhana
    const [result] = await connection.query('SELECT 1');
    
    // Info koneksi berhasil
    console.log('✅ Koneksi database berhasil!');
    console.log('📊 Server Info:', {
      threadId: connection.threadId,
      serverVersion: connection.serverVersion})

        // Release koneksi
        connection.release();
        return true;
  } catch (error) {
    console.log("error : ", error)
  }
});
