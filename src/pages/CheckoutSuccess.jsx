
import { Link } from 'react-router'
export default function CheckoutSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold mb-2">Thank you for your order!</h1>
        <p className="text-gray-600 mb-6">
          Your order has been successfully placed. We will contact you shortly.
        </p>

        <Link to="/">
          <a className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition  font-urbanist font-semibold">
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  )
}
