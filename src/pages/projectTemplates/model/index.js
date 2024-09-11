import { VIVIENDA_RSM } from './vivienda_rsm';
import { VIVIENDA_FPM } from './vivienda_fpm';
import { VIVIENDA_VAM } from './vivienda_vam';
import { VIVIENDA_PBM } from './vivienda_pbm';
import { VIVIENDA_EBM } from './vivienda_ebm';
import { VIVIENDA_CRR } from './vivienda_crr';
import { VIVIENDA_ANR } from './vivienda_anr';
import { VIVIENDA_BGM } from './vivienda_bgm';
import { OFICINAS_IDAI } from './oficinas_idai';
import { OFICINAS_GA3 } from './oficinas_ga3';
import { OFICINAS_ALSACARGO } from './oficinas_alsacargo';
import { IGLESIA_REHABILITACION } from './iglesia_rehabilitacion';
import { RESTAURANTE_DONMENDO } from './restaurante_donMendo';
import { CENTRO_OCIO_TORRESPARK } from './centro_ocio_torrepark';
import { STADLER_TRAINING_CENTER } from './stadler_training_center';
import { CONCURSO_CAMPUS_TARONGERS } from './concurso_campus_tarongers';
import { OFICINAS_NULES } from './oficinas_nules';
import { VIVIENDA_PERELLONET } from './vivienda_perellonet';
import { XABEC } from './xabec';

export const PROJECTS_INFO = {
	rsm_house: {
		title: 'rsm_house',
		location: 'Náquera (Valencia)',
		year: '2011',
		type: 'residential',
		built: '192 m2',
		collaborator: 'Puchanetti Arquitectos',
		images: VIVIENDA_RSM,
	},
	idai_nature: {
		title: 'idai_nature',
		location: 'La Pobla de Vallbona (Valencia)',
		year: '2016',
		type: 'competition',
		built: '1.066 m2',
		collaborator: 'ALXN Arquitectes + Gabriel Sanjuan',
		images: OFICINAS_IDAI,
	},
	church_tower: {
		title: 'church_tower',
		location: 'La Torre (Valencia)',
		year: '2014-2018',
		type: 'religious',
		built: '285 m2',
		collaborator: '',
		images: IGLESIA_REHABILITACION,
	},
	bgm_house: {
		title: 'bgm_house',
		location: 'Mestalla (Valencia)',
		year: '2013',
		type: 'residential',
		built: '78 m2',
		collaborator: '',
		images: VIVIENDA_BGM,
	},
	fpm_house: {
		title: 'fpm_house',
		location: 'La Torre (Valencia)',
		year: '2015',
		type: 'residential',
		built: '140 m2',
		collaborator: '',
		images: VIVIENDA_FPM,
	},
	anr_house: {
		title: 'anr_house',
		location: 'Alfahuir (Valencia)',
		year: '2017',
		type: 'residential',
		built: '82 m2',
		collaborator: '',
		images: VIVIENDA_ANR,
	},
	grupo_A3_arquitectos: {
		title: 'grupo_A3_arquitectos',
		location: 'Camí Reial (Valencia)',
		year: '2018',
		type: 'residential',
		built: '90 m2',
		collaborator: '',
		images: OFICINAS_GA3,
	},
	torre_park: {
		title: 'torre_park',
		location: 'Las Palmas de Gran Canaria (Las Palmas)',
		year: '2017',
		type: 'leisure',
		built: '1.000 m2',
		collaborator: '',
		images: CENTRO_OCIO_TORRESPARK,
	},
	crr_house: {
		title: 'crr_house',
		location: 'Mestalla (Valencia)',
		year: '2016',
		type: 'residential',
		built: '160 m2',
		collaborator: '',
		images: VIVIENDA_CRR,
	},
	alsacargo: {
		title: 'alsacargo',
		location: 'Campanar (Valencia)',
		year: '2020',
		type: 'offices',
		built: '360 m2',
		collaborator: 'ALXN Arquitectes',
		images: OFICINAS_ALSACARGO,
	},
	pbm_house: {
		title: 'pbm_house',
		location: 'Patraix (Valencia)',
		year: '2017',
		type: 'residential',
		built: '90 m2',
		collaborator: '',
		images: VIVIENDA_PBM,
	},
	vam_house: {
		title: 'vam_house',
		location: 'Torrent (Valencia)',
		year: '2015',
		type: 'residential',
		built: '110 m2',
		collaborator: '',
		images: VIVIENDA_VAM,
	},
	don_mendo: {
		title: 'don_mendo',
		location: 'Alfafar (Valencia)',
		year: 'in_progress',
		type: 'restoration',
		built: '600 m2',
		collaborator: '',
		images: RESTAURANTE_DONMENDO,
	},
	stadler_training_center: {
		title: 'stadler_training_center',
		location: 'Albuixech (Valencia)',
		year: '2023',
		type: 'Industrial',
		built: '-',
		collaborator: '',
		images: STADLER_TRAINING_CENTER,
	},
	campus_taronjers_contest: {
		title: 'campus_taronjers_contest',
		location: 'UV Valencia',
		year: 'in_progress',
		type: 'competition',
		built: '-',
		collaborator: '',
		images: CONCURSO_CAMPUS_TARONGERS,
	},
	nules_offices: {
		title: 'nules_offices',
		location: 'Nules (Castellón)',
		year: '2023',
		type: 'offices',
		built: '-',
		collaborator: '',
		images: OFICINAS_NULES,
	},
	perellonet_house: {
		title: 'perellonet_house',
		location: 'Perellonet (Valencia)',
		year: '2022',
		type: 'residential',
		built: '-',
		collaborator: '',
		images: VIVIENDA_PERELLONET,
	},
	ebm_house: {
		title: 'ebm_house',
		location: 'Jardines del Real (Valencia)',
		year: '2023',
		type: 'residential',
		built: '180 m2',
		collaborator: '',
		images: VIVIENDA_EBM,
	},
	xabec: {
		title: 'xabec',
		location: 'Orriols (Valencia)',
		year: '2023',
		type: 'educational',
		built: '4.000 m2',
		collaborator: '',
		images: XABEC,
	},
};
