'use client';
import Link from 'next/link';

// import { useRouter } from 'next/navigation';

export default function UserReg() {
  // const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">ユーザー登録</h1>

      <form>
        <input type="text" name="name" />
        <button type="submit">送信</button>
      </form>

      {/* ――― ① Link コンポーネントでページ遷移 ――― */}
      <p className="text-lg underline text-blue-600 hover:text-blue-800">
        <Link href="/">Home に戻る</Link>
      </p>
    </main>
  );
}
