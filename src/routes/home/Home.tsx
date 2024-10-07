import Categories from "../../components/categories/Categories"
import Header from "../../components/header/Header"
import Hero from "../../components/hero/Hero"
import Products from "../../components/products/Products"

const Home = () => {
  return (
    <div>
      <Header />
      <Categories/>
      <Hero/>
      <Products/>
    </div>
  )
}

export default Home
