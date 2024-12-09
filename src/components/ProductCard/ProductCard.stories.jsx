import { ProductCard } from "./ProductCard.jsx";
import bowl from "../../assets/bowl.jpg";

export default {
  component: ProductCard,
};

export const Primary = {
  args: {
    brand: "Studio Hafnia",
    title: "Portuguese Salad Bowl",
    imageUrl: bowl,
    price: "525",
  },
  render: (props) => <div style={{width: 480}}><ProductCard {...props} /></div>,
};

export const Art = {
  args: {
    brand: "Jacob Laoru",
    title: "Kombination no. 05",
    imageUrl: "/src/assets/art.jpg",
    price: "1.127"
  },
  render:props => <div
    style={{
      width: 480
    }}><ProductCard {...props} /></div>
};
