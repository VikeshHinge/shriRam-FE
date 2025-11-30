import { useEffect, useState } from "react";
import { ProductCard } from "../../components/Productcard";
import { searchProduct } from "../../utils/apicall";
import ViewProductModal from "../../components/ViewProductModal";
import { useSearchParams } from "react-router-dom";
import type { ProductFormData } from "../../utils/const";

const ProductShowcase = () => {
  const [products, setProducts] = useState<ProductFormData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const [selectedProduct, setSelectedProduct] = useState<ProductFormData>({
    _id: "",
    name: "",
    price: "",
    descriptionHead: "",
    descriptionSub: [""],
    discount: "",
    image: "",
    addDiscount: false,
    colors: [""],
    type: "",
    category: "",
    warranty: "",
    quantity: 0,
    reviewImage: [""],
    delete: false,
  });
  const [isViewOpen, setIsViewOpen] = useState(false);

  const [fadeState, setFadeState] = useState("opacity-100");

  const handleView = (product: ProductFormData) => {
    setSelectedProduct(product);
    setIsViewOpen(true);
  };

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      // Fade out
      setFadeState("opacity-0");

      setTimeout(async () => {
        setLoading(true);
        try {
          const data = await searchProduct(type || "");
          if (mounted) setProducts(data);
        } catch (err: any) {
          if (mounted) setError(err.message || "Failed to load products.");
        } finally {
          if (mounted) setLoading(false);

          // Fade in
          setFadeState("opacity-100");
        }
      }, 350); // slow fade timing
    };

    load();
    return () => {
      mounted = false;
    };
  }, [type]);

  return (
    <section className="sm:w-[98%] md:w-[90%] mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6 text-amber-700">Products</h1>

      {/* FADE WRAPPER */}
      <div className={`transition-opacity duration-300 ${fadeState}`}>
        {/* Loader */}
        {loading && (
          <div className="rounded-md p-2 text-center">
            <h3 className="text-amber-700 font-semibold text-xl">Loading...</h3>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded text-red-700">
            Error: {error}
          </div>
        )}

        {/* Product Grid */}
        {!loading &&
          !error &&
          (products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products?.map((p) => (
                <ProductCard
                  key={p._id}
                  product={p}
                  onView={() => handleView(p)}
                  viewOptn={true}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-md p-2 text-center">
              <h3 className="text-amber-700 font-semibold text-xl">
                Product arriving soon...
              </h3>
            </div>
          ))}
      </div>

      {/* View Modal */}
      <ViewProductModal
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
};

export default ProductShowcase;
