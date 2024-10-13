import Advertising from "../../components/advertising/Advertising"
import Categories from "../../components/categories/Categories"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Hero from "../../components/hero/Hero"
import HitProducts from "../../components/hit-products/HitProducts"
import Products from "../../components/products/Products"
import { useGetAllProductsQuery } from "../../redux/api/productsApi"
import { IProduct } from "../../types"

const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery()

  const filteredData = (data as unknown as IProduct[])?.filter((product: IProduct) => product.price !== 0.0 && product.description !== "" && product.product_colors.length > 0)

  return (
    <div>
      <Header />
      <Categories/>
      <Hero/>
      <Advertising data={data as unknown as IProduct[]} isLoading={isLoading} />
      <HitProducts data={data as unknown as IProduct[]} isLoading={isLoading}/>
      <Products data={filteredData as unknown as IProduct[]} isLoading={isLoading}/>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
