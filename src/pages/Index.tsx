// import HeroSection from "@/components/sections/HeroSection";
// import CategoryIcons from "@/components/sections/CategoryIcons";
// import TrustIndicators from "@/components/sections/TrustIndicators";
// import ProductGrid from "@/components/sections/ProductGrid";
// import FeaturesSection from "@/components/sections/FeaturesSection";
// // 👇 Products component ka sahi path lagao
// import Products from "@/components/Product";  

// export default function Index() {
//   return (
//     <main className="container mx-auto p-6">
//       <HeroSection />
//       <CategoryIcons />
//       <TrustIndicators />
//       <ProductGrid />
//       <FeaturesSection />

//       {/* Featured Products Section */}
//       <h2 className="text-2xl font-bold mt-10 mb-4">Featured Products</h2>
//       <Products />
//     </main>
//   );
// }

import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import CategoryIcons from "@/components/sections/CategoryIcons";
import TrustIndicators from "@/components/sections/TrustIndicators";
import ProductGrid from "@/components/sections/ProductGrid";
import FeaturesSection from "@/components/sections/FeaturesSection";
import { Product } from "@/models/Product";

export default function Index() {
  // State for cart and wishlist functionality
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
  };

  const addToWishlist = (product: Product) => {
    setWishlist(prev => [...prev, product]);
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  const isInWishlist = (id: string) => {
    return wishlist.some(item => item.id === id);
  };

  return (
    <main className="container mx-auto p-6">
      <HeroSection />
      <CategoryIcons />
      <TrustIndicators />
      
      {/* ProductGrid with required props */}
      <ProductGrid 
        products={[]}  // Empty array since component fetches its own data
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
        isInWishlist={isInWishlist}
      />
      
      <FeaturesSection />
    </main>
  );
}