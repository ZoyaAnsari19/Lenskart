import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/queries";
import { ProductCard } from "../components/ProductCard"; 
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { formatPrice, calculateDiscountPrice, getStars } from "../lib/utils";

const KidEyeglasses: React.FC = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: { page: 1, limit: 12, filter: { category: "kids-eyeglasses" } },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">❌ Failed to load.</p>;

  const products = data?.products?.products || [];

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        👶 Kids Eyeglasses ({products.length} found)
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: any) => {
          const discountedPrice = calculateDiscountPrice(product.price, product.discount || 0);
          const stars = getStars(product.rating || 0);

          return (
            <ProductCard
              key={product.id}
              product={product}
              price={formatPrice(product.price)}
              discountedPrice={formatPrice(discountedPrice)}
              stars={stars}
              onAddToCart={() => addToCart(product)}
              onAddToWishlist={() => addToWishlist(product)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default KidEyeglasses;
