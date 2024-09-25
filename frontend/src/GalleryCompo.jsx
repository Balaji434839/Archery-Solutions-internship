// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

function GalleryComponent() {
  const images = [
    { src: 'image.jpg', description: 'A beautiful sunset over the mountains.' },
    { src: 'image-1.jpg', description: 'A serene lake surrounded by trees.' },
    { src: 'image-2.jpg', description: 'A bustling cityscape at night.' },
    { src: 'image-3.jpg', description: 'A close-up of a vibrant flower.' },
    { src: 'image-4.jpg', description: 'A peaceful beach with golden sand.' },
    { src: 'image-5.jpg', description: 'A majestic waterfall cascading down.' },
    { src: 'image-6.jpg', description: 'A picturesque snowy landscape.' },
    { src: 'image-7.jpg', description: 'A tranquil forest path.' },
    { src: 'image-8.jpg', description: 'An aerial view of a beautiful island.' },
    { src: 'image-9.jpg', description: 'A stunning sunrise over the ocean.' },
    { src: 'image-10.jpg', description: 'A vibrant city street during the day.' },
    { src: 'image-11.jpg', description: 'A charming countryside with rolling hills.' },
  ];

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };


  const popoverAnimation = {
    opacity: [0, 1],
    y: [20, 0],
    transition: { duration: 0.3, ease: "easeOut" },
  };

  return (
    <div className="p-4">
      <div className="relative flex mx-auto items-center justify-center mb-6">
        {/* Button group for categories */}
        {['All categories', 'Shoes', 'Bags', 'Electronics', 'Gaming'].map((category, index) => (
          <button
            key={index}
            type="button"
            className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${
              category === 'All categories' ? 'text-blue-700 border-blue-600 hover:text-white hover:bg-blue-700 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-800' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg group"
            whileHover={hoverEffect}
          >
            <img
              className="h-auto max-w-full object-cover"
              src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/${image.src}`}
              alt={`Gallery image ${index + 1}`}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-5 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute bottom-0 inset-x-0 bg-black bg-opacity-75 text-white p-4 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >     <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-7 text-white p-4 opacity-0 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={popoverAnimation}
            ></motion.div>
                {image.description}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default GalleryComponent;
