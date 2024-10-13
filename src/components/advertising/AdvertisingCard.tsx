import React, { useState } from 'react'
import { IProduct } from '../../types'
import useSearchParamsHook from '../../hooks/UseQueryParams'


interface IProps {
  product: IProduct
  imageError: boolean
  setImageError: React.Dispatch<React.SetStateAction<boolean>>
}

const AdvertisingCard = ({ product, imageError, setImageError }: IProps & {}) => {
  const [storyVisible, setStoryVisible] = useState<boolean>(false);
  const {setParam, removeParam} = useSearchParamsHook()
  



  const handleStory = (product: IProduct) => {    
    setParam('story', product.id.toString())
    
    setStoryVisible(true)
    setTimeout(() => {
      removeParam('story')
    }, 5000)
  };

  



  return (
    <div onClick={() => handleStory(product)} className="shadow-lg rounded-full w-[100px] h-[100px]">             
      <img
        style={storyVisible ? { border: "2px solid gray" } : { border: "2px solid green" }}
        className="object-cover rounded-full w-full h-full p-2"
        onError={() => setImageError(true)}
        src={imageError ? "https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg" : product.api_featured_image}
        alt="product_image"
      />
      
    </div>
  )
}

export default AdvertisingCard
