/** Constants */
import { SOCIAL_MEDIA } from 'src/constants/socialmedia';
/** Styles */
import './styles/footer.scss';

export const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__media'>
				{SOCIAL_MEDIA.map(({ id, link, icon }) => {
					const Icon = icon;
					return (
						<span key={id}>
							<a href={link} target='_blank' rel='noreferrer'>
								<Icon />
							</a>
						</span>
					);
				})}
			</div>
			<div className='footer__copyright'>
				{' '}
				© GrupoA3Arquitectos {new Date().getFullYear()}
			</div>
		</div>
	);
};
