/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import type { ProductFormData } from "../utils/const";

interface ViewProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductFormData;
}

const ViewProductModal: React.FC<ViewProductModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    if (product) setMainImage(product.image);
  }, [product]);

  if (!product) return null;
  const hasDiscount = product.addDiscount && Number(product.discount) > 0;
  const discountedPrice = hasDiscount
    ? Math.round(Number(product.price) * (1 - Number(product.discount) / 100))
    : product.price;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white p-5 sm:p-7 rounded-2xl shadow-xl max-w-full md:max-w-xl lg:max-w-2xl mx-4 sm:mx-auto overflow-auto max-h-[90vh]">
        {/* Main Image */}
        <img
          src={mainImage}
          alt={product.name}
          className="w-full h-72 sm:h-96 object-contain rounded-xl mb-5 border border-gray-200 p-3 bg-gradient-to-b from-gray-50 to-gray-100 shadow-sm"
        />

        {/* Product Title */}
        <h2 className="text-2xl font-bold mb-3 text-gray-900 tracking-wide">
          {product.name}
        </h2>

        {/* Price */}
        <div className="mt-1 flex items-center gap-3">
          <span className="text-3xl font-bold text-green-600">
            ₹{discountedPrice}
          </span>
          {hasDiscount && (
            <span className="text-lg text-gray-400 line-through">
              ₹{product.price}
            </span>
          )}
        </div>

        {/* Description */}
        <div className="mt-4 mb-5">
          <p className="font-semibold text-gray-900 mb-1">Description:</p>
          <p className="text-gray-700 leading-relaxed">
            {product.descriptionHead}
          </p>

          {product.descriptionSub?.length > 0 && (
            <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
              {product.descriptionSub.map((d, index) => (
                <li key={index}>{d}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Warranty & Discount */}
        <div className="mb-6 space-y-1">
          <p className="text-gray-800">
            <span className="font-semibold">Warranty:</span> {product.warranty}
          </p>

          {product.addDiscount && (
            <p className="text-green-600 font-semibold">
              Discount: {product.discount}%
            </p>
          )}
        </div>

        {/* Color Images */}
        {product.colors?.length > 0 && (
          <div className="mb-6">
            <p className="font-semibold text-gray-900 mb-2">Take a Look:</p>

            <div className="flex gap-4 overflow-x-auto py-2 scrollbar-none">
              <img
                src={product?.image}
                className="w-20 h-20 rounded-lg border border-gray-300 p-1 flex-shrink-0 hover:scale-110 transition-transform duration-200 cursor-pointer bg-gray-50 shadow-sm"
                onClick={() => setMainImage(product?.image)}
              />

              {product.colors.map((ele, i) => (
                <img
                  key={i}
                  src={ele}
                  className="w-20 h-20 rounded-lg border border-gray-300 p-1 flex-shrink-0 hover:scale-110 transition-transform duration-200 cursor-pointer bg-gray-50 shadow-sm"
                  onClick={() => setMainImage(ele)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Review Images */}
        {product?.reviewImage?.length > 0 && (
          <div className="mb-6">
            <p className="font-semibold text-gray-900 mb-2">Reviews:</p>

            <div className="flex gap-4 overflow-x-auto py-2 scrollbar-none">
              {product?.reviewImage.map((ele, i) => (
                <img
                  key={i}
                  src={ele}
                  className="w-20 h-20 rounded-lg border border-gray-300 p-1 flex-shrink-0 hover:scale-110 transition-transform duration-200 cursor-pointer bg-gray-50 shadow-sm"
                  onClick={() => setMainImage(ele)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Quantity */}
        <p className="mt-3 font-semibold text-gray-900 text-lg">
          Quantity: {product.quantity}
        </p>
      </div>
    </Modal>
  );
};

export default ViewProductModal;
