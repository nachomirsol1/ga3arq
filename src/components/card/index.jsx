import { useState } from 'react';
/** Libraries */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/** Styles */
import './styles/card.scss';
/**Hooks**/
import { useTranslations } from '../../context/languageProvider';

export const Card = ({ info }) => {
	const [overlay, setOverlay] = useState(false);
	const {
		translate: { projects },
	} = useTranslations();

	const link = info?.linkTo ?? '';

	return (
		<div
			className='card'
			onMouseEnter={() => setOverlay(true)}
			onMouseLeave={() => setOverlay(false)}
		>
			<Link to={link}>
				{overlay ? (
					<>
						<div className='overlay'>
							<span>{projects.names[info?.label]}</span>
						</div>
						<img src={info?.imgUrl} alt={projects.names[info?.label]} />
					</>
				) : (
					<img src={info?.imgUrl} alt={projects.names[info?.label]} />
				)}
			</Link>
		</div>
	);
};

Card.propTypes = {
	info: PropTypes.shape({
		linkTo: PropTypes.string,
		imgUrl: PropTypes.string,
		label: PropTypes.string,
	}),
};
