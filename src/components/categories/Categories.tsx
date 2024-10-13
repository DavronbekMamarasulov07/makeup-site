import { Link } from "react-router-dom";
import Container from "../container/Container";
import "./Categories.css"

const Categories = () => {


  return (
    <div className="py-5">
      <Container>
        <ul className="flex gap-4 justify-between capitalize text-xl py-3">
          {["blush", "bronzer", "eyebrow", "eyeliner", "eyeshadow", "foundation", "lip liner", "lipstick", "mascara", "nail polish"].map((category) => (
            <li
              key={category}
              className="hover:text-black transition-transform cursor-pointer category"
            >
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Categories;
