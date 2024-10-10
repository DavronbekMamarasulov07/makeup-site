import { Skeleton } from "antd";
import Container from "../container/Container";
import { IProduct } from "../../types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "./Advertising.css"
import AdvertisingCard from "./AdvertisingCard";
import { Button, Modal } from 'antd'
import { Link } from 'react-router-dom'
import { useGetProductQuery } from "../../redux/api/productsApi";
import useSearchParamsHook from "../../hooks/UseQueryParams";

const Advertising = ({ data, isLoading }: { data: IProduct[], isLoading: boolean }) => {
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getParam, removeParam } = useSearchParamsHook()
  const id = getParam('story')
  const { data: productData, isLoading: isLoadingProduct } = useGetProductQuery({ id })

  useEffect(() => {
    if (getParam('story')) {
      setIsModalOpen(true)
    }
    else {
      setIsModalOpen(false)
    }
  }, [getParam]);


  const handleCancel = () => {
    setIsModalOpen(false);
    removeParam('story')
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div>
      <Container>
        <div>
          <h2 className="animate-bounce text-4xl font-bold text-center py-10 mt-10">Advertising</h2>
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-10">
            {
              isLoading ? (
                Array.from({ length: 8 }).map((_, index) => (
                  <div key={index}>
                    <Skeleton.Image active style={{ height: 100, width: 100, borderRadius: "50%" }} />
                  </div>
                ))
              ) : (
                data?.slice(60, 68).map((product) => (
                  <div data-aos="zoom-in" key={product.id}>
                    <AdvertisingCard setImageError={setImageError} product={product} imageError={imageError} />
                  </div>
                ))
              )
            }
          </div>
        </div>
      </Container>
      <Modal
        open={isModalOpen}
        onCancel={() => handleCancel()}
        footer={null}
        closable={false}
        maskClosable={false}
      >
        {
          isLoadingProduct ? (
            <div className="py-2 mt-6 ">
              <Skeleton.Image active style={{ height: 470, width: 470 }} />
              <Skeleton.Input style={{ width: 470, height: 40 }} active />
              <Skeleton.Input style={{ width: 470 }} active />
            </div>

          )
            : (
              <div className="py-2 mt-6 ">
                <div className="l">
                  <div className="m">
                  </div>
                </div >
                <img className="w-full border-b border-[#222] mb-5" src={productData?.image_link} alt="" />
                <div className="text-center flex flex-col gap-4">
                  <h1 className="text-2xl font-bold">{productData?.name}</h1>
                  <Link onClick={() => handleCancel()} to={`/details/${getParam('story')}`}>
                    <Button type="primary" className="!bg-[#222] w-full max-w-[150px] text-white !h-[40px]">More Details</Button>
                  </Link>
                </div>
              </div >
            )
        }
      </Modal>
    </div>
  );
}

export default Advertising;
