import { Route, Routes } from "react-router-dom"
import Suspense from "../utils"
import { lazy } from "react"


const Home = lazy(() => import('../routes/home/Home'))
const Liked = lazy(() => import('../routes/liked/Liked'))

const RouterController = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense><Home /></Suspense>} />
      <Route path="/liked" element={<Suspense><Liked /></Suspense>} />
    </Routes>
  )
}

export default RouterController
