import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import ClientAndServices from "@/components/sections/ClientAndServices";
import SpendingPage from "@/components/sections/SpendingPage";
import CustomersPage from "@/components/sections/CustomersPage";
import Blogs from "@/components/sections/Blogs";
import Subscribe from "@/components/sections/Subscribe";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main className="bg-white text-black">
      <div className=" bg-white text-black font-sans w-screen h-screen px-30 py-10">
        <Navbar />
        <Hero />
      </div>
      <ClientAndServices/>
      <SpendingPage/>
      <CustomersPage/>
      <Blogs/>
      <Subscribe/>
      <Footer/>
    </main>
  );
}
