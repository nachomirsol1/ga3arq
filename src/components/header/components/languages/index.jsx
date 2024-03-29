/** Hooks */
import { useTranslations } from 'src/context/languageProvider';
/** styles */
import './styles/languages.scss';

export const Languages = () => {
	const { language, updateLanguage, languages } = useTranslations();

	return (
		<div className={'languages'}>
			{languages.map((lang, index) => {
				return (
					<span
						key={index}
						className={language === lang ? 'activeLang' : ''}
						onClick={() => updateLanguage(lang)}
					>
						{lang.toUpperCase()}
					</span>
				);
			})}
		</div>
	);
};
