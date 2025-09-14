import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/graphql/queries";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/models/Product";

export default function FeaturedProducts() {
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: {
      page: 1,
      limit: 8,
      filter: { isFeatured: true },
    },
    fetchPolicy: "cache-first",
    errorPolicy: "all",
  });

  // Add comprehensive debugging
  console.log("Featured Products Debug:", {
    loading,
    error,
    data,
    products: data?.products,
    productsArray: data?.products?.products,
    productsLength: data?.products?.products?.length
  });

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Featured Products Error:", error);
    console.error("Error message:", error.message);
    console.error("Network error:", error.networkError);
    console.error("GraphQL errors:", error.graphQLErrors);
    
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="text-center text-red-600">
            <p>Error loading featured products:</p>
            <p className="text-sm mt-2">{error.message}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  const featuredProducts: Product[] = data?.products?.products || [];
  
  // Debug the actual data structure
  console.log("Raw data structure:", JSON.stringify(data, null, 2));
  console.log("Featured products found:", featuredProducts);

  if (featuredProducts.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="text-center text-gray-600">
            <p>No featured products available at the moment.</p>
            <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
              <p className="text-sm">Debug Info:</p>
              <p className="text-xs">Data received: {data ? 'Yes' : 'No'}</p>
              <p className="text-xs">Products object: {data?.products ? 'Yes' : 'No'}</p>
              <p className="text-xs">Products array: {data?.products?.products ? 'Yes' : 'No'}</p>
              <p className="text-xs">Array length: {data?.products?.products?.length || 0}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}