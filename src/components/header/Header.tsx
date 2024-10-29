import cart from '../../images/cart.svg'
import login from '../../images/login.svg'
import {  Link, useNavigate } from 'react-router-dom'
import { AutoComplete, Badge, Form, Modal, Select } from 'antd'
import { useEffect, useState } from 'react'
import useSearchParamsHook from '../../hooks/UseQueryParams'
import SignIn from '../auth/signIn/SignIn'
import SignUp from '../auth/signUp/SignUp'
import { AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { setLang } from '../../redux/slices/langSlice'
import { BiSearch } from 'react-icons/bi'
import { useGetAllProductsQuery } from '../../redux/api/productsApi'


const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {setParam, getParam ,removeParam} = useSearchParamsHook()
  const { likedProducts } = useSelector((state: RootState) => state.like)
  const { cartProduct } = useSelector((state: RootState) => state.cart)
  const { lang } = useSelector((state: RootState) => state.lang)
  const [hidden, setHidden] = useState<boolean>(false);
  const navigate = useNavigate()
  const { data } = useGetAllProductsQuery()


  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (value: string) => {
    dispatch(setLang(value))
  };

  useEffect(() => {
    if(getParam('modal')){
      setIsModalOpen(true)
    }
    else{
      setIsModalOpen(false)
    }
  }, [getParam])
  

  const handleLogin = () => {
    setIsModalOpen(false);
    setParam('modal', 'signin')
  }

  const handleCancel = () => {
    setIsModalOpen(false);
    removeParam('modal')
  };


  const handleSearchSubmit = (value: { search: string }) => {
    navigate(`/search?brand=${value.search}`);
  };

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const loadData = async (searchText: string) => {
    try {
      setSearch(searchText);
    } catch (error) {
      console.error("Error loading search data:", error);
    }
  };
  return (
    <nav className='shadow-md ' >
      <div className='select-lang absolute top-2 right-5 '>
        <Select
          
          defaultValue={
            lang === 'uz' ? 'Uz' : lang === 'usd' ? 'Usd' : 'Rub'
          }
          style={{ width: 80 }}
          onChange={handleChange}
          className='uppercase'
          options={[
            { value: 'uz', label: 'UZ' },
            { value: 'usd', label: 'USD' },
            { value: 'rub', label: 'RUB' },
            
          ]}
        />
      </div>
      <div className="flex items-center justify-between  max-w-[1300px] mx-auto pt-10 pb-5 gap-10 ">
        <div className="search w-full max-w-[500px]">
          <Form
            name="basic"
            initialValues={{ search: getParam("brand") }}
            onFinish={handleSearchSubmit}
            className='w-full flex items-center gap-2'
          >
            <BiSearch  className='text-2xl' onClick={() => setHidden(!hidden)}/>
            <Form.Item
              name="search"
              className="w-full  !mb-0"
              style={{ display: hidden ? "none" : "block" }}
              rules={[{ required: false }]}
            >
               <AutoComplete
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navigate(`/search?brand=${search}`);
                  }
                }}
                onChange={onSelect}
                options={data?.map((product) => ({
                  label: (
                    <Link
                      className="block capitalize"
                      key={product.id}
                      to={`/details/${product.id}`}
                    >
                      {product.brand}
                    </Link>
                  ),
                }))}
                style={{ width: "100%" }}
                className="custom-autocomplete w-full "
                onSelect={onSelect}
                onSearch={(text) => (text ? loadData(text) : loadData(""))}
                placeholder="Search..."
              />
            </Form.Item>
          </Form>
        </div>
        <Link to={'/'} className='flex flex-col items-center w-full'>
          <h2 className="text-5xl uppercase font-bold">
            makeup
          </h2>
          <span className="font-thin">beauty without limits</span>
        </Link>
        <div className='flex gap-3 cursor-pointer justify-end w-full'>
          <div>
            <Link to={'/liked'}>
              <Badge count={likedProducts?.length} overflowCount={9} >
                <AiOutlineHeart size={28} className=' text-[#222] !font-thin' />
              </Badge>
            </Link>
          </div>
          <div>
            <Link to={'/cart'}>
              <Badge count={cartProduct?.length} overflowCount={9} >
                <img width={25} src={cart} alt="" />
              </Badge>
            </Link>
          </div>
          <div>
            <img onClick={handleLogin} width={25} src={login} alt="" />
          </div>
        </div>
      </div>
      <Modal
      title={
        getParam('modal') === 'signin' ? 'Sign In' : 'Sign Up'
      } 
      open={isModalOpen} 
      onCancel={handleCancel}
      footer={null}
      maskClosable={false}
      >
        
        <div className='pt-4 px-10' >
          {
            getParam('modal') === 'signin' && <SignIn /> ||
            getParam('modal') === 'signup' && <SignUp />
          }
        </div>
      </Modal>
    </nav>
  )
}

export default Header
