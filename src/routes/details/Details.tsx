import { useParams } from "react-router-dom"
import ProductDetails from "../../components/products-details/ProductDetails"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { useGetProductQuery } from "../../redux/api/productsApi"
import productNotFound from "../../images/ProductNotFound.png"
import { Loading } from "../../utils"

const Details = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetProductQuery({id})

  

  console.log(data)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow ">
        {
          isLoading  ? (
              <div className = "w-full flex items-center flex-col justify-center mt-10 ">
                <Loading />
              </div>
          )
            :
            (
              error ? (
                <div className = " w-full flex items-center flex-col justify-center mt-10 ">
                  <h1 className = "text-4xl font-bold text-center text-[#656565]" >Product Not Found</h1>
                  <img className="w-[300px]" src={productNotFound} alt="" />
                </div>
              )
              :
              (
                <ProductDetails  />
              )
            )
        }
      </div>
      <Footer />
    </div>
  )
}

export default Details
