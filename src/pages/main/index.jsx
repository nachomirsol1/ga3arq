/** Hooks */
import { useChangeImage } from './hooks/useChangeImage';
/** Models */
import { PROJECTS } from './model';
/** Assets */
import next from 'src/assets/img/next.png';
import prev from 'src/assets/img/previus.png';
import logo from 'src/assets/img/logo_ga3_sections.png';
/** Styles */
import './styles/main.scss';

export const Main = () => {
	const { nextImage, prevImage, imgIndex } = useChangeImage(PROJECTS);
	return (
		<div className='main-page'>
			<div className='main-page__overlay'></div>
			<img
				src={prev}
				alt={'prev'}
				className='main-page__banner-prevArrow'
				onClick={prevImage}
			/>
			<img
				src={PROJECTS[imgIndex].imgUrl}
				alt={PROJECTS[imgIndex].label}
				className={`main-page__banner-image slider-${imgIndex}`}
			/>
			<div className='main-page__banner-logo'>
				<img src={logo} alt={'Logo GrupoA3Arquitectos'} className='logo' />
			</div>
			<img
				src={next}
				alt={'next'}
				className='main-page__banner-nextArrow'
				onClick={nextImage}
			/>
		</div>
	);
};
