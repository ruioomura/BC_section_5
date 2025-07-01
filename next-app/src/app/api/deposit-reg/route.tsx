import { NextResponse } from 'next/server';

const mockDB: { date: string; amount: number; user: string }[] = [];

// POST（保存）
export async function POST(req: Request) {
    const body = await req.json();
    mockDB.push(body);
    return NextResponse.json({ status: 'ok' });
}

// GET（取得）
export async function GET() {
    return NextResponse.json(mockDB);
}