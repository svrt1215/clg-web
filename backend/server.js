// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import resultRoutes from './routes/result.js';

// dotenv.config();
// const app = express();

// app.use(express.json())
// // app.use(cors({
// //   origin: '*',
// //   methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
// //   allowedHeaders: ['Content-Type', 'Authorization'], 
// //  credentials: true
// // }));
// app.use(cors({
//   origin: ['https://clg-web-z5c9.vercel.app'],
//   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));

// app.use('/api/results', resultRoutes); 

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(process.env.PORT || 5000, () => {
//       console.log(`Server running on port ${process.env.PORT || 5000}`);
//     });
//   })
//   .catch(err => {
//     console.error('Connection error:', err);
//   });
