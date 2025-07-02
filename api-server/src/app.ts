import express from 'express';
import userRouter from './router/user';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config(); // .envの読み込み

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 4000;
const dbUrl = process.env.DATABASE_URL;
console.log("接続先DB：", process.env.DATABASE_URL);

app.use(express.json());

// GET /usersでユーザー一覧取得
// TODO:async調べる
app.get('/users', async(req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ユーザー一覧の取得に失敗しました'});
  }
});

// POST /usersでユーザー作成
app.post("/users", async(req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'ユーザーの作成に失敗しました'});
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});