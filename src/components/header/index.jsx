/** Libraries */
import { useLocation } from 'react-router-dom';
/** Components */
import { Logo } from 'src/components/logo';
import { NavList } from './components/navList';
/** styles */
import './styles/header.scss';

export const Header = () => {
	const currentLocation = useLocation();
	const headerStyle =
		currentLocation.pathname === '/'
			? { backgroundColor: 'transparent' }
			: {
					backgroundColor: '#fff',
			  };

	return (
		<div
			className='header'
			style={
				currentLocation.pathname === '/'
					? {}
					: { borderBottom: '0.5px dotted #ddd' }
			}
		>
			<div className='header__content' style={headerStyle}>
				<Logo isMainPage={currentLocation.pathname === '/'} />
				<NavList path={currentLocation.pathname} />
			</div>
		</div>
	);
};
