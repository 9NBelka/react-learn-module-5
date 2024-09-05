

export default function PaymentCard({payment}) {
  return (
  <div>
    <p>Amount: {payment.amount}</p>
    <p>Description: {payment.description}</p>
    <div>Details</div>
  </div>
  )
}