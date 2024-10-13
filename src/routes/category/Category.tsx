import { useParams } from "react-router-dom"
import { useGetCategoryByNameQuery } from "../../redux/api/categoriesApi"
import { IProduct } from "../../types"
import CategoriesComponent from "../../components/categories-component/CategoriesComponent"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

const Categories = () => {
  const {name} = useParams()
  const { data, isLoading } = useGetCategoryByNameQuery({"product_type" : name} as {"product_type" : string})

  const filteredData = (data as unknown as IProduct[])?.filter((product: IProduct) => String(product.price) !== "0.0" && product.description !== "" && product.product_colors.length > 0)
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <CategoriesComponent productType={name as string} data={filteredData as unknown as IProduct[]} isLoading={isLoading} />
      </div>
      <Footer />
    </div>
  )
}

export default Categories
