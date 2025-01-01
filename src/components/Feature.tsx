import React from 'react'



export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-netural-50 mb-40">
        <h2
         className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out 
         trnsform hover:translate-y[-5px] hover:text-black  text-gray-700"
         >
              Perfumes Blog:Distinctive, elegant, seductive and delicate at the same time. These best-selling women's perfumes have become timeless classics that never go out of style. Get to know them better.
        </h2>
        <p className="text-center  font-medium m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up
         delay-100">
        
        </p>
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-gray-700 animate-color-change">Interesting Information About Different Perfume's </h1>
          
          <div  className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[ 
              "Dolce & Gabbana",
              
              "Chanel",
              " Armani",
              "DIOR ",
              "Gucci ",
              "Lancôme  ",
              
              
            ].map((different, index) => (
              <div key={index} 
               className="relative group py-6 bg-amber-600 rounded-lg shadow-lg hover:bg-amber-800 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-white">
                <p className="text-center text-lg font-semibold">{different}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg duration-300 ease-in-out "></div>
               </div>
            ))}
          </div>
        </div>
        
        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
        Welcome to my  Perfume Blog , a fragrant journey into the captivating world of perfumes! Here, we celebrate the art of scent-making and explore how perfumes can evoke emotions, capture memories, and express individuality.

Our story began with a simple yet profound love for fragrances—a desire to understand the magic behind each bottle and the stories they tell. Perfumes are more than just a luxury; they are a timeless form of self-expression, an invisible accessory that can leave a lasting impression.

At my Perfume Blog, we are passionate about sharing:

Expert Insights: Discover the craftsmanship and creativity that go into making every drop of perfume.
Honest Reviews: From high-end luxury brands to niche creations, we bring you unbiased and thoughtful reviews to guide your choices.
Guides and Tips: Learn how to pick the perfect fragrance for any occasion, season, or mood.
Behind-the-Scenes Stories: Explore the origins of iconic scents, the master perfumers who create them, and the history that inspires their creation.
Whether you are a fragrance aficionado or someone just starting to explore this aromatic world, our mission is to help you find scents that resonate with your personality and style.

Join us as we uncover the secrets behind the world's most cherished perfumes, celebrate the diversity of aromas, and help you embrace the power of scent. At [Your Blog Name], we believe every fragrance has a story to tell—let us help you find the one that speaks to you.

Let's make the world a little more beautiful, one scent at a time.


 
        </p>
      </section>
    </div>
  )
}