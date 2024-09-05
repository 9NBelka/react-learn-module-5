import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom"
import { getPaymentsById } from "../../../payments-api";

export default function PaymentDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getPaymentsById(paymentId);
        setPayment(data);
      } catch (error) {
        
      }
    }
    getData()
  }, [paymentId])

  return (
  <div>
    <h1>PaymentDetailsPage: {paymentId}</h1>

    {payment && (
    <div>
      <p>Amount: {payment.amount}</p>
      <p>Number: {payment.cardNumber}</p>
      <p>Owner: {payment.cardOwner}</p>
      <p>Type: {payment.cardType}</p>
      <p>Description: {payment.description}</p>
    </div>
  )}

  <div>
    <ul>
      <li><NavLink to="subpage-a">Subpage A</NavLink></li>
      <li><NavLink to="subpage-b">Subpage B</NavLink></li>
    </ul>

    <Outlet />
  </div>
  </div>
  )
}