/** Libraries */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/** Components */
import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';
/** Constants */
import { MAIN_ROUTES } from 'src/constants/routes';

export const AppRoutes = () => {
	return (
		<Router>
			<Header />
			<Routes>
				{MAIN_ROUTES.map((item, index) => {
					const Component = item.component;
					return (
						<Route
							key={index.toString()}
							path={item.path}
							exact={item.exact}
							element={<Component />}
						/>
					);
				})}
			</Routes>
			<Footer />
		</Router>
	);
};
