import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-0">
      <Image
        src="/bg2.jpg" // Replace with your image path
        alt="Description of the image"
        width={500} // Adjust width as needed
        height={300} // Adjust height as needed
        className="w-full min-h-96 rounded-lg" // Responsive and styled
      />
      <h1 id='blogb' className="hover:text-black text-3xl md:text-4xl font-bold mt-4 font-sans text-blue-600">
        My Blogs
      </h1>

    {/* Card Container */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 w-full max-w-screen-lg">

{/* Card 1 */}
<Link href="/blog/1" className="hover:bg-black relative bg-white border-4 border-blue-500 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden h-[400px]">
  <Image
    src="/blog1.jpg"
    alt="Blog Image"
    width={500}
    height={250}
    className="w-full h-[250px] object-cover rounded-t-lg"
  />
  <div className="p-4 sm:p-6 flex flex-col h-full">
    <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 transition-colors duration-300 hover:text-white">
      7 Most Breathtaking Places to Visit in the World
    </h2>
    <p className="mt-2 text-sm sm:text-base text-gray-600 flex-grow transition-colors duration-300 hover:text-white">
      The world is a truly remarkable place filled with breathtaking landscapes vibrant communities historical landmarks and rich cultural traditions.
    </p>
  </div>
</Link>

{/* Card 2 */}
<Link href="/blog/2" className="hover:bg-black relative bg-white border-4 border-blue-500 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden h-[400px]">
  <Image
    src="/cakeimage1.jpg"
    alt="Blog Image"
    width={500}
    height={250}
    className="w-full h-[250px] object-cover rounded-t-lg"
  />
  <div className="p-4 sm:p-6 flex flex-col h-full">
    <h2 className="text-xl sm:text-2xl  text-blue-600 transition-colors duration-300 hover:text-white">
      New York-Style Oreo Cheesecake
    </h2>
    <p className="mt-2 text-sm sm:text-base text-gray-600 flex-grow transition-colors duration-300 hover:text-white">
      The New York Style Oreo Cheesecake is an absolute treat. It is creamy thick and embodies everything you expect from a perfect cheesecake.
    </p>
  </div>
</Link>

{/* Card 3 */}
<Link href="/blog/3" className="hover:bg-black relative bg-white border-4 border-blue-500 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden h-[400px]">
  <Image
    src="/m1.jpeg"
    alt="Blog Image"
    width={500}
    height={250}
    className="w-full h-[250px] object-cover rounded-t-lg"
  />
  <div className="p-4 sm:p-6 flex flex-col h-full">
    <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 transition-colors duration-300 hover:text-white">
      The Conjuring
    </h2>
    <p className="mt-2 text-sm sm:text-base text-gray-600 flex-grow transition-colors duration-300 hover:text-white">
      The Conjuring: A Terrifying Journey into the Unknown.
    </p>
  </div>
</Link>

</div>

    </div>
    
  );
}