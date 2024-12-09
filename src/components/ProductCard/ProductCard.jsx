import { Button } from "../Button/Button.jsx";

export function ProductCard(props) {
  return (
    <article className="bg-background-background">
      <img src={props.imageUrl} className="aspect-square object-cover" />
      <div className="px-16 py-10">
        <div>
          <p className="text-sm">{props.brand}</p>
          <h1 className="text-3xl mb-2">{props.title}</h1>
          <p className="text-lg">{props.price} DKK</p>
        </div>
        <footer className="flex flex-col gap-2 mt-12">
          <Button variant="secondary">Add to cart</Button>
          <Button variant="tertiary">Add to wishlist</Button>
        </footer>
      </div>
    </article>
  );
}
