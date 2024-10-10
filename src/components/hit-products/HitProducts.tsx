import { Skeleton } from "antd"
import Card from "../card/Card"
import { IProduct } from "../../types"
import Container from "../container/Container"

const HitProducts = ({ data, isLoading }: { data: IProduct[], isLoading: boolean }) => {
  const cardType = "hit"
  return (
    <div className="my-10">
      <Container>
        <div>
          <h2 className="animate-bounce text-4xl font-bold text-center py-10">Hit Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {
              isLoading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <div data-aos="flip-left" key={index}>
                    <Skeleton.Image active style={{ height: 350, width: 300 }} />
                    <div className="flex flex-col gap-3 pt-3">
                      <Skeleton.Input style={{ width: 300 }} active />
                      <Skeleton.Input style={{ width: 300 }} active />
                      <Skeleton.Input style={{ width: 100 }} active />
                    </div>
                  </div>
                ))
                )
                :
                (
                  data?.slice(0, 4).map((product) => (
                        <Card cardType={cardType} key={product.id} product={product} />
                  ))
                )
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HitProducts
