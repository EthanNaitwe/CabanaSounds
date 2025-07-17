import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: '"Soul of Uganda" Album',
    description: "Digital Download + Physical CD",
    price: "$15.99",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    category: "album",
  },
  {
    id: 2,
    name: "Cabana Logo T-Shirt",
    description: "100% Cotton, Multiple Sizes",
    price: "$25.99",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    category: "clothing",
  },
  {
    id: 3,
    name: "Limited Edition Vinyl",
    description: "180g Vinyl, Gatefold Sleeve",
    price: "$35.99",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    category: "vinyl",
  },
  {
    id: 4,
    name: "Premium Hoodie",
    description: "Organic Cotton Blend",
    price: "$45.99",
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    category: "clothing",
  },
];

export default function StoreSection() {
  return (
    <section id="store" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-deep-black mb-6">
            Official Store
          </h2>
          <p className="font-inter text-xl text-charcoal max-w-2xl mx-auto">
            Support Cabana with exclusive music and merchandise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-light-grey mb-6 overflow-hidden relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-deep-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-gold-accent text-deep-black px-6 py-3 font-montserrat font-semibold flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    ADD TO CART
                  </button>
                </div>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-deep-black mb-2">
                {product.name}
              </h3>
              <p className="font-inter text-charcoal mb-2">{product.description}</p>
              <p className="font-montserrat font-bold text-lg text-gold-accent">
                {product.price}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="bg-deep-black hover:bg-opacity-90 text-white font-montserrat font-semibold px-8 py-4 transition-all duration-300">
            VIEW FULL STORE
          </button>
        </motion.div>
      </div>
    </section>
  );
}
