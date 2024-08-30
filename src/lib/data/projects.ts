import type { Projects } from '$lib/types/data/Projects';
import FirstMediProject from '$lib/assets/project-firstmedia.png';
import NutriclubProject from '$lib/assets/project-nutriclub.png';
import SangforProject from '$lib/assets/project-sangfor.png';
import SyariahBankIndonesia from '$lib/assets/project-bsi.png';
import DikampusProject from '$lib/assets/project-dikampus.png';
import SulelbarProject from '$lib/assets/project-sulselbar.png';
export const projects: Projects[] = [
	{
		id: 'first-media',
		slug: 'first-media-project',
		src: "/assets/projects/project-firstmedia.png",
		title: 'First Media',
		url: 'https://www.firstmedia.com/'
	},
	{
		id: 'nutriclub',
		slug: 'nutriclub-club-project',
		src: '/assets/projects/project-nutriclub.png',
		title: 'Nutriclub Revamp 2020',
		url: 'https://www.nutriclub.co.id/'
	},
	{
		id: 'sangfor',
		slug: 'sangfor-project',
		src: '/assets/projects/project-sangfor.png',
		title: 'Sangfor Revamp',
		url: 'https://www.sangfor.com/'
	},
	{
		id: 'bank-syariah-indonesia',
		slug: 'bank-syariah-indonesia-project',
		src: '/assets/projects/project-bsi.png',
		title: 'Enterprise Risk BSI',
		url: '-'
	},
	{
		id: 'dikampus',
		slug: 'dikampus-project',
		src: '/assets/projects/project-dikampus.png',
		title: 'Dikampus',
		url: 'https://dikampus-cbb63.firebaseapp.com/'
	},
	{
		id: 'sulselbar',
		slug: 'sulselbar-project',
		src: '/assets/projects/project-sulselbar.png',
		title: 'General E Monitoring Sulselbar',
		url: '-'
	}
];
