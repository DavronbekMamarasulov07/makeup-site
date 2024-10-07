import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import LikedProducts from "../../components/likedProducts/LikedProducts"
import Header from "../../components/header/Header"

const Liked = () => {
  const {likedProducts} = useSelector((state: RootState) => state.like)
  console.log(likedProducts)
  return (
    <div >
      <Header />
      <div>
        {
          likedProducts && likedProducts.length > 0
          && 
          <div className="flex gap-2 items-center justify-center w-full">
            <h2 className="text-4xl font-bold text-center py-10">Liked Products </h2><span className="text-[#656565] font-thin">({likedProducts.length})</span>
          </div>
        }
        <LikedProducts likedProducts={likedProducts} />
      </div>

    </div>
  )
}

export default Liked
