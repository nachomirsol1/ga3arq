/** Components */
import { Email, GeoLocation, Phone } from 'src/components/icons';
/** Constants */
import { SOCIAL_MEDIA } from 'src/constants/socialmedia';
/** Styles */
import './styles/contact.scss';
/** Hooks */
import { useTranslations } from 'src/context/languageProvider';

export const Contact = () => {
	const {
		translate: { contact },
	} = useTranslations();

	const mapStyles = {
		width: '100%',
		height: '100%',
		filter: 'grayscale(100%)',
		backgroundColor: '#eee',
	};

	return (
		<div className='contact'>
			<div className='contact__title'>{contact.title}</div>
			<div className='contact__section'>
				<div className='contact__section-info'>
					<h3>{contact.subtitle}</h3>
					<p>{contact.description}</p>
					<div className='contactData'>
						<div className='contactData__infoData'>
							<div className='contactData__infoData-item'>
								<Email />
								<span>
									<a href='mailto:info@grupoa3arquitectos.es?subject=Asunto&body=Mensaje'>
										{contact.email.value}
									</a>
								</span>
							</div>
							<div className='contactData__infoData-item'>
								<Phone />
								<span>
									<a href='tel: 96 023 69 50'>{contact.phone.value}</a>
								</span>
							</div>
							<div className='contactData__infoData-item'>
								<GeoLocation />
								<span>{contact.address}</span>
							</div>
							<div className='contactData__infoData-item'>
								<div className='social'>
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
								<span>{contact.mediaData}</span>
							</div>
						</div>
					</div>
				</div>
				<div className='contact__section-form'>
					<div style={mapStyles}>
						<iframe
							title='Localización GrupoA3Arquitectos'
							frameBorder='0'
							scrolling='no'
							marginHeight='0'
							marginWidth='0'
							src='https://maps.google.com/maps?width=720&amp;height=500&amp;hl=es&amp;q=calle%20jose%20soto%20mico,%2037+(GrupoA3Arquitectos)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
						>
							{/* <a href='https://www.gps.ie/car-satnav-gps/'>Car GPS</a> */}
						</iframe>
					</div>
				</div>
			</div>
		</div>
	);
};
