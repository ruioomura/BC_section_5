'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DepositReg() {
  // const router = useRouter();
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [user, setUser] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newData = {
      date,
      amount: parseFloat(amount),
      user,
    };

    await fetch('http://localhost:4000/api/deposit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
    });

    router.push('/detail');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">入出金登録</h1>
        <div>
          <label>日付:</label>
          <input value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>金額:</label>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div>
          <label>担当:</label>
          <input value={user} onChange={(e) => setUser(e.target.value)} required />
        </div>
        <button type="submit">送信</button>
      </form>

      {/* ――― ① Link コンポーネントでページ遷移 ――― */}
      <p className="text-lg underline text-blue-600 hover:text-blue-800">
        <Link href="/">Home に戻る</Link>
      </p>
    </main>
  );
}
