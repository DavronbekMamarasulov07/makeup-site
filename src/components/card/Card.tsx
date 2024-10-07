import { useState } from "react"
import { IProduct } from "../../types"
import "./Card.css"
import { Button, message } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { addLike } from "../../redux/slices/likeSlice"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import AOS from "aos";
import "aos/dist/aos.css";
// import { useNavigate } from "react-router-dom"


AOS.init({
  duration: 500,
});

const Card = ({ product }: { product: IProduct }) => {
  const [imageError, setImageError] = useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>()
  const { likedProducts } = useSelector((state: RootState) => state.like);
  const { lang } = useSelector((state: RootState) => state.lang)
  // const navigate = useNavigate()
  // const token = localStorage.getItem("token") as string;

  const handleLikedCard = (product: IProduct) => {
    dispatch(addLike(product))
    if (isProductLiked(product.id)) {
      message.success(`${product.name} removed from liked`)
    }
    else {
      message.success(`${product.name} added to liked`)
    }
    // if(token){
    // }
    // else{
    //   navigate("/?modal=signin")
    //   message.error("Please login first")
    // }
  }

  const isProductLiked = (productId: number) => {
    return likedProducts?.some((product) => product.id === productId);
  };

  
  

  return (
    <div data-aos="flip-left" className="flex flex-col card ">
      <div className="relative">
        <div className="absolute top-0 flex items-center w-full justify-between p-2">
          <span className="uppercase text-white text-sm font-thin bg-[#222] px-3 py-[2px] ">
            hit
          </span>
          <span onClick={() => handleLikedCard(product)} className="heart-icon  p-3 flex items-center justify-center bg-white rounded-full ">
            {
              isProductLiked(product.id) ? (<AiFillHeart className="text-red-500 text-2xl" />) : (<AiOutlineHeart className="text-red-500 text-2xl" />)
            }
          </span>

        </div>
        <img className="h-[350px] w-full object-cover " onError={() => setImageError(true)} src={
          imageError ? "https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg" : product.image_link
        } alt="product_image" />
      </div>
      <div className="p-3">
        <h3 className="text-xl font-bold  line-clamp-1">{product.name}</h3>
        <p className="text-sm line-clamp-2 " dangerouslySetInnerHTML={{ __html: product?.description }}></p>
        <strong className="text-lg pt-3 block">
          {
            lang === "usd" && `$ ${product.price}` ||
            lang === "rub" && `₽ ${(+(product.price) * 96).toFixed(0)}` ||
            lang === "uz" && `${(+(product.price) * 12700).toFixed(0)} so'm`
          }
          </strong>
      </div>
      <div className="overflow-hidden card-btn-container ">
        <Button type="primary" className="card-btn !bg-[#222] w-full text-white !h-[40px]">Buy now</Button>
      </div>
    </div>
  )
}

export default Card
