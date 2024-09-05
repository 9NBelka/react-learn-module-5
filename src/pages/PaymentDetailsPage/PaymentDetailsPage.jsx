import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getPaymentsById } from "../../../payments-api";

export default function PaymentDetailsPage() {
  const { paymentId } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const data = await getPaymentsById(paymentId);
      } catch (error) {
        
      }
    }
    getData()
  }, [paymentId])

  return (
  <div>
    <h1>PaymentDetailsPage: {paymentId}</h1>
  </div>
  )
}