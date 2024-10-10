import { SearchOutlined } from '@ant-design/icons'
import cart from '../../images/cart.svg'
import login from '../../images/login.svg'
import { Link } from 'react-router-dom'
import { Badge, Modal, Select } from 'antd'
import { useEffect, useState } from 'react'
import useSearchParamsHook from '../../hooks/UseQueryParams'
import SignIn from '../auth/signIn/SignIn'
import SignUp from '../auth/signUp/SignUp'
import { AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { setLang } from '../../redux/slices/langSlice'


const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {setParam, getParam ,removeParam} = useSearchParamsHook()
  const { likedProducts } = useSelector((state: RootState) => state.like)
  const { lang } = useSelector((state: RootState) => state.lang)
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
  return (
    <nav className='shadow-md ' >
      <div className='absolute top-2 right-5 '>
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
      <div className="flex items-center justify-between max-w-[1300px] mx-auto pt-10 pb-5 ">
        <div>
          <SearchOutlined style={{ fontSize: 30, fontWeight: 'medium' }} />
        </div>
        <Link to={'/'} className='flex flex-col items-center w-full '>
          <h2 className="text-5xl uppercase font-bold">
            makeup
          </h2>
          <span className="font-thin">beauty without limits</span>
        </Link>
        <div className='flex gap-3 cursor-pointer'>
          <div>
            <Link to={'/liked'}>
              <Badge count={likedProducts?.length} overflowCount={9} >
                <AiOutlineHeart size={25} className=' text-[#222]' />
              </Badge>
            </Link>
          </div>
          <div>
            <Link to={'/cart'}>
              <Badge count={5} overflowCount={9} >
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
