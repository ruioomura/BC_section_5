'use server';

import { redirect } from "next/navigation";

export async function postAction(formData: FormData) {
    const name = formData.get("name");
    console.log(name);
    // 表にしてDetailページに表示
    redirect("/thanks");
};