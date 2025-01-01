import React from 'react';
import BlogCard from '../components/BlogCard';



export default  function Mega () {
   const post = [
    {
      id : '1',
      title : "Information About Lancôme La Vie Est Belle Perfume",
      description: " Distinctive, elegant, seductive and delicate at the same time. These 10 best-selling women’s perfumes have become timeless classics that never go out of style. Get to know them better.", 
      date:"2012",
      imageUrl :"/imgs/lancome-la-vie-est-belle_20200813_40.jpg",
     

    },
    {
      id : '2',
      title : "Information About Flora by Gucci  Perfume",
      description: "Flora by Gucci Eau de Parfum by Gucci is a Floral fragrance for women. Flora by Gucci Eau de Parfum was launched in 2010. Top notes are Peony, Citruses and Mandarin Orange; middle notes are Osmanthus and Rose; base notes are Sandalwood and Patchouli.",
      date:"2010",
      imageUrl :"/imgs/guccipic.jpg",

    },
    {
      id : '3',
      title : "Information About Dolce & Gabbana Perfume",
      description: "From iconic classics to modern interpretations, Dolce & Gabbana continues to push the boundaries of perfumery, offering an extensive range of dolce and gabbana perfume women to cater to diverse tastes and preferences.", 
      date:"2006",
      imageUrl :"/imgs/dolce&gabba.webp",

    },
    {
      id : '4',
      title : "Information About Coco Mademoiselle perfume ",
      description: "Coco Mademoiselle by Chanel is a Oriental Floral fragrance for women.The nose behind this fragrance is Jacques Polge.",
      date:"2001",
      imageUrl :"/imgs/cocochannel.webp",

    },

    {
      id : '5',
      title : "Information About Armani Sì Perfume ",
      description: "The perfect definition of the essence of Italian taste is hidden inside the Armani Sì Eau de Parfum for women.  ",
      date:"2013",
      imageUrl :"/imgs/armani-si-eau-de-parfum_20200813_08.jpg",

    },

    {
      id : '6',
      title : "Information About DIOR J'adore prfume",
      description: "J’adore is an extraordinary fragrance, because it succeeds in being effortlessly seductive while boasting an original signature.", 
      date:"1999",
      imageUrl :"/imgs/DIOR-Jadore_20221114_02.png",

    },
   
   
    
   ];
  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-amber-700 animate-color-change'>
        { "" }
        Information About Different Perfume's
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {post.map((post, index) => (
            <div className="fade-in" key={post.id}>
            <div className="blog-card">
               <BlogCard post={post} isDarkBackground={index%2 === 0} />
            </div>
            </div>
          ))}
        </div>
    </div>
  );
  
}