import { useEffect, useState } from 'react';
import { Card } from 'src/components/card';
import { ProjectInfo } from 'src/components/projectInfo';
import { useParams } from 'react-router-dom';
import { useTranslations } from 'src/context/languageProvider';
import { PROJECTS_INFO } from '../model';
import ImageCarousel from 'src/components/imageCarousel';
import './styles/default.scss';

export const ProjectTemplate = () => {
	const {
		translate: { projects: translations },
	} = useTranslations();
	const { id } = useParams();
	const [project, setProject] = useState({});
	const [carouselVisible, setCarouselVisible] = useState(false);
	const [carouselImages, setCarouselImages] = useState([]);
	const [initialSlide, setInitialSlide] = useState(0);

	useEffect(() => {
		if (id) {
			setProject(PROJECTS_INFO[id]);
		}
	}, [id]);

	const handleImageClick = (clickedImage) => {
		const index = project.images.findIndex(
			(image) => image.imgUrl === clickedImage.imgUrl
		);
		setCarouselImages(project.images);
		setInitialSlide(index);
		setCarouselVisible(true);
	};

	const handleCloseCarousel = () => {
		setCarouselVisible(false);
	};

	return (
		<div className='projectTemplate'>
			<ProjectInfo translations={translations} project={project} />
			{project?.images?.map((image, index) => (
				<Card
					key={index.toString()}
					info={image}
					onImageClick={handleImageClick}
				/>
			))}
			{carouselVisible && (
				<ImageCarousel
					images={carouselImages}
					initialSlide={initialSlide}
					onClose={handleCloseCarousel}
				/>
			)}
		</div>
	);
};
