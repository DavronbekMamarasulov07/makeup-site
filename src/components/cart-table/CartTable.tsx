import { TiDelete } from "react-icons/ti";
import { Image, Popconfirm, PopconfirmProps, message } from "antd";
import { IProduct } from "../../types";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  selectCartProductById,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";

const CartTable = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state: RootState) =>
    selectCartProductById(state, product.id)
  );

  const quantity = cartProduct?.quantity || 0;

  const handleIncrement = () => {

    dispatch(incrementQuantity(product.id));
  };



  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success(`${product.name} removed in cart`);
    dispatch(removeFromCart(product.id));
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error(`${product.name} not removed in cart`);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrementQuantity(product.id));

    } else {
      dispatch(removeFromCart(product.id));
      message.error(`${product.name} removed in cart`);
    }
  };

  const total =
    quantity >= 10
      ? ((+(product.price * quantity).toFixed(2)) - ((+(product.price * quantity).toFixed(2)) % 10)).toFixed(2)
      : (product.price * quantity).toFixed(2);



  return (
    <tr className="w-full">
      <td className="">
        <Image
          width={100}
          height={100}
          className="w-full"
          src={product.api_featured_image}
          alt=""
        />
      </td>
      <td className="font-bold">{product.name}</td>
      <td className="font-bold ">
        <div className="flex items-center justify-center">
          <span style={{ backgroundColor: product.color }} className={`text-black w-8 mx-auto h-8 rounded-full `}></span>
        </div>
      </td>
      <td className="font-bold ">${product.price}</td>
      <td className="font-bold">${total}</td>
      <td className=" text-center ">
        <div className="flex items-center gap-5 justify-center">
          <AiOutlineMinus
            onClick={handleDecrement}
            className="text-black text-xl font-bold transition-transform active:scale-90"
          />
          <span className="w-5 text-center">{quantity}</span>
          <AiOutlinePlus
            onClick={handleIncrement}
            className="text-black text-xl font-bold transition-transform active:scale-90"
          />
        </div>
      </td>
      <td>
        <Popconfirm
          title={`Delete the ${product.name}`}
          description={`Are you sure to delete this ${product.name}?`}
          onConfirm={confirm}
          onCancel={cancel}
          okText="Delete"
          cancelText="Cancel"
        >
          <TiDelete
            className="text-4xl text-center block mx-auto text-black cursor-pointer transition-transform active:scale-90"
          />
        </Popconfirm>
      </td>
    </tr>
  );
};

export default CartTable;
