import Email from "@/components/homePage/Email";
import Featured from "@/components/homePage/Featured";
import HeroBanner from "@/components/homePage/HeroBanner";
import OurStory from "@/components/homePage/OurStory";
import Products from "@/components/homePage/Products";
import SliderComments from "@/components/homePage/SliderComments";
import CustomSwiper from "@/components/homePage/Test";




export default function Home() {
  return (
   <main>
   <Featured/>
   <OurStory/>
  <Products/>
<SliderComments/>
<Email/>
   </main>
  );
}
