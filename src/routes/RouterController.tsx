import { Route, Routes } from "react-router-dom"
import Suspense from "../utils"
import { lazy } from "react"


const Home = lazy(() => import('../routes/home/Home'))

const RouterController = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense><Home /></Suspense>} />
    </Routes>
  )
}

export default RouterController
