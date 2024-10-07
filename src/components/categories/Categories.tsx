// import { useState } from "react";
import Container from "../container/Container";
// import { useGetAllCategoriesQuery } from "../../redux/api/categoriesApi";

const Categories = () => {
  // const [categories, setCategories] = useState<string>("");

  // const { data } = useGetAllCategoriesQuery(categories, { skip: !categories });
  // console.log(data);

  // const handleTag = (tag: string) => {
  //   setCategories(tag);
  // };

  // const handleRemoveTag = () => {
  //   setCategories("");
  // };

  // console.log(categories); 

  return (
    <>
      <Container>
        <ul className="flex gap-4 justify-between capitalize text-xl py-3">
          {["blush", "bronzer", "eyebrow", "eyeliner", "eyeshadow", "foundation", "lip liner", "lipstick", "mascara", "nail polish"].map((category) => (
            <li
              key={category}
              // onMouseLeave={handleRemoveTag}
              // onMouseEnter={() => handleTag(category.replace(/ /g, "_"))}
            >
              {category}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Categories;
