import { useEffect, useState } from "react"
import { getPayments } from "../../../payments-api"
import PaymentList from "../../components/PaymentList/PaymentList"

export default function PaymentsPage() {

  const [payments, setPayments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true)
        const data = await getPayments()
        setPayments(data)
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, []);

  return (
  <div>
    <h1>Welcome to Payments Page</h1>
    {isLoading && <b>Loading payments...</b>}
    {error && <br>Opps! Error!</br>}
    <PaymentList payments={payments}/>
    </div>
)
}