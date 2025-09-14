import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/graphql/queries";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/models/Product";

interface ProductGridProps {
  category?: string;
  products: Product[];
  addToCart: (p: Product) => void;
  addToWishlist: (p: Product) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

export default function ProductGrid({ category }: ProductGridProps) {
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: {
      page: 1,
      limit: 24,
      ...(category && { filter: { category } }), // Only add filter if category exists
    },
    fetchPolicy: "network-only",
    errorPolicy: "all", // Show partial data even if there are errors
  });

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-lg text-gray-600">Loading products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-center py-10">
          <div className="text-red-500 text-lg mb-2">Error loading products</div>
          <div className="text-gray-600 text-sm">{error.message}</div>
        </div>
      </div>
    );
  }

  // Extract products based on your GraphQL schema structure
  const products: Product[] = data?.products?.products || [];

  return (
    <div className="py-16 bg-gray-50">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          {category ? `${category} Collection` : "All Products"}
        </h2>
        {products.length > 0 && (
          <p className="text-gray-600 text-center">
            {data?.products?.totalProducts || products.length} products found
          </p>
        )}
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-gray-400 mb-4">
            <svg
              className="mx-auto h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0H4m16 0l-2-2m2 2l-2 2M4 13l2-2m-2 2l2 2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No products found
          </h3>
          <p className="text-gray-600">
            {category
              ? `No products available in the ${category} category.`
              : "No products are currently available."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Pagination info */}
      {data?.products && products.length > 0 && (
        <div className="mt-8 text-center text-gray-600 text-sm">
          Page {data.products.currentPage} of {data.products.totalPages}
          {data.products.hasNextPage && (
            <span className="ml-2 text-blue-600">More products available</span>
          )}
        </div>
      )}
    </div>
  );
}