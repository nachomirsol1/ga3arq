/** Styles */
import './styles/card.scss';

export const AboutCard = (person) => {
	return (
		<div className='aboutCard'>
			<div className={'aboutCard__personOverlay'}>
				{person.image ? (
					<img src={person.image} alt={person.name} />
				) : (
					<div className={'img-not-found'} />
				)}
				<div className='aboutCard__personOverlay-description'>
					<p>{person.description}</p>
				</div>
			</div>
			<div className={'aboutCard__title'}>
				<span>{person.name}</span>
				<span>{person.role}</span>
			</div>
		</div>
	);
};
