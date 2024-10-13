/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "./index"
import { type IProduct } from "../../types"



const productsApi = api.injectEndpoints({
  endpoints:(build) => ({
    getAllProducts: build.query<IProduct[], void> ({
      query: () => ({
        url: "/products.json"
      }),
      providesTags: ["MAKEUP"],
    }),
    getProduct: build.query<IProduct, string | any>({
      query: ({id}) => ({
        url: `/products/${id}.json`
      }),
      providesTags: ["MAKEUP"],
    }),
    searchProduct: build.query<IProduct[], { brand: string | null }>({
      query: (params) => ({
        url: "/products.json",
        params
      }),
      providesTags: ["MAKEUP"],
    }),

  })
})

export const  { useGetAllProductsQuery, useGetProductQuery , useSearchProductQuery} = productsApi
