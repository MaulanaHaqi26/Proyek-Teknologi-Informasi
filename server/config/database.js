import mysql from 'mysql2'
export const dbPool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }).promise()

  

