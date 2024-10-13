import { Route, Routes } from "react-router-dom"
import Suspense from "../utils"
import { lazy } from "react"


const Home = lazy(() => import('../routes/home/Home'))
const Liked = lazy(() => import('../routes/liked/Liked'))
const Cart = lazy(() => import('../routes/cart/Cart'))
const Details = lazy(() => import('../routes/details/Details'))
const Category = lazy(() => import('./category/Category'))
const Search = lazy(() => import('../routes/search/Search'))

const RouterController = () => {
  return (
    <Routes>
      <Route path="" element={<Suspense><Home /></Suspense>} />
      <Route path="liked" element={<Suspense><Liked /></Suspense>} />
      <Route path="cart" element={<Suspense><Cart /></Suspense>} />
      <Route path="details/:id" element={<Suspense><Details /></Suspense>} />
      <Route path="category/:name" element={<Suspense><Category /></Suspense>} />
      <Route path="search" element={<Suspense><Search /></Suspense>} />
      <Route path="*" element={<Suspense><Home /></Suspense>} />
    </Routes>
  )
}

export default RouterController
