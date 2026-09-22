export const site = {
  name: 'The White Essence',
  fullName: 'The White Essence | By Mar',
  url: 'https://thewhiteessence.com',
  tagline: 'Wedding Planner & Event Designer · Barcelona',
  description:
    'Bodas con identidad propia en Barcelona y alrededores. Organización, coordinación y decoración handmade para parejas que quieren una boda que los refleje de verdad.',
  email: 'hola@thewhiteessence.com',
  phone: '+34 600 000 000',
  whatsapp: '34600000000',
  whatsappMessage: 'Hola Mar, me gustaría hablar sobre mi boda.',
  instagram: '@thewhiteessence.bymar',
  instagramUrl: 'https://www.instagram.com/thewhiteessence.bymar',
  location: 'Barcelona y alrededores',
  plannerName: 'Mar',
  structuredDataAddress: {
    locality: 'Barcelona',
    region: 'Cataluña',
    country: 'ES',
  },
}

export const navLinks = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Sobre mí', href: '/sobre-mi' },
]

export const services = [
  {
    id: 'organizacion',
    title: 'Organización',
    lead: 'Me encargo de todo, desde el primer concepto hasta el último detalle. Búsqueda de proveedores, diseño del espacio, control de presupuesto y coordinación completa el gran día.',
    includes: [
      'Concepto y diseño visual de la boda',
      'Búsqueda y gestión de todos los proveedores',
      'Control de presupuesto y pagos',
      'Seguimiento durante todos los preparativos',
      'Coordinación completa el gran día',
    ],
    image: '/photos/service-1.jpg',
    imageAlt: 'Mesa de boda con decoración de limones y flores en Barcelona',
  },
  {
    id: 'coordinacion',
    title: 'Coordinación',
    lead: 'Habéis organizado vuestra boda con cariño. Ahora necesitáis a alguien que lo ejecute con precisión. Me incorporo 6-8 semanas antes y el día solo tenéis que aparecer y disfrutar.',
    includes: [
      'Reunión de traspaso 6-8 semanas antes',
      'Timeline detallado y personalizado',
      'Gestión de todos los proveedores ese día',
      'Presencia total durante la celebración',
    ],
    image: '/photos/service-2.jpg',
    imageAlt: 'Pareja de novios en el momento de la boda en Barcelona',
  },
  {
    id: 'decoracion',
    title: 'Decoración y Handmade',
    lead: 'Diseño cada espacio con una identidad visual propia. Con elementos personalizados hechos a mano que convierten vuestra boda en algo que no se puede copiar ni reproducir.',
    includes: [
      'Diseño floral y decoración de espacios',
      'Elementos handmade personalizados',
      'Papelería y señalética a medida',
      'Detalles para invitados únicos',
    ],
    image: '/photos/service-3.jpg',
    imageAlt: 'Espejo decorativo con nombres y fecha de boda hecho a mano',
  },
]

export const process = [
  {
    title: 'Nos conocemos',
    description:
      'Una llamada sin compromiso. Me cuentas cómo imagináis vuestra boda y veo si tenemos el fit adecuado para trabajar juntos.',
    icon: 'chat',
  },
  {
    title: 'Propuesta a medida',
    description:
      'Preparo una propuesta personalizada con el servicio que tiene sentido para vosotros, lo que incluye y cómo trabajaríamos.',
    icon: 'document',
  },
  {
    title: 'Preparativos',
    description:
      'Empezamos. Con calma, con atención a cada detalle y con comunicación constante durante todo el proceso.',
    icon: 'calendar',
  },
  {
    title: 'El gran día',
    description:
      'Todo preparado. Vosotros solo tenéis que aparecer y disfrutar. Yo me encargo de que nada falle y todo fluya.',
    icon: 'heart',
  },
]

export const portfolio = [
  {
    id: 'mesa-mediterranea',
    title: 'Mesa Mediterránea',
    description: 'Limones, perlas y luz de verano',
    image: '/photos/portfolio-1.jpg',
  },
  {
    id: 'el-brindis',
    title: 'El Brindis',
    description: 'Una torre de copas diseñada con intención',
    image: '/photos/portfolio-2.jpg',
  },
  {
    id: 'la-mirada',
    title: 'La Mirada',
    description: 'Hay miradas que lo dicen todo',
    image: '/photos/portfolio-3.jpg',
  },
  {
    id: 'el-momento',
    title: 'El Momento',
    description: 'Entre pétalos y aplausos, Barcelona',
    image: '/photos/portfolio-4.jpg',
  },
  {
    id: 'the-veil',
    title: 'The Veil',
    description: 'Elegancia que no necesita palabras',
    image: '/photos/portfolio-5.jpg',
  },
  {
    id: 'detalles',
    title: 'Detalles',
    description: 'Hechos a mano con mucho amor',
    image: '/photos/portfolio-6.jpg',
  },
]

export const testimonials = [
  {
    quote:
      'Todo lo que soñamos, y más. Mar tiene un don especial para entender lo que quieres sin que apenas tengas que explicarlo. El día de nuestra boda fue exactamente como lo habíamos imaginado, pero mejor.',
    author: 'Irene y Carlos',
    date: 'Junio 2025',
    service: 'Organización',
  },
  {
    quote:
      'Los detalles handmade que creó para nuestra boda hicieron llorar a mi madre. Y a mí. Eso lo dice todo sobre lo que hace Mar: convierte una boda en algo que nadie olvida.',
    author: 'Andrea y Pablo',
    date: 'Abril 2026',
    service: 'Decoración y Handmade',
  },
  {
    quote:
      'Creía que organizar mi boda iba a ser agotador. Con Mar fue todo lo contrario. Cada reunión me dejaba con más ganas de que llegara el día. No puedo imaginar haberlo hecho sin ella.',
    author: 'Claudia y David',
    date: 'Septiembre 2025',
    service: 'Coordinación',
  },
]
