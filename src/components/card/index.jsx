import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/card.scss';
import { useTranslations } from '../../context/languageProvider';

export const Card = ({ info, onImageClick, ...rest }) => {
	const [overlay, setOverlay] = useState(false);
	const {
		translate: { projects },
	} = useTranslations();
	const link = info?.linkTo ?? '';

	const handleClick = () => {
		if (!link) {
			onImageClick(info);
		}
	};

	return (
		<div
			className='card'
			onMouseEnter={() => setOverlay(true)}
			onMouseLeave={() => setOverlay(false)}
			onClick={handleClick}
			{...rest}
		>
			{link ? (
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
			) : overlay ? (
				<>
					<div className='overlay'>
						<span>{projects.names[info?.label]}</span>
					</div>
					<img src={info?.imgUrl} alt={projects.names[info?.label]} />
				</>
			) : (
				<img src={info?.imgUrl} alt={projects.names[info?.label]} />
			)}
		</div>
	);
};

Card.propTypes = {
	info: PropTypes.shape({
		linkTo: PropTypes.string,
		imgUrl: PropTypes.string,
		label: PropTypes.string,
	}),
	onImageClick: PropTypes.func.isRequired,
};
