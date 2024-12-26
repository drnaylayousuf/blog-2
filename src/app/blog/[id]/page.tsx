"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Params {
  params: {
    id: string;
  };
}

interface Blog {
  title: string;
  description: string;
  image: string;
  additionalContent: string; // Unique content for each blog
}

const blogs: Record<number, Blog> = {
  1: {
    title: "7 Most Breathtaking Places to Visit in the World",
    description:
      "The world is a truly remarkable place filled with breathtaking landscapes, vibrant communities, historical landmarks, and rich cultural traditions.",
    image: "/blog1.jpg",
    additionalContent: `
      <h2 class="text-2xl sm:text-3xl font-bold text-center text-[#003366] mb-5 sm:mb-7">
        Explore the World's Most Breathtaking Places
      </h2>
      <p class="text-sm sm:text-base md:text-lg text-[#221f1f] text-center mb-4 sm:mb-6 px-4 sm:px-10 md:px-20">
        From the peaks of the Himalayas to the shores of the Pacific these places offer unforgettable experiences. Whether you are an adventurer seeking adrenaline or a traveler wanting to witness the wonders of the Earth these destinations are worth adding to your bucket list. The locations featured in this blog are known for their striking beauty and cultural significance.
      </p>
      <p class="text-sm sm:text-base md:text-lg text-[#221f1f] text-center mb-4 sm:mb-6 px-4 sm:px-10 md:px-20">
        Explore more about the places that have captured the hearts of travelers worldwide.
      </p>
  
      <h3 class="mt-8 sm:mt-10 text-2xl sm:text-3xl font-extrabold text-center text-[#003366] mb-4">
        Top Places To Visit
      </h3>
  
      <div class="space-y-8 sm:space-y-10">
        <div>
          <h4 class="mt-8 text-xl sm:text-2xl md:text-3xl font-bold text-[#003366] mb-4">1. Switzerland</h4>
          <p class="text-sm sm:text-base md:text-lg text-[#221f1f] mb-4">
            Switzerland is known for its majestic mountains crystal-clear lakes, and charming villages. It offers a blend of outdoor adventure and cultural experiences. Dont miss places like Lucerne Interlaken and the Matterhorn.
          </p>
          <div class="mt-4 space-y-3">
            <h5 class="text-base sm:text-lg md:text-xl font-semibold text-[#003366]">Attractions</h5>
            <p class="text-xs sm:text-sm md:text-base text-[#221f1f]">
              Some must-see attractions in Switzerland include: Interlaken Lucerne Matterhorn Bern Lake Geneva Jungfraujoch and St. Moritz.
            </p>
            <h5 class="text-base sm:text-lg md:text-xl font-semibold text-[#003366]">Best Time to Visit</h5>
            <p class="text-xs sm:text-sm md:text-base text-[#221f1f]">Mid December - Mid October</p>
            <h5 class="text-base sm:text-lg md:text-xl font-semibold text-[#003366]">Currency</h5>
            <p class="text-xs sm:text-sm md:text-base text-[#221f1f]">Swiss Franc (CHF)</p>
            <h5 class="text-base sm:text-lg md:text-xl font-semibold text-[#003366]">Language</h5>
            <p class="text-xs sm:text-sm md:text-base text-[#221f1f]">German, French, Italian, Romansh</p>
          </div>
          <Image
            src="/p1.jpg"
            alt="Switzerland"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg mt-6"
          />
        </div>
  
        <h4 class="mt-14 text-3xl font-bold text-[#003366] mb-14">2. Paris</h4>
        <p class="text-base text-[#221f1f]">
          The City of Lights offers iconic landmarks like the Eiffel Tower and the Louvre Museum along with a vibrant cultural scene. Experience world-class dining picturesque streets and romantic settings.
        </p>
        <div class="mt-6 space-y-4">
          <h5 class="text-xl font-semibold text-[#003366]">Attractions</h5>
          <p class="text-base text-[#221f1f]">Some must-see attractions in Paris include: Eiffel Tower Louvre Museum, Notre-Dame Cathedral, Montmartre, and Champs-Élysées.</p>
          <h5 class="text-xl font-semibold text-[#003366]">Best Time to Visit</h5>
          <p class="text-base text-[#221f1f]">April - June, September - October</p>
          <h5 class="text-xl font-semibold text-[#003366]">Currency</h5>
          <p class="text-base text-[#221f1f]">Euro (EUR)</p>
          <h5 class="text-xl font-semibold text-[#003366]">Language</h5>
          <p class="text-base text-[#221f1f]">French</p>
        </div>
        <Image src="/p2.jpg" alt="Paris" width={800} height={400} className="w-full h-auto rounded-lg" />
  
        <h4 class="mt-14 text-3xl font-bold text-[#003366] mb-14">3. Dubai</h4>
        <p class="text-base text-[#221f1f]">
          Dubai is blend of modern architecture and luxury, including the Burj Khalifa and Palm Jumeirah, makes it a must-visit. From desert safaris to indoor skiing, Dubai offers experiences like no other.
        </p>
        <div class="mt-6 space-y-4">
          <h5 class="text-xl font-semibold text-[#003366]">Attractions</h5>
          <p class="text-base text-[#221f1f]">Some must-see attractions in Dubai include: Burj Khalifa, Palm Jumeirah, Dubai Mall, Dubai Marina, and Dubai Fountain.</p>
          <h5 class="text-xl font-semibold text-[#003366]">Best Time to Visit</h5>
          <p class="text-base text-[#221f1f]">November - March</p>
          <h5 class="text-xl font-semibold text-[#003366]">Currency</h5>
          <p class="text-base text-[#221f1f]">United Arab Emirates Dirham (AED)</p>
          <h5 class="text-xl font-semibold text-[#003366]">Language</h5>
          <p class="text-base text-[#221f1f]">Arabic, English</p>
        </div>
        <Image src="/p3.jpg" alt="Dubai" width={800} height={400} className="w-full h-auto rounded-lg" />
  
        <h4 class="mt-14 text-3xl font-bold text-[#003366] mb-14">4. Tokyo</h4>
        <p class="text-base text-[#221f1f]">
          Tokyo seamlessly integrates ancient traditions with futuristic technology. Explore Meiji Shrine, Shibuya Crossing, and vibrant districts like Ginza.
        </p>
        <div class="mt-6 space-y-4">
          <h5 class="text-xl font-semibold text-[#003366]">Attractions</h5>
          <p class="text-base text-[#221f1f]">Some must-see attractions in Tokyo include: Meiji Shrine, Shibuya Crossing, Tokyo Tower, Senso-ji Temple, and Akihabara.</p>
          <h5 class="text-xl font-semibold text-[#003366]">Best Time to Visit</h5>
          <p class="text-base text-[#221f1f]">March - May, September - November</p>
          <h5 class="text-xl font-semibold text-[#003366]">Currency</h5>
          <p class="text-base text-[#221f1f]">Japanese Yen (JPY)</p>
          <h5 class="text-xl font-semibold text-[#003366]">Language</h5>
          <p class="text-base text-[#221f1f]">Japanese</p>
        </div>
        <Image src="/p4.jpg" alt="Tokyo" width={800} height={400} className="w-full h-auto rounded-lg" />
  
        <h4 class="mt-14 text-3xl font-bold text-[#003366] mb-14">5. South Island, New Zealand</h4>
        <p class="text-base text-[#221f1f]">
          Known for its fjords, lakes, and mountains, the South Island is a nature lovers paradise. Highlights include Queenstown and Milford Sound.
        </p>
        <div class="mt-6 space-y-4">
          <h5 class="text-xl font-semibold text-[#003366]">Attractions</h5>
          <p class="text-base text-[#221f1f]">Some must-see attractions in South Island include: Queenstown, Milford Sound, Fiordland National Park, and Mount Cook.</p>
          <h5 class="text-xl font-semibold text-[#003366]">Best Time to Visit</h5>
          <p class="text-base text-[#221f1f]">December - February</p>
          <h5 class="text-xl font-semibold text-[#003366]">Currency</h5>
          <p class="text-base text-[#221f1f]">New Zealand Dollar (NZD)</p>
          <h5 class="text-xl font-semibold text-[#003366]">Language</h5>
          <p class="text-base text-[#221f1f]">English, Māori</p>
        </div>
        <Image src="/p5.jpg" alt="South Island, New Zealand" width={800} height={400} className="w-full h-auto rounded-lg" />
  
        <h4 class="mt-14 text-3xl font-bold text-[#003366] mb-14">6. Seoul, South Korea</h4>
        <p class="text-base text-[#221f1f]">
          Seoul offers a mix of modern architecture, ancient palaces, and a vibrant nightlife. Visit Gyeongbokgung Palace, Bukchon Hanok Village, and Myeongdong.
        </p>
        <div class="mt-6 space-y-4">
          <h5 class="text-xl font-semibold text-[#003366]">Attractions</h5>
          <p class="text-base text-[#221f1f]">Some must-see attractions in Seoul include: Gyeongbokgung Palace, Bukchon Hanok Village, N Seoul Tower, and Myeongdong.</p>
          <h5 class="text-xl font-semibold text-[#003366]">Best Time to Visit</h5>
          <p class="text-base text-[#221f1f]">March – May, September – November</p>
          <h5 class="text-xl font-semibold text-[#003366]">Currency</h5>
          <p class="text-base text-[#221f1f]">South Korean Won (KRW)</p>
          <h5 class="text-xl font-semibold text-[#003366]">Language</h5>
          <p class="text-base text-[#221f1f]">Korean</p>
        </div>
        <Image src="/p6.jpg" alt="Seoul" width={1200} height={600} className="w-full h-auto rounded-lg" />
  
        <h4 class="mt-14 text-3xl font-bold text-[#003366] mb-14">7. New York</h4>
        <p class="text-base text-[#221f1f]">
          The Big Apple offers world-class museums, iconic landmarks, and diverse neighborhoods. Visit Central Park, the Statue of Liberty, and the Empire State Building.
        </p>
        <div class="mt-6 space-y-4">
          <h5 class="text-xl font-semibold text-[#003366]">Attractions</h5>
          <p class="text-base text-[#221f1f]">Some must-see attractions in New York include: Central Park, Statue of Liberty, Empire State Building, Times Square, and The Metropolitan Museum of Art.</p>
          <h5 class="text-xl font-semibold text-[#003366]">Best Time to Visit</h5>
          <p class="text-base text-[#221f1f]">April - June, September - November</p>
          <h5 class="text-xl font-semibold text-[#003366]">Currency</h5>
          <p class="text-base text-[#221f1f]">United States Dollar (USD)</p>
          <h5 class="text-xl font-semibold text-[#003366]">Language</h5>
          <p class="text-base text-[#221f1f]">English</p>
        </div>
        <Image src="/p7.jpeg" alt="New York" width={800} height={400} className="w-full h-auto rounded-lg" />
      </div>
    `,
  },
  
  
      // Other blog entries remain unchanged
      2: {
        title: "New York-Style Oreo Cheesecake",
        description: "The New York Style Oreo Cheesecake is an absolute treat. It's creamy, thick, and embodies everything you expect from a perfect cheesecake.",
        image: "/cakeimage1.jpg",
        additionalContent: `
          <p class="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1b1818] mb-8"> 
            The New York-Style Oreo Cheesecake is an absolute treat! It is creamy, thick, and embodies everything you&apos;d expect from a perfect cheesecake. The addition of cookies and cream takes the flavor to the next level, with each indulgent bite being more satisfying than the last. While this Oreo cheesecake looks sophisticated, it&apos;s surprisingly simple to prepare!
          </p>
      
          <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#dd656f] mb-12">
            Why This New York Oreo Cheesecake is a Must-Try
          </h2>
      
          <Image
            src="/cakeimage2-1.webp"
            alt="New York Oreo Cheesecake"
            width={800}
            height={680}
            className="w-full h-auto mb-8 rounded-lg"
          />
      
          <p class="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1b1818] mb-10 mt-10">
            <strong className="text-fuchsia-500">New York-Style Flavor:</strong> Oreo is featured in every layer crust, filling, and topping—ensuring a bold, cookies-and-cream taste in every bite!
          </p>
      
          <Image
            src="/cakeimage2.webp"
            alt="Make Ahead Oreo Cheesecake"
            width={800}
            height={600}
            className="w-full h-auto mb-8 rounded-lg"
          />
      
          <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FF6363] mb-12 mt-12">
            Key Ingredients
          </h2>
          <p class="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1b1818] mb-8">
            Here&apos;s what you&apos;ll need to make this irresistible Oreo cheesecake:
          </p>
          <ul class="list-disc pl-4 sm:pl-6 md:pl-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1b1818] mb-8">
            <li>Oreos</li>
            <li>Butter</li>
            <li>Cream Cheese</li>
            <li>Sour Cream</li>
            <li>Granulated Sugar</li>
            <li>Vanilla Extract</li>
            <li>Eggs</li>
            <li>Whipped Cream</li>
          </ul>
      
          <Image
            src="/cakeingredient.jpg"
            alt="Key Ingredients"
            width={800}
            height={600}
            className="w-full h-auto mb-8 rounded-lg"
          />
      
          <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FF6363] mb-12 mt-12">
            How to Make an Oreo Cheesecake
          </h2>
          <p class="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1b1818] mb-8">
            This delicious Oreo cheesecake is simple to prepare, taking only about 15 minutes of active time. However, it requires a few hours of baking and chilling, so make sure to plan ahead if you want it ready for a special occasion!
          </p>
      
          <h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF6363] mb-10 mt-10">
            Preparing the Pan
          </h3>
          <p class="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1b1818] mb-8">
            Preheat your oven and prepare a 9-inch springform pan by placing a round piece of parchment paper at the bottom. Grease the sides with butter or shortening, then wrap the outside of the pan with two layers of heavy-duty foil.
          </p>
      
          <Image
            src="/cakepanpreparing.jpg"
            alt="Preparing the Pan"
            width={800}
            height={600}
            className="w-full h-auto mb-8 rounded-lg"
          />
      
          <h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF6363] mb-6 mt-12">
            Making the Oreo Crust
          </h3>
          <p class="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1b1818] mb-8">
            <strong>Crush the Oreos:</strong> Place the Oreos in a food processor and pulse until finely ground. With the processor on low speed, gradually add melted shortening until the mixture is evenly combined. Press the Oreo mixture into the bottom of the prepared pan, slightly covering the sides. Bake the crust in the oven for about 10 minutes.
          </p>
      
          <Image
            src="/cakecrust.jpg"
            alt="Oreo Crust"
            width={800}
            height={600}
            className="w-full h-auto mb-8 rounded-lg"
          />
      
          <h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF6363] mb-6 mt-10">
            Preparing the Filling
          </h3>
          <p class="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1b1818] mb-8">
            <strong>Make the Filling:</strong> In a large mixing bowl use an electric hand mixer to blend the cream cheese and sugar on medium speed until smooth and creamy. Add in sour cream, flour, and vanilla, and mix until smooth. Add the egg yolks one at a time, then gently fold in the crushed Oreos.
          </p>
      
          <Image
            src="/cakeimageprepration.webp"
            alt="Preparing the Filling"
            width={800}
            height={600}
            className="w-full h-auto mb-8 rounded-lg"
          />
      
          <h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF6363] mb-6 mt-10">
            Assembling the Cheesecake
          </h3>
          <p class="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1b1818] mb-8">
            <strong>Layering:</strong> Pour one-third of the Oreo filling into the baked crust and spread it evenly. Arrange whole Oreos in a single layer on top of the filling. Then pour the remaining filling over the Oreos and smooth the top.
          </p>
      
          <Image
            src="/cakeassemble.jpg"
            alt="Assembling the Cheesecake"
            width={800}
            height={600}
            className="w-full h-auto mb-8 rounded-lg"
          />
      
          <h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF6363] mb-6 mt-10">
            Chilling the Cheesecake
          </h3>
          <p class="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1b1818] mb-8">
            <strong>Cool & Chill:</strong> After removing the cheesecake from the oven let it cool to room temperature. Wrap it in plastic wrap and refrigerate for at least 4 hours or overnight to firm up before serving.
          </p>
      
          <Image
            src="/cakechilling.jpg"
            alt="Chilling the Cheesecake"
            width={800}
            height={600}
            className="w-full h-auto mb-8 rounded-lg"
          />
      
          <h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF6363] mb-6 mt-10">
            Decorating the Cheesecake
          </h3>
          <p class="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1b1818] mb-8">
            <strong>Add Toppings:</strong> Before serving, top the cheesecake with whipped cream and sprinkle crushed Oreos, or add mini Oreos for extra flair.
          </p>
      
          <Image
            src="/cakedecoration.jpg"
            alt="Decorating the Cheesecake"
            width={800}
            height={600}
            className="w-full h-auto mb-8 rounded-lg"
          />
      
          <h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF6363] mb-6 mt-10">
            Helpful Tips
          </h3>
          <ul class="list-disc pl-4 sm:pl-6 md:pl-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1b1818] mb-8">
            <li>If you are using butter instead of shortening, use 6 tablespoons of butter. Shortening is preferred as it maintains the pure Oreo flavor in the crust.</li>
          </ul>
      
          <Image
            src="/finalimage.jpg"
            alt="Storing Tips"
            width={800}
            height={600}
            className="w-full h-auto mb-8 rounded-lg"
          />
      
          <h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF6363] mb-6 mt-10">
            Storing Tips
          </h3>
          <ul class="list-disc pl-4 sm:pl-6 md:pl-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1b1818] mb-8">
            <li>Keep the cheesecake covered with plastic wrap in the fridge for up to 5 days.</li>
          </ul>`
    },
    
  
  
  
    3: {
      title: "The Conjuring: A Terrifying Journey into the Unknown",
      description: "The Conjuring is a 2013 American supernatural horror film directed by James Wan, with a screenplay by Chad Hayes and Carey W. Hayes. It serves as the first installment in The Conjuring Universe franchise. The film was followed by two sequels, The Conjuring 2 and The Conjuring 3, which are also highly regarded for their impact on the horror genre during their respective releases.",
      image: "/m1.jpeg",
      additionalContent: `
        <p class="text-lg sm:text-xl text-gray-900 mb-8">
          Released in 2013 and directed by James Wan, <strong>The Conjuring</strong> is a horror masterpiece that has captivated audiences worldwide.
          Based on the true story of the Perron family and the investigations of renowned paranormal experts Ed and Lorraine Warren, the movie
          takes you on a spine-chilling journey filled with suspense, terror, and the supernatural.
        </p>
        <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">Plot Summary</h2>
    
        <Image
          src="/m2.jpg" // Replace with your second image path
          alt="The Conjuring Haunted House"
          width={800}
          height={450}
          className="rounded-md mb-8 w-full sm:w-3/4 lg:w-2/3 mx-auto"
        />
        
        <p class="text-lg sm:text-xl text-gray-900 mb-10 mt-12">
          The Conjuring follows the Perron family as they move into a secluded farmhouse in Rhode Island, only to discover that the house is haunted by
          a dark presence. The movie intricately depicts the family's growing fears and their struggle to understand the sinister forces at work.
          The chilling atmosphere is masterfully built with subtle scares, creepy visuals, and a haunting musical score.
        </p>
    
        <Image
          src="/m3.webp" // Replace with your third image path
          alt="The Perron Family in The Conjuring"
          width={800}
          height={450}
          className="rounded-md mb-8 w-full sm:w-3/4 lg:w-2/3 mx-auto"
        />
        
        <p class="text-lg sm:text-xl text-gray-900 mb-10 mt-12">
          With eerie occurrences escalating, the Perron family reaches out to paranormal investigators Ed and Lorraine Warren. The Warrens, who have
          seen countless cases of supernatural activity, face one of their most challenging and dangerous investigations. The story gradually unveils
          the terrifying history of the house, making it clear that the dark presence is deeply rooted in the land's tragic past.
        </p>
        <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Reviews and Impact</h2>
    
        <Image
          src="/m4.webp" // Replace with your fourth image path
          alt="Lorraine Warren in The Conjuring"
          width={800}
          height={450}
          className="rounded-md mb-8 w-full sm:w-3/4 lg:w-2/3 mx-auto"
        />
    
        <p class="text-lg sm:text-xl text-gray-900 mb-10 mt-12">
          Critics and audiences alike have praised The Conjuring for its atmospheric direction, strong performances, and genuine scares. Vera Farmiga
          and Patrick Wilson deliver compelling portrayals of the Warrens, bringing authenticity and emotional depth to their characters. The movie
          strikes a perfect balance between psychological horror and supernatural elements, making it a favorite among horror enthusiasts.
        </p>
        <p class="text-lg sm:text-xl text-gray-900 mb-8">
          Since its release, The Conjuring has become a cornerstone of modern horror cinema. Its success led to the creation of an entire franchise,
          including spin-offs like <strong>Annabelle</strong> and <strong>The Nun</strong>. The movies ability to draw on real-life events while
          delivering a captivating cinematic experience is a testament to James Wan's exceptional direction and storytelling skills.
        </p>
        
        <p class="text-lg sm:text-xl text-gray-900 mb-8">
          The Conjuring is not just a movie. it is an experience that lingers in your mind long after the credits roll. Its meticulous attention to detail,
          combined with a gripping narrative and unforgettable scares, solidifies its status as a modern classic in the horror genre.
        </p>
      `,
    },
    

};

export default function BlogPage({ params }: Params) {
  const { id } = params;
  const blogId = Number(id);
  const blog = blogs[blogId];

  const [comments, setComments] = useState<
    { name: string; comment: string }[]
  >([]);
  const [newName, setNewName] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    if (!blog) {
      console.error(`Blog with ID ${id} not found`);
    }
  }, [id, blog]);

  const handleCommentSubmit = () => {
    if (newName.trim() && newComment.trim()) {
      setComments((prevComments) => [
        { name: newName, comment: newComment },
        ...prevComments,
      ]);
      setNewName("");
      setNewComment("");
    }
  };

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-6">
    <div className="border-4 border-blue-200 rounded-lg p-6 max-w-4xl w-full shadow-lg">
      <Image
        src={blog.image}
        alt={blog.title}
        width={800}
        height={400}
        className="w-full h-auto rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-10 text-blue-600 text-center">
        {blog.title}
      </h1>
      <p className="mt-8 text-lg text-gray-900">{blog.description}</p>
      <div
        className="mt-4 text-gray-900 text-base"
        dangerouslySetInnerHTML={{ __html: blog.additionalContent }}
      />
  
      {/* User Comments */}
      <h3 className="text-xl sm:text-2xl font-semibold text-[#FF6363] mb-4 mt-12">
        User Comments
      </h3>
      <div className="mb-6">
        <h4 className="text-lg sm:text-xl font-semibold text-[#FF6363] mb-2">
          Name
        </h4>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="w-full p-3 border-2 border-[#FFB8B8] rounded-lg mb-2"
          placeholder="Your name"
        />
        <h4 className="text-lg sm:text-xl font-semibold text-[#FF6363] mb-2">
          Message
        </h4>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full h-20 p-3 border-2 border-[#FFB8B8] rounded-lg"
          placeholder="Add your comment here..."
        />
        <button
          onClick={handleCommentSubmit}
          className="bg-[#FF6363] text-white px-5 py-2 mt-2 rounded-lg hover:bg-[#FF3B3B]"
        >
          Submit Comment
        </button>
      </div>
  
      {/* Display Comments */}
      <ul className="list-disc pl-6 text-base sm:text-lg text-[#4A4A4A]">
        {comments.map((comment, index) => (
          <li key={index} className="mb-4">
            <div>
              <strong>{comment.name}:</strong>
            </div>
            <div>{comment.comment}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  
  );
}
