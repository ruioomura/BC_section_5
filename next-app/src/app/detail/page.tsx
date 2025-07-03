'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Entry = { date: string; amount: number; user: string };

export default function Detail() {
  // const router = useRouter();
  const [data, setData] = useState<Entry[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/deposit')
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center gap-6">
        <h1>入出金一覧</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>日付</th>
              <th>金額</th>
              <th>担当</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.date}</td>
                <td>{d.amount}</td>
                <td>{d.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer>
          {/* ――― ① Link コンポーネントでページ遷移 ――― */}
          <p className="text-lg underline text-blue-600 hover:text-blue-800">
            <Link href="/">Home に戻る</Link>
          </p>
        </footer>
      </main>
    </div>
  );
}
