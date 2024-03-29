/** Libraries */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/** Assets */
import logoShort from 'src/assets/img/Icon_180x180.png';
/** Style */
import './styles/logo.scss';

export const Logo = ({ isMainPage = false }) => {
	const logoStyle = isMainPage
		? {
				height: '75px',
				backgroundColor: 'transparent',
				filter: 'brightness(0) invert(1)',
		  }
		: {};
	return (
		<div className='logo'>
			<Link to='/'>
				<img
					src={logoShort}
					alt={'Logo GrupoA3Arquitectos'}
					style={logoStyle}
				/>
			</Link>
		</div>
	);
};

Logo.propTypes = {
	isMainPage: PropTypes.bool.isRequired,
};
