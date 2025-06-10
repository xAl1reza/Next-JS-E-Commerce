"use client"

import { useActionState, useEffect } from "react";
import SubmitButton from "../SubmitBtn";
import { toast } from "react-toastify";
import { payment } from "@/Actions/cart";
import { useRouter } from "next/navigation";

export default function Payment({ cart, addressId, coupon }) {

  const [statePayment , formActionPayment] = useActionState(payment , {})
  const router = useRouter()

  useEffect(() => {
    toast(statePayment?.message , {type: `${statePayment?.status}`})
    if(statePayment?.status == "success") {
      router.push(statePayment.url)
    }
  } , [statePayment])

  return (
    <>
      <div className="mt-4">
        <form action={formActionPayment}>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
          <input type="hidden" name="coupon" value={coupon.code}/>
          <input type="hidden" name="address_id" value={addressId}/>
          <SubmitButton title={'پرداخت'} width={'w-full'} />
        </form>
      </div>
    </>
  )
}
