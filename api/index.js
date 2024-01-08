import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb Conectado :)')
  })

  .catch((err) => {
    console.log(err)
  })

const app = express();

app.listen(3000, () => {
  console.log('Servidor está rodando na porta 3000!!!');
});
