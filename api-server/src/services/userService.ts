import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type User = {
  id: string;
  name: string;
  age: number;
};

// TODO:コードの解説をまとめる
export const updateUser = async (user: User) => {
  const { id, name, age } = user;

  // IDの形式check
  if (typeof id !== 'string' || id.length !== 50) {
    throw new Error('invalid ID format.');
  }

  // nameのバリデーション
  if (typeof name !== 'string' || name.length < 2 || name.length > 55) {
    throw new Error('invalid name length.');
  }

  // ageのバリデーション
  if (!Number.isInteger(age) || age <= 0) {
    throw new Error('invalid age.');
  }

  // ユーザがDBに存在するかcheck
  const existingUser = await prisma.user.findUnique({ where: { id } });
  if (!existingUser) {
    throw new Error("User's id is invalid.");
  }

  // データ更新
  return await prisma.user.update({
    where: { id },
    data: { name, age },
  });
};
