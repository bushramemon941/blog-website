import React from 'react'
import Image from 'next/image'
export default function AuthorCard () {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>

        {/* IMage */}

  <Image
  className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
  src='/imgs/mypic.jpg'    
  alt='Author image'
  width={900}
  height={500}
  />
  <div>
    <h3 className='text-xl font-bold'>Bushra Memon</h3>
    <p className='text-blue-500'>
      {""}
      Front-end Developer
            {""}
            </p>  
    </div> 
      </div>  
      
   <p className='mt-4 text-black leading-relaxed'>
   

Hi, I'm Bushra Memon, the creator and heart behind my Blog website. By profession, I'm a passionate front-end developer who loves crafting beautiful, functional, and user-friendly websites. But beyond coding and design, I've always been captivated by the world of fragrances.

Perfumes have a magical way of telling stories—stories of elegance, adventure, and individuality. They're more than just scents; they're an art form that can transport you to a memory, a place, or an emotion. My fascination with this art inspired me to combine my technical expertise with my love for fragrances, resulting in this blog.

Through my Blog website, I aim to bring you closer to the enchanting universe of perfumes, where every bottle has a tale and every scent leaves an impression. I've designed this platform to not only be informative but also visually engaging, reflecting the beauty and creativity that perfumes represent.

When I'm not coding or curating content for the blog, you'll often find me exploring new fragrances, diving into the history of classic perfumes, or experimenting with creating personalized scent profiles for friends and family.

This blog is my way of sharing my journey, experiences, and insights with a community of like-minded fragrance lovers. Let's explore the world of perfumes together—one story, one spritz at a time.


   </p>
<div className='mt-4 flex space-x-3'>
  <a
    href='a'
    className='px-4 py-2 text-white bg-black rounded:md hover:bg-blue-800 transition duration-300'
    >
     Instagram
  </a>
  <a
    href='a'
    className='px-4 py-2 text-white bg-black rounded:md hover:bg-blue-800 transition duration-300'
    >
     Linkedin
  </a>
  <a
    href='a'
    className='px-4 py-2 text-white bg-black rounded:md hover:bg-blue-800 transition duration-300'
    >
     GitHub
  </a>

  </div>

   </div>
  );
}


