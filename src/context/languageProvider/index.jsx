import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';

const LANGUAGES = ['es', 'en'];

const fetchTranslations = (language = 'en') =>
	import(`../../constants/translations/${language}.json`).then(
		(module) => module.default
	);

const LanguageContext = React.createContext({
	language: 'es',
	translate: {},
	updateLanguage: () => {},
});

const LanguageProvider = ({ children }) => {
	const [{ language, translate }, setLanguage] = useState({
		language: 'es',
		translate: {},
	});
	const initialTextsLoaded = useRef(false);

	const updateLanguage = useCallback(
		async (newLang) => {
			if (initialTextsLoaded.current && newLang === language) return;

			const newTranslate = await fetchTranslations(newLang);
			initialTextsLoaded.current = true;
			setLanguage({ language: newLang, translate: newTranslate });
		},
		[language]
	);

	useEffect(() => {
		updateLanguage(language);
	}, [language, updateLanguage]);

	const context = {
		language,
		translate,
		updateLanguage: updateLanguage,
		languages: LANGUAGES,
	};

	return (
		<LanguageContext.Provider value={context}>
			{Object.keys(translate).length && children}
		</LanguageContext.Provider>
	);
};

export const useTranslations = () => {
	const languageContext = useContext(LanguageContext);
	if (languageContext == null) {
		throw new Error('useTranslations() called outside of a App?');
	}
	return languageContext;
};

export default LanguageProvider;
