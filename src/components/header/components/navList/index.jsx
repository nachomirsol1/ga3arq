import { useState } from 'react';
/** Libraries */
import { Link } from 'react-router-dom';
/** Components */
import { Menu, Close } from 'src/components/icons';
import { Languages } from '../languages';
/** Hooks */
import { useTranslations } from 'src/context/languageProvider';
import { useWindowSize } from 'src/hooks/useWindowSize';
/** Constants */
import { MAIN_ROUTES } from 'src/constants/routes';
/** Styles */
import './styles/navList.scss';

export const NavList = ({ path }) => {
	const {
		translate: { header },
	} = useTranslations();

	const windowSize = useWindowSize();

	const isResponsive = windowSize.width <= 600;

	const [isResponsiveOpen, setIsResponsiveOpen] = useState(false);

	const styleNavListItems =
		isResponsive && !isResponsiveOpen ? { display: 'none' } : {};
	const styleNavListMain =
		isResponsive && isResponsiveOpen ? { backgroundColor: 'white' } : {};

	const styleNavItemLink =
		isResponsive && isResponsiveOpen
			? {}
			: path === '/'
			? { color: '#eee' }
			: {};

	return (
		<div
			style={styleNavListMain}
			className={`navlist ${
				isResponsive && isResponsiveOpen ? 'responsive' : ''
			}`}
		>
			{isResponsive && (
				<div
					className='navlist__icon'
					onClick={() => setIsResponsiveOpen(!isResponsiveOpen)}
				>
					{isResponsiveOpen ? <Close /> : <Menu />}
				</div>
			)}

			<ul
				style={styleNavListItems}
				className={`navlist__items ${isResponsive ? 'responsive' : ''}`}
			>
				{MAIN_ROUTES.filter((route) => route.isNavbar).map((route) => {
					return (
						<li
							className={`navlist__items-item ${
								path.includes(route.path) ? 'active' : ''
							}`}
							key={route.id}
							onClick={() => setIsResponsiveOpen(false)}
						>
							<Link to={route.path} style={styleNavItemLink}>
								{header[route.label]}
							</Link>
						</li>
					);
				})}
				<li
					className='navlist__items-item'
					key={`languages`}
					style={styleNavItemLink}
				>
					<Languages />
				</li>
			</ul>
		</div>
	);
};
