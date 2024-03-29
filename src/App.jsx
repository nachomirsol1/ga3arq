import { AppRoutes } from './routes';
import LanguageProvider from './context/languageProvider';

function App() {
	return (
		<div
			className='App'
			style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
		>
			<LanguageProvider>
				<AppRoutes />
			</LanguageProvider>
		</div>
	);
}

export default App;
