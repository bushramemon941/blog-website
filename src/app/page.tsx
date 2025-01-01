import React from "react";
import Hero from "@/components/hero";
import AuthorCard from '@/components/AuthorCard';
import Feature from '@/components/Feature';
import Contact from "@/components/Contact";

export default function Home() {
  return (
  <div className="b">
<Hero/>
<AuthorCard/>
<Feature/>
<Contact/>

  </div>
  );
}
