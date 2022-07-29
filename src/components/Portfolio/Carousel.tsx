import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import '../../style/ProjectCard.css'
import '../../style/Carousel.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReactPlayer from "react-player";

const Carousel = (props: any) => {
    console.log(props);
    return(
        <div className="swiperArea">
            <Swiper
                pagination={{type: "progressbar",}}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                loop={true}
            >
                {props.media.map((item: any) => (
                    <SwiperSlide id={item.source + '_slide'}>
                        {item.type === "photo" ?
                            <img src={item.source} alt="img"/> :
                            <div />}
                        {item.type === "video" ?
                            <div className='player-wrapper'>
                                <ReactPlayer url={item.source}
                                             width='100%'
                                             height='100%'
                                             controls={true} />
                            </div>:
                            <div />}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel;
