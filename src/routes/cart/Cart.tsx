import CartComponent from "../../components/cart-component/CartComponent"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"

const Cart = () => {
  return (
    <div  className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow my-10">
        <CartComponent />
      </div>
      <Footer />
    </div>
  )
}

export default Cart
