import { Button, Skeleton } from "antd"
import { useGetAllProductsQuery } from "../../redux/api/productsApi"
import { IProduct } from "../../types"
import Card from "../card/Card"
import Container from "../container/Container"
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react"

const Products = () => {
  AOS.init({
    duration: 500,
  });
  const [step, setStep] = useState<number>(4)
  const  {data, isLoading}  = useGetAllProductsQuery()
  console.log(data)

  const filteredData = (data as unknown as IProduct[])?.filter((product: IProduct) => product.price !== "0.0" && product.description !== "")
  console.log(filteredData)

  const count = 4 
  return (
    <div className="my-10">
      <Container>
        <div >
        <h2 className="text-4xl font-bold text-center py-10">
            Our Products 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {
              isLoading ?
              (
                Array.from({ length: 16 }).map((_, index) => (
                  <div data-aos="flip-left" key={index}>
                    <Skeleton.Image active style={{ height: 350 , width: 300}}/>
                    <div className="flex flex-col gap-3 pt-3">
                      <Skeleton.Input style={{width: 300}} active />
                      <Skeleton.Input style={{width: 300}} active />
                      <Skeleton.Input style={{width: 100}} active />
                    </div>
                  </div>
                ))
              ) :
                (
                  Array.isArray(filteredData) && filteredData?.slice(0, count * step).map((product) => (
                      <Card key={product.id} product={product} />
                  ))
                )
          }
        </div>
        <Button disabled={count * step >= filteredData?.length} onClick={() => setStep(step + 1)} className="w-full max-w-[200px] mt-10 !bg-[#656565] h-[40px] block mx-auto" type="primary">Load More</Button>
        </div>
      </Container>
    </div>
  )
}

export default Products
