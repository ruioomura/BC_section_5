import express from 'express';
import userRouter from './router/user';
import dotenv from 'dotenv';

dotenv.config(); // .envの読み込み

const app = express();
app.use(express.json());

// /usersエンドポイントでuserRouter使用
// TODO:userRouterおさらい
app.use('/users', userRouter);

app.listen(4000, () => {
  console.log(`Server running on http://localhost:4000`);
});
