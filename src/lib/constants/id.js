import salesforce_logo from '../../assets/icons/Salesforce/Salesforce_idN3OdcTG__1.png';
import airtable_logo from '../../assets/icons/Airtable/Airtable_idbbncOsuL_1.png';
import amplitude_logo from '../../assets/icons/Amplitude/Amplitude_ida8NYsPJK_1.png';
import databricks_logo from '../../assets/icons/Databricks/Databricks_idF4fnHpaJ_1.png';
import figma_logo from '../../assets/icons/Figma/Figma_Symbol_1.png';
import hubspot_logo from '../../assets/icons/HubSpot/HubSpot_Symbol_3.png';
import intercom_logo from '../../assets/icons/Intercom/Intercom_idJtqMxXFx_1.png';
import linear_logo from '../../assets/icons/Linear/Linear_Symbol_4.png';
import looker_logo from '../../assets/icons/Looker/Looker_idKkHKXysy_1.png';
import mixpanel_logo from '../../assets/icons/Mixpanel/Mixpanel_Symbol_1.png';
import notion_logo from '../../assets/icons/Notion/Notion_Symbol_4.png';
import pipedrive_logo from '../../assets/icons/Pipedrive/Pipedrive_id-7ejZnwv_1.png';
import segment_logo from '../../assets/icons/Segment/Segment_Symbol_7.png';
import shopify_logo from '../../assets/icons/Shopify-com/Shopify-com_Symbol_4.png';
import slack_logo from '../../assets/icons/Slack/Slack_Symbol_2.png';
import snowflake_logo from '../../assets/icons/Snowflake/Snowflake_idCkdSg0B6_1.png';
import stripe_logo from '../../assets/icons/Stripe/Stripe_Icon_3.jpeg';
import tableau_logo from '../../assets/icons/Tableau/Tableau_idW4GZaB-5_1.png';
import twilio_logo from '../../assets/icons/Twilio/Twilio_idseuPD28S_1.png';
import zapier_logo from '../../assets/icons/Zapier/idgA2tQJF0_1782231759824.jpeg';

// Hero Section
const HERO_CONTENT = {
	meta: "Infrastruktur operasi B2B / 2026 / Sistem Presisi",
	title: ["Skala", "Tanpa", "Hambatan"],
	cta_text: "Northstar mengubah operasi pertumbuhan yang terfragmentasi menjadi satu sistem pendapatan yang presisi: alur kerja yang lebih ketat, data \nyang lebih bersih, pengambilan keputusan yang lebih cepat.",
	button_text: ["Simulasikan Skala", "Lihat Metode"]
}

// About Section
const ABOUT_CONTENT = {
	founder_description: "Mantan mitra operasi dan arsitek sistem untuk perusahaan scale-up B2B di seluruh Asia Tenggara (SEA) dan AS.",
	about_title: `Dibangun oleh para praktisi yang lebih memilih <span className="text-signal">sistem</span> daripada sensasi.`,
	about_description: ["Northstar didirikan untuk membantu perusahaan B2B ambisius melewati fase pertengahan yang kacau (the messy middle): tahap di mana dasbor \nberlipat ganda, ritme kepemimpinan terganggu, dan setiap tim menciptakan versi kebenarannya masing-masing.", "Kolaborator kami menggabungkan operasi pendapatan (revenue operations), teknik analitik, pengalaman operasi modal ventura, dan \ndesain sistem produk. Hasilnya adalah lapisan operasi praktis yang terlihat sederhana karena kerumitannya \ntelah ditangani di bawah permukaan."],
	collaborators_title: "Kolaborator",
	collaborators: ["Arsitek Data / Data", "Operator GTM / Eksekusi", "Mitra Ventura / Investasi", "Pemimpin RevOps / Pendapatan"],
	about_stats: [
		["42", "Sistem skala dikirimkan"],
		["$1.2B", "Pipeline dimodelkan"],
		["14", "Pasar didukung"]
	]
}

// Features Section
const FEATURES_CONTENT = {
	features_meta: "Fitur / kejelasan operasi / Struktur",
	features_title: `Sistem yang ketat untuk tim yang mulai tumbuh melampaui <span className="text-signal">improvisasi.</span>`,
	features: [
		{
			kicker: "01 / Data / Data",
			title: "Lapisan keputusan yang bersih",
			body: "Menormalisasi data produk, CRM, penagihan, dan kesuksesan pelanggan ke dalam satu model operasi dengan visibilitas tingkat eksekutif."
		},
		{
			kicker: "02 / Alur Kerja / Alur",
			title: "Desain pergerakan pendapatan",
			body: "Memetakan serah terima, aturan, dan otomatisasi yang menghilangkan hambatan antara penjualan, orientasi (onboarding), dan ekspansi."
		},
		{
			kicker: "03 / Kontrol / Kontrol",
			title: "Tata kelola skala",
			body: "Membangun ritual dan metrik ringan sehingga tim dapat bergerak lebih cepat tanpa membuat kepemimpinan tertimbun gangguan."
		}
	]
}

// Integrations Section
const INTEGRATIONS_CONTENT = {
	top_integrations: [
		{ name: 'Salesforce', color: 'bg-blue-500', letter: 'S', image: salesforce_logo },
		{ name: 'Stripe', color: 'bg-violet-500', letter: 'S', image: stripe_logo },
		{ name: 'HubSpot', color: 'bg-orange-500', letter: 'H', image: hubspot_logo },
		{ name: 'Slack', color: 'bg-emerald-500', letter: 'S', image: slack_logo },
		{ name: 'Pipedrive', color: 'bg-green-500', letter: 'P', image: pipedrive_logo },
		{ name: 'Segment', color: 'bg-sky-500', letter: 'S', image: segment_logo },
		{ name: 'Notion', color: 'bg-neutral-800', letter: 'N', image: notion_logo },
		{ name: 'Mixpanel', color: 'bg-purple-500', letter: 'M', image: mixpanel_logo },
		{ name: 'Linear', color: 'bg-indigo-500', letter: 'L', image: linear_logo },
		{ name: 'Shopify', color: 'bg-green-600', letter: 'S', image: shopify_logo },
		{ name: 'Zapier', color: 'bg-orange-400', letter: 'Z', image: zapier_logo },
		{ name: 'Figma', color: 'bg-pink-500', letter: 'F', image: figma_logo },
		{ name: 'Tableau', color: 'bg-blue-700', letter: 'T', image: tableau_logo },
	],
	bottom_integrations: [
		{ name: 'Intercom', color: 'bg-blue-600', letter: 'I', image: intercom_logo },
		{ name: 'HubSpot', color: 'bg-orange-500', letter: 'H', image: hubspot_logo },
		{ name: 'Pipedrive', color: 'bg-green-500', letter: 'P', image: pipedrive_logo },
		{ name: 'Airtable', color: 'bg-blue-400', letter: 'A', image: airtable_logo },
		{ name: 'Mixpanel', color: 'bg-purple-500', letter: 'M', image: mixpanel_logo },
		{ name: 'Tableau', color: 'bg-blue-700', letter: 'T', image: tableau_logo },
		{ name: 'Amplitude', color: 'bg-indigo-600', letter: 'A', image: amplitude_logo },
		{ name: 'Looker', color: 'bg-amber-500', letter: 'L', image: looker_logo },
		{ name: 'Zapier', color: 'bg-orange-400', letter: 'Z', image: zapier_logo },
		{ name: 'Tableau', color: 'bg-blue-700', letter: 'T', image: tableau_logo },
		{ name: 'Snowflake', color: 'bg-sky-400', letter: 'S', image: snowflake_logo },
		{ name: 'Databricks', color: 'bg-red-500', letter: 'D', image: databricks_logo },
		{ name: 'Twilio', color: 'bg-red-600', letter: 'T', image: twilio_logo },
	],
	featured_integrations: [
		{
			name: 'Salesforce',
			category: 'CRM',
			categoryKr: 'Manajemen Pelanggan',
			description: 'Sinkronisasikan kesepakatan, kontak, dan tahapan pipeline secara real-time.',
			color: 'bg-blue-500',
			letter: 'S',
		},
		{
			name: 'Stripe',
			category: 'Penagihan',
			categoryKr: 'Penagihan',
			description: 'Tarik MRR, churn, dan pendapatan ekspansi secara otomatis.',
			color: 'bg-violet-500',
			letter: 'S',
		},
		{
			name: 'HubSpot',
			category: 'Pemasaran',
			categoryKr: 'Pemasaran',
			description: 'Hubungkan data atribusi ke hasil pendapatan.',
			color: 'bg-orange-500',
			letter: 'H',
		},
		{
			name: 'Slack',
			category: 'Komunikasi',
			categoryKr: 'Komunikasi',
			description: 'Dapatkan sinyal operasi harian di saluran tim Anda.',
			color: 'bg-emerald-500',
			letter: 'S',
		},
		{
			name: 'Segment',
			category: 'Data',
			categoryKr: 'Data',
			description: 'Ingest aktivitas penggunaan produk dan petakan ke akun.',
			color: 'bg-sky-500',
			letter: 'S',
		},
		{
			name: 'Notion',
			category: 'Ruang Kerja',
			categoryKr: 'Ruang Kerja',
			description: 'Sematkan dasbor operasi langsung di dokumen Anda.',
			color: 'bg-neutral-800',
			letter: 'N',
		},
	],
	integrations_meta: "Integrations / Integrasi",
	integrations_title: `Kompatibel dengan alat yang \n<br /><span className="text-charcoal/30">sudah Anda gunakan.</span>`,
	short_description: "Integrasi mendalam dengan perangkat lunak B2B, CRM, dan alat operasional paling populer yang diandalkan tim Anda.",
	stats_row_data: [
		{ value: '40+', label: 'Integrasi bawaan' },
		{ value: '<2j', label: 'Waktu pengaturan' },
		{ value: '99.9%', label: 'SLA Uptime' },
		{ value: '2.4M', label: 'Data disinkronkan harian' },
	],
	CTA: {
		title: `Tidak melihat ekosistem alat Anda? \n<br /> <span className="text-signal">Kami akan membangun konektornya.</span>`,
		short_description: "Paket Enterprise mencakup pengembangan integrasi kustom. Kami telah membangun konektor untuk 40+ alat dan terus bertambah.",
		button_text: "Ajukan Integrasi",
		span_text: "Rata-rata waktu pembuatan: 2 minggu"
	}
}

// Simulation Section
const SIMULATION_CONTENT = {
	graph_data: {
		seed: {
			label: 'Seed',
			revenue: 1.8,
			revenueDisplay: '$1,8M',
			cycle: 41,
			retention: 86,
			bars: [34, 42, 49, 57, 64],
			note: 'Gantikan pelaporan yang dipimpin pendiri dengan kokpit pendapatan bersama.',
			stage: 'Traksi Awal',
			team: '5-15 orang',
		},
		growth: {
			label: 'Growth',
			revenue: 8.6,
			revenueDisplay: '$8,6M',
			cycle: 29,
			retention: 91,
			bars: [46, 58, 67, 76, 84],
			note: 'Standardisasi sinyal ekspansi dan perencanaan kapasitas di seluruh tim.',
			stage: 'Fase Penskalaan',
			team: '20-80 orang',
		},
		enterprise: {
			label: 'Enterprise',
			revenue: 24,
			revenueDisplay: '$24M',
			cycle: 18,
			retention: 96,
			bars: [62, 70, 79, 86, 94],
			note: 'Beroperasi dengan kontrol, kemampuan audit, dan perkiraan yang siap dipresentasikan ke dewan direksi.',
			stage: 'Pemimpin Pasar',
			team: '100+ orang',
		},
	},
	steps: [
		{
			num: '01',
			title: 'Hubungkan',
			titleKr: 'Hubungkan',
			desc: 'Hubungkan CRM, penagihan, dan sumber data Anda dalam hitungan menit.',
			icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
		},
		{
			num: '02',
			title: 'Modelkan',
			titleKr: 'Modelkan',
			desc: 'Northstar memetakan lapisan operasi Anda dan memunculkan celah.',
			icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
		},
		{
			num: '03',
			title: 'Skalakan',
			titleKr: 'Skalakan',
			desc: 'Eksekusi dengan kejelasan. Setiap tim bergerak dengan sinyal yang sama.',
			icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
		},
	],
	guide_panel: {
		sub_title: "Cara kerja / 작동 방식",
		title: `Tiga langkah menuju \n<br /> kejelasan operasi.`,
		short_description: "Northstar mempersingkat fase pertengahan yang kacau menjadi sistem yang dapat diulang.",
		button_text: "Mulai simulasi Anda →"
	},
	simulator_meta: "Simulator skala / 성장 신호",
	simulator_title: `Modelkan lapisan \n<br /> operasi berikutnya.`,
	short_description: "Pilih tahapan untuk melihat bagaimana Northstar mengubah metrik operasi Anda. Saksikan angka-angka berkembang secara real-time.",
}

// Pricing Section
const PRICING_CONTENT = {
	plans: [
		{
			id: 'foundation',
			label: 'Foundation',
			labelKr: 'Fondasi',
			tagline: 'Untuk tim yang sedang mencari keselarasan produk-pasar (product-market fit).',
			price: '$2.400',
			priceNumeric: 2400,
			period: 'Per bulan',
			note: 'Ditagih tahunan. Opsi bulanan seharga $2.900.',
			cta: 'Mulai Foundation',
			popular: false,
			features: [
				'Kokpit pendapatan (sumber kebenaran tunggal)',
				'Integrasi CRM + penagihan (hingga 3)',
				'Tinjauan operasi bulanan',
				'Skor kualitas pipeline',
				'Dukungan email',
				'Termasuk 1 kursi operator',
			],
			icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
		},
		{
			id: 'growth',
			label: 'Growth',
			labelKr: 'Pertumbuhan',
			tagline: 'Untuk tim berkembang yang membutuhkan sistem.',
			price: '$6.800',
			priceNumeric: 6800,
			period: 'Per month',
			note: 'Paling populer untuk perusahaan Seri A–B.',
			cta: 'Mulai Growth',
			popular: true,
			features: [
				'Semua yang ada di Foundation, ditambah:',
				'Integrasi tanpa batas',
				'Tinjauan operasi mingguan',
				'Akses simulator skala',
				'Playbook GTM + RevOps',
				'Tim operator khusus (2)',
				'Saluran koneksi Slack',
				'Perkiraan yang siap untuk dewan direksi',
			],
			icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
		},
		{
			id: 'scale',
			label: 'Scale',
			labelKr: 'Skala',
			tagline: 'Untuk tim yang melewati batas ARR $10M.',
			price: '$14.500',
			priceNumeric: 14500,
			period: 'Per bulan',
			note: 'Dibangun untuk koordinasi multi-tim.',
			cta: 'Mulai Scale',
			popular: false,
			features: [
				'Semua yang ada di Growth, ditambah:',
				'Lapisan operasi multi-tim',
				'Modul perencanaan kapasitas',
				'Deteksi sinyal ekspansi',
				'Dasbor KPI kustom',
				'Tim operator khusus (4)',
				'Offsite strategi triwulanan',
				'Jejak audit & kepatuhan',
			],
			icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
		},
		{
			id: 'enterprise',
			label: 'Enterprise',
			labelKr: 'Enterprise',
			tagline: 'Untuk pemimpin pasar dengan operasi yang kompleks.',
			price: 'Kustom',
			priceNumeric: null,
			period: 'Kemitraan yang disesuaikan',
			note: 'Khusus kemitraan tingkat dewan direksi.',
			cta: 'Hubungi Penjualan',
			popular: false,
			features: [
				'Semua yang ada di Scale, ditambah:',
				'Desain sistem operasi penuh',
				'Tim operator yang tertanam',
				'Opsi residensi data',
				'SSO & keamanan tingkat lanjut',
				'SLA & pelaporan kustom',
				'Tinjauan bisnis eksekutif',
				'Akses awal ke fitur beta',
				'Manajer kesuksesan khusus',
			],
			icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
		},
	],
	faqs: [
		{
			q: 'Apakah Anda menggantikan CRM, BI, atau alat internal kami?',
			a: 'Tidak. Northstar berada di atas ekosistem alat Anda yang sudah ada sebagai lapisan operasi. Kami berintegrasi dengan CRM, penagihan, dan sumber data Anda — kami tidak meminta Anda untuk membongkar dan menggantinya.',
		},
		{
			q: 'Berapa lama waktu yang dibutuhkan untuk proses pengerjaan?',
			a: 'Paket Foundation: 2 minggu untuk tampilan operasi pertama. Paket Growth: sprint 30 hari untuk sistem penuh. Paket Scale & Enterprise: penerapan bertahap selama 60–90 hari.',
		},
		{
			q: 'Apakah kolaborator atau investor dapat bergabung dalam alur kerja?',
			a: 'Ya. Paket Growth ke atas mencakup dasbor yang siap untuk investor. Paket Enterprise mendukung akses portal dewan direksi dengan izin berbasis peran.',
		},
		{
			q: 'Untuk fase perusahaan seperti apa Northstar dibangun?',
			a: 'Kami bekerja paling baik dengan tim B2B di antara traksi awal hingga skala enterprise: pergerakan yang cukup untuk menciptakan kompleksitas operasional, tetapi masih memiliki pengaruh yang cukup untuk merancang ulang sistem.',
		},
	],
	pricing_meta: "Pricing & Packaging / Harga & Paket",
	pricing_title: `Harga transparan. \n<br /> <span className="text-white/40">Tanpa kejutan saat skala berkembang.</span>`,
	short_description: "Pilih lapisan operasi yang sesuai dengan tahapan Anda. Mulai dengan efisien, berkembang tanpa hambatan. Setiap paket mencakup sprint implementasi 30 hari.",
	note: ["Penagihan tahunan · Hemat 20%", "Semua paket · Termasuk sprint 30 hari"],
	pricing_card: {
		popular_text: "Paling Populer",
		features: "Fitur"
	},
	bottom_cta: {
		title: "Tidak yakin paket mana yang sesuai?",
		description: `Jadwalkan audit sistem 30 menit gratis. Kami akan memetakan lapisan operasi Anda saat ini dan merekomendasikan titik awal yang tepat.`,
		button_text: "Pesan Audit Gratis",
	},
	faq_section: {
		sub_title: "Questions / Pertanyaan",
		title: "Pertanyaan sebelum peta sistem pertama."
	}
}

// Steps Section
const STEPS_CONTENT = {
	steps: [
		{
			num: '01',
			title: 'Hubungkan ekosistem alat Anda.',
			titleKr: 'Hubungkan ekosistem alat Anda.',
			subtitle: 'Hubungkan alat yang Anda gunakan dalam hitungan menit.',
			description:
				'Northstar berintegrasi dengan CRM, penagihan, dan sumber data Anda tanpa perlu membongkar pasang. Kami membaca data Anda yang ada untuk membangun tampilan operasi.',
			features: [
				'Integrasi bawaan dengan 40+ alat',
				'Pengaturan dalam waktu kurang dari 2 jam',
				'Tidak memerlukan migrasi data',
				'Sinkronisasi real-time di seluruh sistem',
			],
			visual: {
				label: 'Connection Layer',
				labelKr: 'Lapisan Koneksi',
				items: [
					{ name: 'Salesforce', status: 'Terhubung', color: 'bg-blue-500' },
					{ name: 'Stripe', status: 'Terhubung', color: 'bg-violet-500' },
					{ name: 'HubSpot', status: 'Menyinkronkan', color: 'bg-orange-500' },
					{ name: 'Slack', status: 'Terhubung', color: 'bg-emerald-500' },
				],
			},
		},
		{
			num: '02',
			title: 'Modelkan operasi Anda.',
			titleKr: 'Modelkan operasi Anda.',
			subtitle: 'Lihat sistem di balik kebisingan.',
			description:
				'Northstar memetakan pergerakan pendapatan Anda, memunculkan celah, dan membangun tampilan operasi bersama. Setiap tim bergerak dengan sinyal yang sama.',
			features: [
				'Dasbor kokpit pendapatan',
				'Penilaian kualitas pipeline',
				'Deteksi sinyal ekspansi',
				'Perkiraan yang siap untuk dewan direksi',
			],
			visual: {
				label: 'Operating Model',
				labelKr: 'Model Operasi',
				metrics: [
					{ label: 'ARR', value: '$8,6M', change: '+24%' },
					{ label: 'Kecepatan', value: '4.8x', change: '+12%' },
					{ label: 'Retensi', value: '91%', change: '+5%' },
				],
			},
		},
		{
			num: '03',
			title: 'Skalakan tanpa hambatan.',
			titleKr: 'Skalakan tanpa hambatan.',
			subtitle: 'Eksekusi dengan kejelasan di setiap tahapan.',
			description:
				'Dari Pendanaan Seri A hingga IPO, Northstar tumbuh bersama Anda. Alur kerja yang lebih ketat, data yang lebih bersih, pengambilan keputusan yang lebih cepat. Lapisan operasi yang sudah dibutuhkan oleh tahapan Anda berikutnya.',
			features: [
				'Koordinasi multi-tim',
				'Modul perencanaan kapasitas',
				'Jejak audit & kepatuhan',
				'Tim operator yang tertanam',
			],
			visual: {
				label: 'Scale Engine',
				labelKr: 'Mesin Skala',
				stages: [
					{ name: 'Seed', arr: '$1,8M', active: false },
					{ name: 'Growth', arr: '$8,6M', active: true },
					{ name: 'Scale', arr: '$24M', active: false },
					{ name: 'Enterprise', arr: 'Kustom', active: false },
				],
			},
		},
	],
	steps_meta: "How it works / Cara Kerja",
	steps_count: "Langkah",
}

// Testimonials Section
const TESTIMONIALS_CONTENT = {
	testimonials: [
		{
			quote:
				"Northstar memberikan tampilan operasi tunggal bagi tim kepemimpinan kami tanpa memaksa setiap departemen melakukan migrasi platform yang berat.",
			name: "Maya Santoso",
			role: "COO, Ledgerbase"
		},
		{
			quote:
				"Pekerjaan ini terasa lebih seperti arsitektur daripada konsultasi. Setiap metrik, ritual, dan alur kerja memiliki alasan yang jelas untuk ada.",
			name: "Daniel Cho",
			role: "Mitra, Meridian Ventures"
		},
		{
			quote:
				"Kami memangkas latensi keputusan dalam perencanaan ekspansi dari hitungan minggu menjadi hari. Sistem ini tajam, minimalis, dan sangat berguna.",
			name: "Leila Hart",
			role: "VP Revenue, AtlasOps"
		}
	],
	testimonials_meta: "Testimonials / Catatan Lapangan",
	testimonials_title: "Bukti dari tim yang beroperasi di bawah tekanan.",
}

// QNA Section
const QNA_CONTENT = {
	questions: [
		{
			question: "Untuk fase perusahaan seperti apa Northstar dibangun?",
			answer:
				"Kami bekerja paling baik dengan tim B2B di antara traksi awal hingga skala enterprise: pergerakan yang cukup untuk menciptakan kompleksitas operasional, tetapi masih memiliki pengaruh yang cukup untuk merancang ulang sistem."
		},
		{
			question: "Apakah Anda menggantikan CRM, BI, atau alat internal kami?",
			answer:
				"No. Pengerjaan dimulai dengan menghubungkan dan memperjelas apa yang sudah ada. Penggantian hanya terjadi ketika suatu alat secara aktif menghambat model operasi harian."
		},
		{
			question: "Berapa lama waktu yang dibutuhkan untuk proses pengerjaan?",
			answer:
				"Sebagian besar sistem awal dirancang dan diimplementasikan dalam waktu enam hingga sepuluh minggu, diikuti oleh ritme operasi tempat kami menyempurnakan dasbor, alur kerja, dan ritual pengambilan keputusan."
		},
		{
			question: "Apakah kolaborator atau investor dapat bergabung dalam alur kerja?",
			answer:
				"Ya. Kami sering kali bekerja dengan mitra operasi, arsitek analitik, pemimpin RevOps, dan sponsor eksekutif sehingga sistem ini dapat terus berjalan melampaui durasi proyek."
		}
	],
	qna_meta: "QNA / Kesesuaian Operasi",
	qna_title: "Pertanyaan sebelum peta sistem pertama.",
}

// CTA Section
const CTA_CONTENT = {
	cta_meta: "Panggilan Terakhir / Operasi Siap Dewan Direksi",
	cta_title: `Bangun sistem operasi yang sudah dibutuhkan oleh tahapan Anda berikutnya.`,
	description: `Mulailah dengan audit sistem selama <span className="text-amber-400 font-semibold">45 menit</span>. Kami memetakan hambatan, mengidentifikasi daya ungkit tercepat, dan menetapkan sprint implementasi pertama.`,
	button_text: "Pesan Audit",
	trust_indicators: ["Tersisa 3 slot", "Kuartal 3 (Q3) 2026"]
}

// Footer Section
const FOOTER_CONTENT = {
	navigation_links: [
		{ href: '#platform', label: 'Platform' },
		{ href: '#about', label: 'About' },
		{ href: '#method', label: 'Method' },
		{ href: '#simulator', label: 'Scale Simulator' },
		{ href: '#qna', label: 'QNA' },
	],
	footer_description: "Strategi infrastruktur, sistem data, dan desain operasional untuk \n tim B2B yang bergerak dari traction menuju skala.",
	info_column: "Kemitraan selektif untuk operator B2B yang didukung modal ventura, dana, \n dan tim GTM.",
	back_text: "Kembali ke atas",
	footer_quotes: "Dibuat dengan ketelitian · Dirancang untuk skala besar"
}