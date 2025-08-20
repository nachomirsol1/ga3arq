/** Libraries */
import { Helmet } from 'react-helmet-async';
/** Components */
import { Card } from 'src/components/card';
/** Model */
import { PROJECTS } from './model';
/** Styles */
import './styles/projects.scss';

export const Projects = () => {
	return (
		<>
			<Helmet>
				<title>Proyectos de arquitectura | Grupo A3 Arquitectos</title>
				<meta
					name='description'
					content='Arquitectura, Proyectos residenciales, comerciales e institucionales en Valencia.'
				/>
				<link
					rel='canonical'
					href='https://www.grupoa3arquitectos.es/projects'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Proyectos | Grupo A3 Arquitectos' />
				<meta
					property='og:url'
					content='https://www.grupoa3arquitectos.es/projects'
				/>
			</Helmet>
			<div className='projects'>
				{PROJECTS.map((project, index) => {
					return <Card key={index.toString()} info={project} />;
				})}
			</div>
		</>
	);
};
