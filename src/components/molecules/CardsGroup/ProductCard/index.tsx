import Button from '@/Components/Atoms/Button';
import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  price: string;
  onAddToCart: () => void;
}

export default function ProductCard({
  imageUrl,
  productName,
  price,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <img className="w-full" src={imageUrl} alt={productName} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{productName}</h3>
        <p className="text-line">{price}</p>
        <Button className="mt-2 w-full py-2 text-center" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
