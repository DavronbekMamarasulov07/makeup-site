import { useGetAllProductsQuery } from "../../redux/api/productsApi";
import { Typography } from "antd";
import useSearchParamsHook from "../../hooks/UseQueryParams";
import Header from "../../components/header/Header.tsx";
import Card from "../../components/card/Card.tsx";
import Container from "../../components/container/Container.tsx";
import { IProduct } from "../../types/index.ts";
import Footer from "../../components/footer/Footer.tsx";
import notProduct from "../../images/ProductNotFound.png";

const { Title } = Typography;

const Search = () => {
  const { getParam } = useSearchParamsHook();
  const search : string | null  = getParam("brand");
  const {data } = useGetAllProductsQuery()

  const filterSearchProduct = (data as unknown as IProduct[])?.filter((product: IProduct) =>  product.name.toLowerCase().includes((search ?? "").toLowerCase()))
  const filteredData = (filterSearchProduct as unknown as IProduct[])?.filter((product: IProduct) => String(product.price) !== "0.0" && product.description !== "" && product.product_colors.length > 0 && product.product_colors[0].hex_value.split(",").length === 1)
  

  return (
    <div className="w-full mx-auto min-h-screen flex flex-col">
      <Header />
      <div className="w-full mx-auto flex-grow my-[40px]">
        <Container>
          <div className="w-full">
            <Title className="capitalize animate-bounce" level={2}>Search results for "<span className="text-[#656565] underline ">{search}</span>"</Title>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredData && filteredData?.length === 0 ? (
                <div className="flex items-center justify-center">
                  <img width={300} src={notProduct} alt="" />
                </div>
              ) : (
                filteredData?.slice(0, 16).map((product) => (
                  <Card key={product.id} product={product} cardType="search" />
                ))
              )}
            </div>
          </div>
        </Container>
      </div>
      <Footer/>
    </div>
  );
}

export default Search
