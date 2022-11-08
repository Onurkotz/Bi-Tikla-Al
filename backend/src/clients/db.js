import mongoose from 'mongoose';

mongoose
  .connect("mongodb://127.0.0.1/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB: Connected'))
  .catch((err) => console.log(err.message));


  // "mongodb://127.0.0.1/test"