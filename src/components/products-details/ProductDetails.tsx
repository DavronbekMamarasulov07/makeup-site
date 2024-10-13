import { Link } from "react-router-dom";
import { IProduct } from "../../types"
import Container from "../container/Container"
import { Breadcrumb, Button, Image, message } from 'antd';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store"; 
import { Select } from 'antd';
import { useState } from "react";
import { addToCart } from "../../redux/slices/cartSlice";



const ProductDetails = ({ product }: { product: IProduct}) => {

  const discountPrice = (Number(product?.price) - (Number(product?.price) * 10) / 100).toFixed(2)
  const { lang } = useSelector((state: RootState) => state.lang)
  const [quantity, setQuantity] = useState<number>(1)
  const [color, setColor] = useState<string>(product.product_colors[0].hex_value)
  const dispatch = useDispatch<AppDispatch>()
  


  const handleChange = (value: string) => {
    setColor(value)
    
  };



  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);

    }
    else {
      message.error("Quantity cannot be less than 1");
    }
  };

  const handleAddToCart = (product: IProduct, quantity: number) => {
    dispatch(addToCart({ ...product, quantity, color}));
    message.success(`${product.name} added to cart`);
    setQuantity(1);
  };


  return (
    <div className="mt-5 mb-10 w-full">

      <Container>
        <div className="w-full">
          <div className="w-full flex items-center justify-center">
            <Breadcrumb
              items={[
                {
                  title: <Link to={"/"}  >Home</Link>,
                },
                {
                  title: 'Product Details',
                },
                {
                  title: product.name,
                },
              ]}
            />
          </div>
          <div className="flex  items-center justify-between w-full gap-10 py-10">
            <div className="capitalize flex flex-col items-start gap-4">
              <span className="text-base uppercase bg-black text-white py-1 px-3 font-medium">hit</span>
              <span className="">{product.brand}  <span className="text-[#969696]"> / {product.category}</span></span>
              <h2 className="text-4xl w-full max-w-[300px]">{product.name}</h2>
              <p className="flex items-center gap-1 mt-10">
                {
                  Array.from({ length: 4 }).map((_, index) => (
                    <span key={index} className="text-[#969696]">
                      <FaStar className="text-black" />
                    </span>
                  ))
                }
                <FaStarHalfAlt />
              </p>
              <span className="text-[#969696]">
                (2500) feedbacks
              </span>
            </div>
            <div className="">
                <Image  width={400} src={product.api_featured_image} alt={product.name} className="!h-[500px] object-cover" />
            </div>
            <div className="flex flex-col gap-6 justify-end">
              <div className="flex items-center gap-2 pt-3 text-lg">
                <strong className="text-xl text-red-500">
                  {
                    lang === "usd" && `$${discountPrice}` ||
                    lang === "rub" && `₽${(+(discountPrice) * 96).toFixed(0)}` ||
                    lang === "uz" && `${(+(discountPrice) * 12700).toFixed(0)} so'm`
                  }
                </strong>
                <strong className="text-xl text-[#656565] line-through">
                  {
                    lang === "usd" && `$${product.price}` ||
                    lang === "rub" && `₽${(+(product.price) * 96).toFixed(0)}` ||
                    lang === "uz" && `${(+(product.price) * 12700).toFixed(0)} so'm`
                  }
                </strong>
              </div>
              <div>
                <Select
                  defaultValue={product.product_colors[0].hex_value}
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={
                    product.product_colors.map((item) => ({ value: item.hex_value, label:
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: item.hex_value }}></div>
                        <span>{(item.colour_name).slice(0, 5)}...</span>
                      </div>
                      }))
                  }
                />
              </div>
              <div className="flex items-start flex-col gap-6 w-full">
                <div className="flex items-center justify-between w-full gap-2">
                  
                  <div className="flex items-center gap-2 mt-2">
                    <Button onClick={handleDecrement} type="primary" style={{ backgroundColor: color}} className="w-[40px] h-[40px] ">-</Button>
                    <span className="w-5 text-center">{quantity}</span>
                    <Button onClick={handleIncrement} type="primary" style={{ backgroundColor: color}} className="w-[40px] h-[40px] ">+</Button>
                  </div>
                </div>
                <Button onClick={() => handleAddToCart(product, quantity)} type="primary" style={{ backgroundColor: color}} className=" text-white w-full  h-[40px]">Add to cart </Button>
              </div>
              <div className="flex items-center gap-2"> 
                <span>It is available!</span>
                <span>
                  Product code: 
                  <span className="text-[#656565]">{product.id}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductDetails
