import {api } from "./index"
import {type IProduct} from "../../types"


const categoriesApi = api.injectEndpoints({
    endpoints: (build) => ({
      getAllCategories: build.query<IProduct, string>({

        query: (tag) => ({
          url: `/products.json?product_type=${tag}`,
        }),
        providesTags: ["MAKEUP"],
      }),
    }),
  });
  
  export const { useGetAllCategoriesQuery } = categoriesApi