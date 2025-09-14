// import React, { useState } from "react";
// import { useLazyQuery } from "@apollo/client";
// import { TRACK_ORDER } from "../graphql/queries";
// import  { Product }  from "../models/Product";

// export default function TrackOrder() {
//   const [orderId, setOrderId] = useState("");
//   const [getOrder, { data, loading, error }] = useLazyQuery(TRACK_ORDER, {
//     variables: { orderId },
//     fetchPolicy: "network-only",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (orderId.trim() !== "") {
//       getOrder();
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Track Your Order</h2>

//       <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
//         <input
//           type="text"
//           placeholder="Enter Order ID"
//           value={orderId}
//           onChange={(e) => setOrderId(e.target.value)}
//           className="border p-2 rounded flex-1"
//         />
//         <button type="submit" className="bg-blue-600 text-white px-4 rounded">
//           Track
//         </button>
//       </form>

//       {loading && <p>Loading...</p>}
//       {error && <p className="text-red-600">Error: {error.message}</p>}

//       {data?.trackOrder && (
//         <div className="border p-4 rounded shadow">
//           <h3 className="font-bold mb-2">Order ID: {data.trackOrder.orderId}</h3>
//           <p>Status: {data.trackOrder.status}</p>
//           <p>Total Amount: ₹{data.trackOrder.totalAmount}</p>
//           <p>Expected Delivery: {data.trackOrder.expectedDelivery}</p>

//           <h4 className="mt-4 font-semibold">Items:</h4>
//           <ul className="list-disc ml-6">
//             {data.trackOrder.map((item: any, idx: number) => (
//               <li key={idx}>
//                 {item.name} - {item.qty} x ₹{item.price}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { TRACK_ORDER } from "../graphql/queries";
import { Product } from "../models/Product";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [getOrder, { data, loading, error }] = useLazyQuery(TRACK_ORDER, {
    fetchPolicy: "network-only",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim() !== "") {
      // Pass variables here, not in useLazyQuery call options
      getOrder({ variables: { id: orderId } });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">📦 Track Your Order</h2>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mb-6 flex gap-3">
          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition"
          >
            Track
          </button>
        </form>

        {/* Loader / Error */}
        {loading && <p className="text-blue-600 font-medium text-center">Loading...</p>}
        {error && <p className="text-red-600 font-medium text-center">Error: {error.message}</p>}

        {/* Order Details Card */}
        {data?.order && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-inner">
            <h3 className="font-bold text-lg text-gray-800 mb-3">
              Order ID: <span className="text-blue-600">{data.order.id}</span>
            </h3>
            <p className="mb-2"><strong>Status:</strong> {data.order.status || 'Pending'}</p>
            <p className="mb-2"><strong>Total Amount:</strong> ₹{data.order.total}</p>
            <p className="mb-4"><strong>Order Date:</strong> {new Date(data.order.createdAt).toLocaleDateString()}</p>

            <h4 className="mt-5 mb-2 font-semibold text-gray-800">Items:</h4>
            <ul className="space-y-2">
              {data.order.products?.map((product: any, idx: number) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200"
                >
                  <span className="text-gray-800">{product.name} - {product.brand}</span>
                  <span className="text-gray-600">₹{product.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
