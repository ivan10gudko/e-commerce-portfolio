import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { nanoid } from "nanoid";
import ThumbImage from "./ThumbImage";
import Button from "./Button";
import {
  NavigateBeforeRounded,
  NavigateNextRounded,
} from "@mui/icons-material";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ThumbPagination({ setThumbsSwiper, parentSwiper }) {
  const { images } = useContext(ProductContext);
  return (
    <div className="flex items-center w-full">
      <Button action={() => parentSwiper.current.slidePrev()} type="text-only">
        <NavigateBeforeRounded fontSize="large" />
      </Button>
      <Swiper
        spaceBetween={10}
        slidesPerView={'auto'}
        modules={[FreeMode, Navigation, Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        style={{ display: "flex" }}
      >
        {images.map((value) => (
          <SwiperSlide key={nanoid()} className="w-fit basis-auto">
            <ThumbImage image={value} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button action={() => parentSwiper.current.slideNext()} type="text-only">
        <NavigateNextRounded fontSize="large" />
      </Button>
    </div>
  );
}

export default ThumbPagination;
