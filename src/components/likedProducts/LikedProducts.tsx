import { IProduct } from "../../types"
import Card from "../card/Card"
import Container from "../container/Container"

const LikedProducts = ({ likedProducts }: { likedProducts : IProduct[]}) => {
  return (
    <div>
      <Container>
        <div>
          {
            likedProducts && likedProducts.length > 0 ?
              (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                  {
                    likedProducts.map((product) => (
                      <Card cardType="liked" key={product.id} product={product} />
                    ))
                  }
                </div>
              )
              :
              (
                <h2 className="text-2xl font-thin text-center text-[#656565] py-10">
                  No liked products
                </h2>
              )
          }
        </div>
      </Container>
    </div>
  )
}

export default LikedProducts
