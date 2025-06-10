"use client";

import SubmitButton from "@/Components/SubmitBtn";
import { create } from "@/Actions/contact";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function Form() {
  const [state, formAction] = useActionState(create, {});

  useEffect(() => {
    toast(state?.message, { type: `${state.status}` });
  }, [state]);

  return (
    <>
      <div>
        <form
          action={formAction}
          className="flex flex-col gap-6 font-VazirLight"
        >
          <div>
            <input
              className="w-[100%] h-12 border border-black dark:border-white rounded-md px-4 outline-hidden"
              name="name"
              type="text"
              placeholder="نام و نام خانوادگی"
            />
          </div>
          <div>
            <input
              className="w-[100%] h-12 border border-black dark:border-white rounded-md px-4 outline-hidden"
              name="email"
              type="email"
              placeholder="ایمیل"
            />
          </div>
          <div>
            <input
              className="w-[100%] h-12 border border-black dark:border-white rounded-md px-4 outline-hidden"
              name="subject"
              type="text"
              placeholder="موضوع پیام"
            />
          </div>
          <div>
            <textarea
              className="w-[100%] py-2 border border-black dark:border-white rounded-md px-4 outline-hidden"
              name="text"
              rows="10"
              placeholder="متن پیام"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <SubmitButton width={"w-auto"} title="ارسال پیام" />
          </div>
        </form>
      </div>
    </>
  );
}
