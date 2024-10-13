import { useDispatch, useSelector } from "react-redux";
import {  AppDispatch, RootState } from "../../redux/store";
import { IProduct } from "../../types";
import CartTable from "../../components/cart-table/CartTable.tsx";
import Container from "../../components/container/Container.tsx";
import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import useSearchParamsHook from "../../hooks/UseQueryParams.tsx";
import BankCardForm from "../../components/bank-card-form/BankCardForm.tsx";
import { clearCart } from "../../redux/slices/cartSlice.ts";

const CartComponent = () => {
  const { setParam, getParam ,removeParam } = useSearchParamsHook();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { cartProduct }: { cartProduct: IProduct[] } = useSelector(
    (state: RootState) => state.cart
  );
  const [count, setCount] = useState<number>(4);
  const dispatch = useDispatch<AppDispatch>();
  
  const total = cartProduct
    .map((product) => product.price * (product.quantity || 0))
    .reduce((a, b) => a + b, 0).toFixed(2);

  const Total = +total;

  const step = 1

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    if (getParam("card")) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [getParam]);

  const showModal = () => {
    setIsModalOpen(true);
    setParam("card", "open");
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
    removeParam("card");
  };

  console.log(total);
  return (
    <div >
        <Container>
          <div className="w-full flex flex-col items-end">
            <div className="w-full">
              <h2 className=" text-left text-3xl font-bold mb-5 flex items-center  gap-5">
              Product Cart <Button onClick={() => dispatch(clearCart())} type="primary" className="!bg-black !text-white" >Clear Cart</Button>
              </h2>
            </div>
            <table className="w-full  cart-table">
              <thead className="">
                <tr  >
                  <th scope="col">Product Image</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Color</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">SubTotal</th>
                  <th scope="col">
                    <p>Quantity</p>
                    <span className="text-[#56b280] text-[10px]">
                      (quantity more than 10 will get 10% discount)
                    </span>
                  </th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="pt-5 text-center">
                {cartProduct && cartProduct.length > 0 ? (
                  cartProduct.slice(0, count * step).map((product) => (
                    <CartTable key={product.id} product={product} />
                  ))
                ) : (
                  <tr className="w-full">
                    <td colSpan={6} className="text-center py-10">
                      Cart is empty
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {
              cartProduct && cartProduct.length > 4 && (
                <div className="w-full flex justify-end">
                  <Button
                    onClick={() => setCount(count + 1)}
                    size="large"
                    type="primary"
                    className="!bg-black !text-white mx-auto"
                  >
                    View More
                  </Button>
                </div>
              )
            }
            {cartProduct && cartProduct.length > 0 ? (
              <div className="bg-gray-100 flex flex-col w-full max-w-[400px] p-5 mt-5 gap-2 items-end">
                <div className=" w-full flex justify-between gap-5 ">
                  <span className="text-2xl">SubTotal: </span>{" "}
                  <strong className="text-xl">${total}</strong>
                </div>
                <div className=" w-full flex justify-between gap-5">
                  <span className="text-2xl">Shipping</span>{" "}
                  <strong className="text-xl">Free</strong>
                </div>
                <div className=" w-full flex justify-between gap-5">
                  <span className="text-2xl text-black font-bold">
                    Total:{" "}
                  </span>{" "}
                  <strong className="text-xl text-black">${total}</strong>
                </div>
                <Button
                  onClick={showModal}
                  size="large"
                  type="primary"
                  className="!bg-black !text-white"
                >
                  Checkout
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </Container>
      <Modal
        className="custom-modal"
        footer={null}
        maskClosable={false}
        centered
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <BankCardForm  total={Total} />
      </Modal>
    </div>
  );
};
export default CartComponent;
