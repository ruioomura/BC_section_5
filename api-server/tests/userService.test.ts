// TODO:解説まとめ
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { updateUser, User } from '../src/services/userService';
import { PrismaClient } from '@prisma/client';

// Prismaモック
vi.mock('@prisma/client', () => {
    const mUser = {
        findUnique: vi.fn(),
        update: vi.fn(),
    };

    return {
        PrismaClient: vi.fn(() => ({
            user: mUser,
        })),
    };
});

describe('updateUser', () => {
    let prisma: any;

    beforeEach(() => {
        prisma = new PrismaClient();
    });

    if('正常にユーザーを更新できる', async () => {
        const input: User = {
            id: 'a'.repeat(50),
            name: 'Updated Name',
            age: 30,
        };

        prisma.user.findUnique.mockResolvedValue({ id: input.id });
        prisma.user.update.mockResolvedValue({ ...input });

        const result = await updateUser(input);
        expect(result).toEqual(input);
    })

    it('存在しないIDを渡すと例外を投げる', async () => {
        const input: User = {
            id: 'a'.repeat(50),
            name: 'Test',
            age: 25,
        };

        prisma.user.findUnique.mockResolvedValue(null);

        await expect(updateUser(input)).rejects.toThrow("User's id is invalid.");
    });

    it('nameが短すぎるとエラーになる', async () => {
        const input: User = {
            id: 'a'.repeat(50),
            name: 'A',
            age: 25,
        };

        await expect(updateUser(input)).rejects.toThrow('invalid name length.');
    });

    it('ageが負の数だとエラーになる', async () => {
    const input: User = {
      id: 'a'.repeat(50),
      name: 'Valid Name',
      age: -1,
    };

    await expect(updateUser(input)).rejects.toThrow('invalid age.');
  });

  it('idが50文字でないとエラーになる', async () => {
    const input: User = {
      id: 'short-id',
      name: 'Valid Name',
      age: 20,
    };

    await expect(updateUser(input)).rejects.toThrow('Invalid ID format.');
  });
});