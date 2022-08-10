import ReactPlayer from 'react-player';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import {Modal} from 'react-bootstrap';
import '../style/Portfolio.css';
import '../style/GalleryModal.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GalleryModal = (props: {
    setGalleryActiveProject: any,
    project: { title: string, media: any[]; };
}) => {
  const handleClose = () => {
    // eslint-disable-next-line react/prop-types
    props.setGalleryActiveProject(null);
  };

  return (
    <Modal
      show={props.project.title !== ''}
      onHide={handleClose}
      fullscreen
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.project.title} gallery</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="swiperArea">
          <Swiper
            pagination={{type: 'fraction'}}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            loop={true}
          >
            {props.project.media.map((item: any) => (
              <SwiperSlide
                id={item.source + '_slide'}
                key={item.source}
              >
                <div>
                  {
                      item.type === 'photo' ?
                          <img src={item.source} alt="img"/> :
                          <ReactPlayer
                            url={item.source} width='100%'
                            height='100%'
                            controls={true}
                          />
                  }
                </div>
                <div className="gallery-description">
                  <p>{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default GalleryModal;
