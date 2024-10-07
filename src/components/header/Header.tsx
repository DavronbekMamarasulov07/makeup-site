import { SearchOutlined } from '@ant-design/icons'
import cart from '../../images/cart.svg'
import login from '../../images/login.svg'
const Header = () => {
  return (
    <nav>
      <div className="flex items-center justify-between">
        <div>
          <SearchOutlined style={{ fontSize: 30 }} />
        </div>
        <div className='flex flex-col items-center'>
          <h2 className="text-5xl uppercase font-bold">
            makeup
          </h2>
          
          <span className="font-thin">beauty without limits</span>
        </div>
        <div className='flex gap-2'>
          <div>
            <img width={20} src={login} alt="" />
          </div>
          <div>
            <img width={20} src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
