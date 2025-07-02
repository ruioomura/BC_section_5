
import { Router } from "express";
import{ PrismaClient } from '@prisma/client';

// TODO:new PrismaClient深堀
const router = Router();
const prisma = new PrismaClient();

// TODO:ここでdbUrl定義する意味調べる
const dbUrl = process.env.DATABASE_URL;
console.log("接続先DB：", process.env.DATABASE_URL);

// GET /users移行
// TODO:router以下コードとasync深堀
router.get("/", async(req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'ユーザー一覧の取得に失敗しました'});
    }
});

// Post /users移行
router.post('/', async(req, res)=> {
    const { name, email } = req.body;

    try {
        const newUser = await prisma.user.create({
            data: { name, email },
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: 'ユーザーの作成に失敗しました'});
    }
});

export default router;