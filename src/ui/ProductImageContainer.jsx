import { Swiper, SwiperSlide } from "swiper/react";
import "../index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { nanoid } from "nanoid";
import ProductImage from "./ProductImage";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ThumbPagination from "./ThumbPagination";
import { useContext, useRef, useState } from "react";
import ModalImage from "./ModalImage";
import { ProductContext } from "../context/productContext";
function ProductImageContainer() {
  const {images} = useContext(ProductContext);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef();
  const [modalOpen,setModalOpen] =useState(false);
  const [currentImage,setCurrentImage] = useState(null);

  function openModal(img){
    setCurrentImage(img);
    setModalOpen(true);
  }
  return (
    <>
    <div className="w-full px-6 md:px-10 lg:px-20">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        autoHeight={true}
        style={{
          margin: "5% 0",
        }}
      >
        {images.map((value,) => (
          <SwiperSlide key={nanoid()}>
            <ProductImage image={value} action={()=> openModal(value)}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full md:w-4/6 mx-auto">
        <ThumbPagination
          setThumbsSwiper={setThumbsSwiper}
          parentSwiper={swiperRef}
        />
      </div>
    </div>
    {modalOpen ? <ModalImage image={currentImage} setIsOpen={setModalOpen}/> : null}
    </>
  );
}

export default ProductImageContainer;
