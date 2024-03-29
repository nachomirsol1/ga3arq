import { useEffect, useState } from 'react';

/** Components */
import { Card } from 'src/components/card';
import { ProjectInfo } from 'src/components/projectInfo';
/** Hooks */
import { useParams } from 'react-router-dom';
import { useTranslations } from 'src/context/languageProvider';
/** Model */
import { PROJECTS_INFO } from '../model';
/** Styles */
import './styles/default.scss';

export const ProjectTemplate = () => {
	const {
		translate: { projects: translations },
	} = useTranslations();
	const { id } = useParams();
	const [project, setProject] = useState({});
	console.log(id);

	useEffect(() => {
		if (id) {
			setProject(PROJECTS_INFO[id]);
		}
	}, [id]);

	return (
		<div className='projectTemplate'>
			<ProjectInfo translations={translations} project={project} />
			{project?.images?.map((project, index) => {
				return <Card key={index.toString()} info={project} />;
			})}
		</div>
	);
};
