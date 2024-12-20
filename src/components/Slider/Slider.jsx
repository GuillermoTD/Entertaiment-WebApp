import {SliderContainer} from "./SliderStyles"
import { Pagination,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ImageBox from "../ImageSlider/ImageSlider";

const Slider = ()=>{
    return(
        <SliderContainer>

        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            navigation={true}
            modules={[Pagination,Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <ImageBox/>
            </SwiperSlide>
            <SwiperSlide>
                <ImageBox/>
            </SwiperSlide>
            <SwiperSlide>
                <ImageBox/>
            </SwiperSlide>
            <SwiperSlide>
                <ImageBox/>
            </SwiperSlide>
            <SwiperSlide>
                <ImageBox/>
            </SwiperSlide>
        </Swiper>
        </SliderContainer>
    )
}



export default Slider