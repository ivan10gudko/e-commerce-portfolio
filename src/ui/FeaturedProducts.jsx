import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "../index.css";
import "swiper/css";
import "swiper/css/pagination";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useCategoryProducts } from "../hooks/useCategoryProducts";
import Error from "./Error";
import { BounceLoader } from "react-spinners";
const FEATURED_ID = 8;
function FeaturedProducts() {
  const { isLoading, products, error } = useCategoryProducts([FEATURED_ID]);
  const [drag, setDrag] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDrag(true);
    }, 3000);
  }, []);

  
  if (isLoading) {
    return <BounceLoader />;
  }

  if (error || !products) {
    console.log(products)
    return <Error />;
  }

  return (
    <section className="px-14">
      <div className="w-full flex flex-col justify-center text-center mb-8">
        <h2 className="font-surveyor capitalize text-3xl sm:text-4xl mb-5">
          Featured Products
        </h2>
        <h5 className="capitalize font-urbanist text-black/60 px-8">
          See whats tranding right now
        </h5>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        slidesPerGroup={2}
        onSliderFirstMove={() => {
          setDrag(true);
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
          },
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        style={{
          "--swiper-pagination-bottom": "auto",
          "--swiper-pagination-top": "0px",
        }}
      >
        <div className="hidden sm:block swiper-pagination top-0 text-center w-full"></div>
        <div
          className={`absolute z-50 top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 h-24 w-24 rounded-full bg-black/85 flex items-center justify-center text-white pointer-events-none transition-opacity ${
            !drag ? "opacity-100" : "opacity-0"
          }`}
        >
          Drag
        </div>
        {products.map((product, i) => {
          console.log(product)
          return (
            <SwiperSlide key={i}>
              <Card
                id={product}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default FeaturedProducts;
//style={{top:0,left:"50%",transform:"translateX(-50%) scaleX(150%)"}}
