import type React from "react";
import type { ProductFormData } from "../utils/const";

interface ProductCardProps {
  product: ProductFormData;
  viewOptn: boolean;
  onView: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewOptn,
  onView,
}) => {
  const { name, price, discount, addDiscount, image, descriptionHead } =
    product;

  const hasDiscount = addDiscount && Number(discount) > 0;
  const discountedPrice = hasDiscount
    ? Math.round(Number(price) * (1 - Number(discount) / 100))
    : price;

  return (
    <article className="border rounded-xl border-amber-500 overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-3 flex flex-col justify-between">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-contain transition-transform duration-300 hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='20'%3EImage not available%3C/text%3E%3C/svg%3E";
          }}
        />

        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded">
            {discount}%
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h2 className="text-sm font-semibold line-clamp-2">{name}</h2>

        {descriptionHead && (
          <p className="text-xs text-gray-500 line-clamp-2">
            {descriptionHead}
          </p>
        )}

        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-semibold">₹{discountedPrice}</span>
          {hasDiscount && (
            <span className="text-sm text-gray-400 line-through">₹{price}</span>
          )}
        </div>

        {hasDiscount && (
          <span className="text-xs bg-green-500 text-white py-0.5 px-2 rounded-full w-max">
            You save {discount}%
          </span>
        )}
      </div>

      {viewOptn && (
        <button
          onClick={onView}
          className="mt-3 w-full py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors duration-200"
        >
          View
        </button>
      )}
    </article>
  );
};
