import {api } from "./index"
import {type IProduct} from "../../types"


const categoriesApi = api.injectEndpoints({
    endpoints: (build) => ({
      getCategoryByName: build.query<IProduct[], {"product_type" : string | null}>({
        query: (params) => ({
          url: `/products.json`,
          params
        }),
        providesTags: ["CATEGORY"],
      })
    }),
  });
  
  export const {  useGetCategoryByNameQuery } = categoriesApi