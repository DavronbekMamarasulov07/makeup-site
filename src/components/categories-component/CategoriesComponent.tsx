
import Card from "../../components/card/Card"
import { Button, Skeleton } from "antd"
import Container from "../../components/container/Container"
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react"
import { IProduct } from "../../types";


const CategoriesComponent = ({ data, isLoading }: { data: IProduct[], isLoading: boolean }) => {
  const [step, setStep] = useState<number>(4)

  AOS.init({
    duration: 500,
  });

  const count = 4
  return (
    <div className="my-10">
      <Container>
        <div >
          <h2 className="animate-bounce text-4xl font-bold text-center py-5">
            Products by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {
              isLoading ?
                (
                  Array.from({ length: 16 }).map((_, index) => (
                    <div data-aos="flip-left" key={index}>
                      <Skeleton.Image active style={{ height: 350, width: 300 }} />
                      <div className="flex flex-col gap-3 pt-3">
                        <Skeleton.Input style={{ width: 300 }} active />
                        <Skeleton.Input style={{ width: 300 }} active />
                        <Skeleton.Input style={{ width: 100 }} active />
                      </div>
                    </div>
                  ))
                ) :
                (
                  data?.slice(8, count * step).map((product) => (
                    <Card cardType="ourProduct" key={product.id} product={product} />
                  ))
                )
            }
          </div>
          {
            data && data?.length > count * step &&
            <Button disabled={count * step >= data?.length} onClick={() => setStep(step + 1)} className="w-full max-w-[200px] mt-10 !bg-[#656565] h-[40px] block mx-auto" type="primary">Load More</Button>
          }
        </div>
      </Container>
    </div>
  )
}

export default CategoriesComponent
