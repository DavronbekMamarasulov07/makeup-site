import RouterController from "./routes/RouterController"
import { AiOutlineToTop } from "react-icons/ai"
import { Tooltip } from "antd"


const App = () => {
  return (
    <div>
        <RouterController />
        <div onClick={() => window.scrollTo(0, 0)} className="fixed bottom-5 right-5 bg-black p-2 rounded-full z-50">
          <Tooltip title="To Top">
            <AiOutlineToTop className="text-3xl text-white" />
          </Tooltip>
        </div>
    </div>
  )
}

export default App
