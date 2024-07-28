import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { NextArrow, PrevArrow } from '../arrows'; // Import the custom arrow components
import './styles/imageCarousel.scss';

const ImageCarousel = ({ images, initialSlide, onClose }) => {
	const settings = {
		initialSlide,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<div className='imageCarousel'>
			<button className='closeButton' onClick={onClose}>
				<span className='closeIcon'>×</span>
			</button>
			<div className='polaroidWrapper'>
				<Slider {...settings}>
					{images.map((image, index) => (
						<div key={index} className='imageContainer'>
							<img
								src={image.imgUrl}
								alt={image.label}
								className='carouselImage'
							/>
						</div>
					))}
				</Slider>
			</div>
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
