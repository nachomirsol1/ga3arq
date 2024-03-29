/** Components */
import { Card } from 'src/components/card';
/** Model */
import { PROJECTS } from './model';
/** Styles */
import './styles/projects.scss';

export const Projects = () => {
	return (
		<div className='projects'>
			{PROJECTS.map((project, index) => {
				return <Card key={index.toString()} info={project} />;
			})}
		</div>
	);
};
