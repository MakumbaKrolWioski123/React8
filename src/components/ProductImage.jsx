function ProductImage({ src, alt }) {
  return (
    <div className="product-image">
      <img style={{ width: '300px', height: '200px', objectFit: 'cover' }} src={src} alt={alt} />
    </div>
  );
}

export default ProductImage;