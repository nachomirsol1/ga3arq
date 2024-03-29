/** Components */
import { Main } from 'src/pages/main';
import { Projects } from 'src/pages/projects';
import { About } from 'src/pages/about';
import { Contact } from 'src/pages/contact';
import { ProjectTemplate } from 'src/pages/projectTemplates';
/** Constants */
import { PROJECTS, ABOUT, CONTACT, PROJECT } from '../paths';

export const MAIN_ROUTES = [
	{
		id: 1,
		path: '/',
		exact: true,
		component: Main,
		label: '',
		isNavbar: false,
	},
	{
		id: 2,
		path: `/${PROJECTS}`,
		exact: true,
		component: Projects,
		label: 'projects',
		isNavbar: true,
	},
	{
		id: 3,
		path: `/${ABOUT}`,
		exact: true,
		component: About,
		label: 'about',
		isNavbar: true,
	},
	{
		id: 4,
		path: `/${CONTACT}`,
		exact: true,
		component: Contact,
		label: 'contact',
		isNavbar: true,
	},
	{
		id: 5,
		path: `/${PROJECT}`,
		exact: true,
		component: ProjectTemplate,
		label: 'project',
		isNavbar: false,
	},
];
