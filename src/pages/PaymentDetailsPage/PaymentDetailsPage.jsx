import { useParams } from "react-router-dom"

export default function PaymentDetailsPage() {
  const {paymentId} = useParams();
  return (
  <div>
    <h1>PaymentDetailsPage: {paymentId}</h1>
  </div>
  )
}