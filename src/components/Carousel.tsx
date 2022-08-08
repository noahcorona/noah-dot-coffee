import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper';
import '../style/Portfolio.css';
import '../style/Carousel.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ReactPlayer from 'react-player';

const Carousel = (props: any) => {
  console.log(props);
  return (
    <div className="swiperArea">
      <Swiper
        pagination={{type: 'fraction'}}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true}
      >
        {props.media.map((item: any) => (
          <SwiperSlide
            id={item.source + '_slide'}
            key={item.source}
          >
            {
              item.type === 'photo' ?
                <img src={item.source} alt="img"/> :
                  <ReactPlayer
                    url={item.source} width='100%'
                    height='100%'
                    controls={true}
                  />
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
