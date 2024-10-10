import { Link } from "react-router-dom"
import Container from "../container/Container"
import { Button, Modal } from "antd"
import { useState } from "react";
import FooterForm from "./FooterForm";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-[#f5f5f5]">
      <Container>
        <div className="flex items-start justify-between py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 w-full max-w-3xl">
            <ul className="flex flex-col gap-3 text-gray-500 capitalize">
              <li className="hover:text-black transition-transform cursor-pointer">About</li>
              <li className="hover:text-black transition-transform cursor-pointer">Contact</li>
              <li className="hover:text-black transition-transform cursor-pointer">Terms of use</li>
              <li className="hover:text-black transition-transform cursor-pointer">Application</li>
            </ul>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li className="hover:text-black transition-transform cursor-pointer">About the delivery</li>
              <li className="hover:text-black transition-transform cursor-pointer">Payment methods</li>
              <li className="hover:text-black transition-transform cursor-pointer">The originality of the products</li>
              <li className="hover:text-black transition-transform cursor-pointer">Exchange and refund</li>
            </ul>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li className="hover:text-black transition-transform cursor-pointer">Articles</li>
              <li className="hover:text-black transition-transform cursor-pointer">News</li>
              <li className="hover:text-black transition-transform cursor-pointer">Beauty Club</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 items-start">
              <li className="text-2xl">
                <Link to={"tel:+998-88-073-74-74"}> +998-88-073-74-74</Link>
              </li>
              <li className="text-gray-500">
                Daily from 7:55 to 20:05
              </li>
              <li>
                <Button onClick={showModal} className="!p-0 text-lg" type="link">
                  Callback
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Modal
        title="We will call you back ourselves!"
      open={isModalOpen} 
      onCancel={handleCancel}
      maskClosable={false}
      footer={null}
      >
        <div>
          <FooterForm />
        </div>
      </Modal>
    </div>
  )
}

export default Footer
