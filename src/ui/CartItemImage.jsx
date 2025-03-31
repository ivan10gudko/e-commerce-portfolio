function CartItemImage({ image, alt }) {
  return (
      <figure
        className="h-full md:p-10 max-h-56 flex justify-center"
      >
        <img
          src={image}
          alt={alt}
          className="max-h-full max-w-full object-contain"
        />
      </figure>
  );
}

export default CartItemImage;
