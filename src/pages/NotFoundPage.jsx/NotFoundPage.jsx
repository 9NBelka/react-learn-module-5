import {Link} from 'react-router-dom'
export default function NotFoundPage() {
  return (
      <>
      <div><h1>Opps! Not Found!!!</h1></div>
      <Link to="/"><h4>Back to home page</h4></Link>
      </>
  )
}