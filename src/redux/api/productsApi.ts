import { api } from "./index"
import { type IProduct } from "../../types"

const productsApi = api.injectEndpoints({
  endpoints:(build) => ({
    getAllProducts: build.query<IProduct, void> ({
      query: () => ({
        url: "/products.json"
      }),
      providesTags: ["MAKEUP"],
    })
  })
})

export const  { useGetAllProductsQuery } = productsApi
