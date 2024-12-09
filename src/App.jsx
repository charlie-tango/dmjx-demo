import { ProductCard } from "./components/ProductCard/ProductCard.jsx";
import bowl from "./assets/bowl.jpg";

function App() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
      <ProductCard
        brand="Studio Hafnia"
        title="Portuguese Salad Bowl"
        price="525"
        imageUrl={bowl}
      />
      <ProductCard
        brand="Studio Hafnia"
        title="Portuguese Salad Bowl"
        price="525"
        imageUrl={bowl}
      />
      <ProductCard
        brand="Studio Hafnia"
        title="Portuguese Salad Bowl"
        price="525"
        imageUrl={bowl}
      />
    </div>
  );
}

export default App;
