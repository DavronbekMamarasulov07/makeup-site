import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import LikedProducts from "../../components/likedProducts/LikedProducts"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

const Liked = () => {
  const {likedProducts} = useSelector((state: RootState) => state.like)
  return (
    <div className="flex flex-col min-h-screen" >
      <Header />
      <div className="flex-grow mb-10">
        {
          likedProducts && likedProducts.length > 0
          && 
          <div className="flex gap-2 items-center justify-center w-full">
            <h2 className="text-4xl font-bold text-center py-10">Liked Products </h2><span className="text-[#656565] font-thin">({likedProducts.length})</span>
          </div>
        }
        <LikedProducts likedProducts={likedProducts} />
      </div>
        <Footer />
    </div>
  )
}

export default Liked
