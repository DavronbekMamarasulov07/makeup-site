import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"

const Cart = () => {
  return (
    <div  className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow ">
        <h1>Cart</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
