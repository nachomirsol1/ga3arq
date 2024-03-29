import React from 'react';
/** Libraries */
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
/** Styles */
import './styles/projectInfo.scss';

export const ProjectInfo = ({ translations, project }) => {
	const navigate = useNavigate();
	return (
		<div className='projectInfo'>
			<div className='projectInfo__section'>
				<p>{translations.names[project.title]}</p>
				{/* <p>
          <strong>{translations.architects}:</strong> Grupo A3 Arquitectos
        </p> */}
				<p>
					<strong>{translations.location}: </strong> {project.location}
				</p>
				<p>
					<strong> {translations.year}:</strong>{' '}
					{translations[project.year] || project.year}
				</p>
				<p>
					<strong>{translations.type}: </strong>
					{translations.types[project.type]}
				</p>
				<p>
					<strong>{translations.built}:</strong>
					{project.built}
				</p>
				<p hidden={!project.collaborator}>
					<strong>{translations.collaborators}: </strong>
					{project.collaborator}
				</p>
			</div>
			<div
				className='projectInfo__back'
				onClick={() => {
					navigate('/projects');
				}}
			>
				<span>Volver</span>
			</div>
		</div>
	);
};

ProjectInfo.propTypes = {
	translations: PropTypes.object,
	project: PropTypes.object,
};
