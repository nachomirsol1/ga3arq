/** Libraries */
import { Helmet } from 'react-helmet-async';
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
	const current = PROJECTS[imgIndex];
	return (
		<>
			<Helmet>
				<title>Arquitectos en Valencia | Grupo A3 Arquitectos</title>
				<meta
					name='description'
					content='Estudio de arquitectura en Valencia y España. Vivienda, retail y obra pública.'
				/>
				<link rel='canonical' href='https://www.grupoa3arquitectos.es/' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Grupo A3 Arquitectos' />
				<meta
					property='og:description'
					content='Conoce nuestro estudio y proyectos en Valencia.'
				/>
				<meta property='og:url' content='https://www.grupoa3arquitectos.es/' />
				<meta property='og:image' content={current?.imgUrl} />
				<script type='application/ld+json'>
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ArchitecturalFirm',
						name: 'Grupo A3 Arquitectos',
						url: 'https://www.grupoa3arquitectos.es',
						image: current?.imgUrl,
						address: {
							'@type': 'PostalAddress',
							streetAddress: 'C. José Soto Micó, 37',
							addressLocality: 'Valencia',
							addressCountry: 'ES',
						},
						telephone: '+34 960 236 950',
					})}
				</script>
			</Helmet>
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
		</>
	);
};
