import { TiDelete } from "react-icons/ti";
import { Image, Popconfirm, PopconfirmProps, message } from "antd";
import { IProduct } from "../../types";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";

const CartTable = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const {lang} = useSelector((state: RootState) => state.lang)

  const quantity = product.quantity ? product.quantity : 0;
  
  
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success(`${product.name} removed in cart`);
    dispatch(removeFromCart({ id: product.id as number, color: product.color as string }));
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error(`${product.name} not removed in cart`);
  };

  const handleDecrement = (product: IProduct) => {
    if (product.quantity && product.quantity > 1) {
      dispatch(decrementQuantity({ id: product.id as number, color: product.color  as string }));
      console.log(product)
    } else {
      dispatch(removeFromCart({ id: product.id as number, color: product.color as string }));
      message.error(`${product.name} removed in cart`);
    }
  };

  const handleIncrement = (product: IProduct) => {
    dispatch(incrementQuantity({ id: product.id as number, color: product.color as string }));
    console.log(product)
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
      <td className="font-bold ">
        {
          lang === "usd" && `$${product.price}` ||
          lang === "rub" && `₽${(+(product.price) * 96).toFixed(0)}` ||
          lang === "uz" && `${(+(product.price) * 12700).toFixed(0)} so'm`
        }
      </td>
      <td className="font-bold">
        {
          lang === "usd" && `$${total}` ||
          lang === "rub" && `₽${(+(total) * 96).toFixed(0)}` ||
          lang === "uz" && `${(+(total) * 12700).toFixed(0)} so'm`
        }
      </td>
      <td className=" text-center ">
        <div className="flex items-center gap-5 justify-center">
          <AiOutlineMinus
            onClick={() => handleDecrement(product)}
            className="text-black text-xl font-bold transition-transform active:scale-90"
          />
          <span className="w-5 text-center">{quantity}</span>
          <AiOutlinePlus
            onClick={() => handleIncrement(product)}
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
