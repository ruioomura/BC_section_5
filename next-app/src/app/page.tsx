// TODO:page.tsxを作り直してコードを移し替える
// TODO:Dockerに上げる


import Link from 'next/link';

export default function Home() {
  return (
    // TODO:UI整える
    /*
      左端上にタイトル、タイトルを押すとHomeに戻る仕様に
      右端上にサインインボタン、サインインページへ遷移
      トップ画上部中央に設置
      中央センター寄りにリストで入出金登録ボタン・入出金一覧、ボタン押すとポップアップで入出金登録フォームが出る仕様
      入出金一覧を押すと、ページ遷移
    */
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Budget Book</h1>
      <p className="mt-4 text-lg"><Link href="/user-reg/">ユーザー登録</Link></p>
      <p className="mt-4 text-lg"><Link href="/deposit-reg">入出金登録</Link></p>
      <p className="mt-4 text-lg"><Link href="/detail">入出金一覧</Link></p>
      </main>
  );
};

/*
文字サイズ：　text-sm,text-lg(18px相当),text-4x1(36px)→タイトルなど大きい文字
文字色：　text-gray-700,text-blue-500
font-bold=太字
mt-4=上マージン1rem(16px)
button→mt-6=上マージン1.5rem(24px) px-4=左右パディング1rem py-2=上下パディング0.5rem
hover:bg-blue-600→ホバー時に背景を青系600へ（ホバー時とはマウスやカーソルが重なったとき）
*/