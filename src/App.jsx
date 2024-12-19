import ProductPage from "./components/ProductPage";
import { Toaster } from "react-hot-toast";

export default function App() {
  const productData = {
    id: 1,
    title: "Classy Modern Smart Watch",
    old_price: 99.0,
    price: 79.0,
    images: {
      "#816BFF": "https://i.ibb.co/jLK30cJ/image1.png",
      "#1FCEC9": "https://i.ibb.co/5xF5PtT/image2.png",
      "#4B97D3": "https://i.ibb.co/VLWwZsT/image3.png",
      "#3B4747": "https://i.ibb.co/NssKzcG/image4.png",
    },
    description:
      "I must explain to you how all this mistaken idea of denouncing praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
    type: "watch",
    model_number: "Forerunner 290XT",
    band_color: ["#816BFF", "#1FCEC9", "#4B97D3", "#3B4747"],
    size: ["S", "M", "L", "XL"],
  };
  return (
    <div className="font-myFont">
      <ProductPage product={productData} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  )
}
