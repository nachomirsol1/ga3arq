import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import './styles/imageCarousel.scss';

const ImageCarousel = ({ images, initialSlide, onClose }) => {
	const settings = {
		initialSlide,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <div className='slick-next'>Next</div>,
		prevArrow: <div className='slick-prev'>Prev</div>,
	};

	return (
		<div className='imageCarousel'>
			<button className='closeButton' onClick={onClose}>
				<span className='closeIcon'>×</span>
			</button>
			<Slider {...settings}>
				{images.map((image, index) => (
					<div key={index}>
						<img src={image.imgUrl} alt={image.label} />
					</div>
				))}
			</Slider>
		</div>
	);
};

ImageCarousel.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			imgUrl: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	).isRequired,
	initialSlide: PropTypes.number.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default ImageCarousel;
