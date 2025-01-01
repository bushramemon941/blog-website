import AuthorCard from '@/components/AuthorCard';
import CommentSection from '@/components/CommentSection';
import React from 'react';

const posts = [
  { id : "1",
    title : " Lancôme La Vie Est Belle Best Perfumes for Women",
    description: " Lancôme La Vie Est Belle Eau de Parfum is a symbol of freedom and happiness, a tribute to all of life's beauty. This exclusive perfume for women was designed to put a smile on your face instantly.",
    date:"2024-9-21",
    image :"/imgs/lancome-la-vie-est-belle_20200813_40.jpg",

   

  },
  {
    id : "2",
    title : "Flora by Gucci Eau de Parfum Gucci for women",
    description: "The new edition,Flora by Gucci EDP, can be expected on the market at the beginning of 2010. This version was announced as more intense, deeper, seductive and richer. Notes of Flora by Gucci Eau de Parfum promise the same youthful and optimistic expression of the composition as it was offered by EDT. The difference lies in stronger concentration of the EDP edition. Flora by Gucci was envisaged and created by Frida Giannini who was inspired by Gucci floral pattern used first as a scarf for Grace, Princess of Monaco. Floral motive has been enchanting women with glamorous and feminine details for decades. Flora by Gucci Eau de Parfum is characterized by fresh notes of agrums in the opening, combined with beautiful peony. A heart introduces balanced aromas of rose and osmanthus, while a base is created of patchouli and sandalwood. The more opulent, stronger and more powerful EDP has the same flacon as the original edition, but is decorated with gold details on a black bow ribbon, black cap and darker liquid. The fragrance arrives in January 2010.",
    date:"2010",
    image :"/imgs/guccipic.jpg",

  },
  {
    id : "3",
    title : "DOLCE & GABBANA The One for women Gold",
    description: "DOLCE & GABBANA The One for Women Gold is a luxurious, timeless fragrance that embodies elegance and sophistication. Its rich blend of fruity and floral notes, including juicy peach, lychee, and lily, creates a captivating scent that leaves a lasting impression. Ideal for evening events or special occasions, this perfume enhances your presence with a warm, sensual aura. Apply it for romantic dinners, upscale gatherings, or whenever you want to feel empowered and radiant. It's the perfect choice for women who desire a touch of gold in their lives.",
    date:"2006",
    image :"/imgs/dolce&gabba.webp",

  },
  {
    id : "4",
    title : "Coco Mademoiselle Chanel for women",
    description: "Coco Mademoiselle by Chanel is a Oriental Floral fragrance for women. Coco Mademoiselle was launched in 2001. The nose behind this fragrance is Jacques Polge. Top notes are Orange, Mandarin Orange, Bergamot and Orange Blossom; middle notes are Turkish Rose, Jasmine, Mimosa and Ylang-Ylang; base notes are Patchouli, White Musk, Vanilla, Vetiver, Tonka Bean and Opoponax. This perfume is the winner of award FiFi Award Best National Advertising Campaign / TV 2008 ",
    date:"2001-11-28",
    image :"/imgs/cocochannel.webp",
  },

  {
    id : "5",
    title : "Armani Sì Best Perfumes for Women",
    description: "The perfect definition of the essence of Italian taste is hidden inside the Armani Sì Eau de Parfum for women. The fragrance was created for all stylish and charismatic women. The combination of floral notes of blackcurrant and freesia will play on your heartstrings. Say “sì” to freedom, dreams, love and yourself.",
    date:"2024-11-28",
    image :"/imgs/armani-si-eau-de-parfum_20200813_08.jpg",

  },

  {
    id : "6",
    title : " DIOR J'adore  Best Perfumes for Women",
    description: " J’adore is an extraordinary fragrance, because it succeeds in being effortlessly seductive while boasting an original signature. Carnal, but not overbearing. This is a composition that unites contrasts, transforming iconic floral notes into an appealing, unprecedented, and mysterious ensemble. J'adore invents a flower that does not exist.",
    date:"2024-11-28",
    image :"/imgs/DIOR-Jadore_20221114_02.png",

  },
 
 ];
    
 

export default  async function Page ({ params } : {params: Promise < {id: string}>;
}) {
   const resolvedParams =await params;// resolve the promise
   const { id } = resolvedParams;
   const Post = posts.find((p) => p.id === id);

   if (!Post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10"> Post Not Found</h2>
    );
   }
const renderParagraphs = (description: string) => {
  return description.split("/n").map((para, index) => (
    <p key={index} className="mt-4 text-justify">
      {para.trim()}
    </p>
  ));
};

return (
  <div className="max-w-3xl mx-auto p-5">
    <h1 className=" md:text-4xl text-3xl font-bold text-gray-700 text-center"> 
      { " " }
      {Post.title}
      </h1>

  {Post.image && (
    <img
    src={Post.image} 
    alt={Post.title} 
    className="w-full h-auto rounded-md mt-4"
    />
  )}
  <div className="mt-6 text-lg text-slate-700">
    {renderParagraphs(Post.description)}

  </div>

     <CommentSection postId={Post.id} />
    <AuthorCard/>

    
  </div>
)};