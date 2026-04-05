// DEMO — Clínica Dental Lumia
// Todos los datos son completamente ficticios. No representan ningún negocio real.

export const cliente = {

  // ─── IDENTIDAD ────────────────────────────────────────────────────────────
  nombre:       'Clínica Dental Lumia',
  nombreCorto:  'Lumia Dental',
  slug:         'clinica-dental-lumia',
  tipo:         'dental_clinic',
  tagline:      'Tu mejor sonrisa en Madrid',
  descripcionCorta: 'Clínica dental de confianza en el barrio de Salamanca. Tecnología moderna, equipo experto y primera consulta gratuita.',
  descripcionLarga: 'En Clínica Dental Lumia llevamos más de 15 años cuidando la salud bucodental de familias y profesionales en Madrid. Nuestro equipo de especialistas combina la última tecnología digital con un trato cercano y personalizado. Desde revisiones preventivas hasta implantología avanzada, cada tratamiento está diseñado para durar y para que te sientas seguro en todo momento.',

  // ─── CONTACTO ─────────────────────────────────────────────────────────────
  contacto: {
    telefono:   '91 123 45 67',
    email:      'info@lumia-dental.es',
    direccion:  'C/ Serrano, 142, bajo',
    ciudad:     'Madrid',
    codigoPostal: '28006',
    pais:       'España',
    gmapsUrl:   'https://maps.google.com/?q=C+Serrano+142+Madrid',
  },

  // ─── HORARIO ──────────────────────────────────────────────────────────────
  horario: [
    { dia: 'Lunes',     horas: '09:00–20:00', cerrado: false },
    { dia: 'Martes',    horas: '09:00–20:00', cerrado: false },
    { dia: 'Miércoles', horas: '09:00–20:00', cerrado: false },
    { dia: 'Jueves',    horas: '09:00–20:00', cerrado: false },
    { dia: 'Viernes',   horas: '09:00–18:00', cerrado: false },
    { dia: 'Sábado',    horas: '09:00–14:00', cerrado: false },
    { dia: 'Domingo',   horas: 'Cerrado',      cerrado: true  },
  ],

  // ─── VALORACIONES ─────────────────────────────────────────────────────────
  valoraciones: {
    rating:       4.9,
    totalResenas: 187,
    placeId:      null, // DEMO — sin placeId real
  },

  // ─── ESPECIALIDADES ───────────────────────────────────────────────────────
  especialidades: [
    {
      nombre:      'Odontología general',
      descripcion: 'Revisiones periódicas, empastes, extracciones y tratamientos preventivos para toda la familia. Tu salud bucal como prioridad.',
      icono:       'tooth',
      color:       'brand',
    },
    {
      nombre:      'Ortodoncia',
      descripcion: 'Brackets tradicionales y alineadores transparentes Invisalign para adultos y niños. Sonrisa alineada sin renunciar a la estética.',
      icono:       'braces',
      color:       'brand',
    },
    {
      nombre:      'Implantología',
      descripcion: 'Implantes de titanio con garantía de por vida. La solución definitiva para recuperar piezas dentales perdidas con total naturalidad.',
      icono:       'implant',
      color:       'brand',
    },
    {
      nombre:      'Estética dental',
      descripcion: 'Blanqueamiento profesional, carillas de porcelana y diseño de sonrisa. Luce la sonrisa que siempre has querido.',
      icono:       'star',
      color:       'accent',
    },
    {
      nombre:      'Periodoncia',
      descripcion: 'Diagnóstico y tratamiento de encías inflamadas y enfermedad periodontal. Cuidamos las bases de tu salud bucal a largo plazo.',
      icono:       'shield',
      color:       'brand',
    },
  ],

  // ─── EQUIPO ───────────────────────────────────────────────────────────────
  equipo: [
    {
      nombre:       'Dra. Ana Moreno Castillo',
      cargo:        'Directora y especialista en Implantología',
      colegiado:    'COM Madrid nº 28-4521',
      bio:          'Más de 15 años colocando implantes con precisión milimétrica. Formada en el Instituto Straumann y en la Universidad Complutense de Madrid. Apasionada por la odontología mínimamente invasiva.',
      foto:         '/fotos/equipo-ana-moreno.jpg',
      fotoAlt:      'Dra. Ana Moreno Castillo, directora de Clínica Dental Lumia',
      pexelsQuery:  'female dentist smiling white coat professional',
    },
    {
      nombre:       'Dr. Javier Ruiz Vega',
      cargo:        'Especialista en Ortodoncia',
      colegiado:    'COM Madrid nº 28-6734',
      bio:          'Experto en ortodoncia invisible y brackets estéticos. Máster por la Universidad de Salamanca. Ha tratado a más de 800 pacientes con Invisalign en los últimos 8 años.',
      foto:         '/fotos/equipo-javier-ruiz.jpg',
      fotoAlt:      'Dr. Javier Ruiz Vega, especialista en ortodoncia',
      pexelsQuery:  'male doctor portrait professional smiling',
    },
    {
      nombre:       'Dra. Carmen Vidal Reyes',
      cargo:        'Especialista en Estética Dental',
      colegiado:    'COM Madrid nº 28-8902',
      bio:          'Diseñadora de sonrisas con sensibilidad artística y rigor clínico. Formada en la Academia Americana de Odontología Estética. Sus carillas y blanqueamientos combinan belleza y funcionalidad.',
      foto:         '/fotos/equipo-carmen-vidal.jpg',
      fotoAlt:      'Dra. Carmen Vidal Reyes, especialista en estética dental',
      pexelsQuery:  'woman dentist professional portrait clinic',
    },
  ],

  // ─── SERVICIOS Y PRECIOS ──────────────────────────────────────────────────
  servicios: [
    {
      nombre:      'Revisión y diagnóstico',
      precio:      0,
      nota:        'Primera visita gratuita',
      duracionMin: 30,
      destacado:   false,
    },
    {
      nombre:      'Limpieza dental profesional',
      precio:      65,
      duracionMin: 45,
      destacado:   true,
      badge:       'Más solicitado',
    },
    {
      nombre:      'Empaste (composite)',
      precioDesde: 80,
      duracionMin: 60,
      destacado:   false,
    },
    {
      nombre:      'Extracción simple',
      precioDesde: 60,
      duracionMin: 45,
      destacado:   false,
    },
    {
      nombre:      'Blanqueamiento profesional',
      precio:      250,
      duracionMin: 90,
      destacado:   true,
      badge:       'Efecto inmediato',
    },
    {
      nombre:      'Ortodoncia Invisalign',
      precioDesde: 1800,
      nota:        'Financiación sin intereses',
      destacado:   false,
    },
    {
      nombre:      'Implante dental (unitario)',
      precioDesde: 900,
      nota:        'Incluye corona cerámica',
      destacado:   true,
      badge:       'Garantía de por vida',
    },
    {
      nombre:      'Carillas de porcelana',
      precioDesde: 450,
      nota:        'Precio por unidad',
      destacado:   false,
    },
  ],

  // ─── CASOS ANTES/DESPUÉS ──────────────────────────────────────────────────
  casosAntesDepues: [
    {
      titulo:      'Ortodoncia adultos',
      descripcion: 'Alineación completa en 14 meses con Invisalign. Resultado natural y discreto.',
      fotoAntes:    '/fotos/antes-ortodoncia.jpg',
      fotoAntesAlt: 'Dientes desalineados antes del tratamiento de ortodoncia',
      fotoDespues:    '/fotos/despues-ortodoncia.jpg',
      fotoDespuesAlt: 'Dientes perfectamente alineados tras ortodoncia Invisalign',
      pexelsQueryAntes:   'crooked teeth misaligned smile',
      pexelsQueryDespues: 'perfect aligned teeth smile',
    },
    {
      titulo:      'Blanqueamiento dental',
      descripcion: 'Blanqueamiento profesional en consulta. 8 tonos más blanco en una sola sesión.',
      fotoAntes:    '/fotos/antes-blanqueamiento.jpg',
      fotoAntesAlt: 'Dientes amarillentos antes del blanqueamiento dental',
      fotoDespues:    '/fotos/despues-blanqueamiento.jpg',
      fotoDespuesAlt: 'Dientes blancos y brillantes tras blanqueamiento profesional',
      pexelsQueryAntes:   'yellow stained teeth before whitening',
      pexelsQueryDespues: 'bright white teeth beautiful smile',
    },
    {
      titulo:      'Implante dental unitario',
      descripcion: 'Rehabilitación de pieza perdida con implante de titanio y corona de cerámica.',
      fotoAntes:    '/fotos/antes-implante.jpg',
      fotoAntesAlt: 'Espacio sin diente antes de colocar implante dental',
      fotoDespues:    '/fotos/despues-implante.jpg',
      fotoDespuesAlt: 'Implante dental integrado con aspecto natural',
      pexelsQueryAntes:   'missing tooth gap smile',
      pexelsQueryDespues: 'dental implant natural smile result',
    },
  ],

  // ─── TESTIMONIOS ──────────────────────────────────────────────────────────
  testimonios: [
    {
      nombre:  'María G.',
      rating:  5,
      texto:   'Llevo 3 años viniendo a Lumia y no cambiaría de clínica. La Dra. Moreno me colocó dos implantes y el resultado es perfecto. Muy profesionales y sin sustos económicos.',
      servicio: 'Implantología',
    },
    {
      nombre:  'Andrés T.',
      rating:  5,
      texto:   'Me hice el Invisalign con el Dr. Ruiz y en menos de un año mis dientes son irreconocibles (para bien). El equipo siempre está disponible para cualquier duda. Totalmente recomendable.',
      servicio: 'Ortodoncia',
    },
    {
      nombre:  'Lucía M.',
      rating:  5,
      texto:   'Primera vez que me hacen una limpieza y no paso miedo. Ambiente muy tranquilo, explican todo paso a paso. Ya he traído a mis padres también.',
      servicio: 'Odontología general',
    },
  ],

  // ─── SEGUROS ACEPTADOS ────────────────────────────────────────────────────
  seguros: [
    { nombre: 'Adeslas',      logo: null },
    { nombre: 'Sanitas',      logo: null },
    { nombre: 'Asisa',        logo: null },
    { nombre: 'Mapfre Salud', logo: null },
    { nombre: 'DKV',          logo: null },
    { nombre: 'AXA Salud',    logo: null },
  ],

  // ─── DIFERENCIALES ────────────────────────────────────────────────────────
  diferenciales: [
    {
      icono:  'monitor',
      titulo: 'Radiología digital',
      desc:   'Escáner 3D y radiografías digitales para diagnósticos precisos con mínima radiación.',
    },
    {
      icono:  'clock',
      titulo: 'Cita en menos de 24h',
      desc:   'Urgencias atendidas el mismo día. Reserva online disponible 24/7.',
    },
    {
      icono:  'accessibility',
      titulo: 'Acceso adaptado',
      desc:   'Instalaciones accesibles para personas con movilidad reducida.',
    },
    {
      icono:  'credit-card',
      titulo: 'Financiación sin intereses',
      desc:   'Fracciona tu tratamiento hasta 12 meses sin coste adicional.',
    },
  ],

  // ─── SEO ──────────────────────────────────────────────────────────────────
  seo: {
    title:       'Clínica Dental Lumia — Madrid | Primera consulta gratuita',
    description: 'Clínica dental en el barrio de Salamanca, Madrid. Implantes, ortodoncia, estética dental. Equipo especializado, tecnología digital y primera visita sin compromiso.',
    keywords:    ['clínica dental Madrid', 'dentista Salamanca Madrid', 'implantes dentales Madrid', 'ortodoncia invisible Madrid', 'blanqueamiento dental Madrid'],
    ogImage:     '/fotos/hero-clinica.jpg',
  },

  // ─── MAPA ─────────────────────────────────────────────────────────────────
  mapa: {
    // DEMO — iframe placeholder sin CID real
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4!2d-3.6850!3d40.4280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzQwLjgiTiAzwrA0MScwNi4wIlc!5e0!3m2!1ses!2ses!4v1234567890',
    lat:      40.4280,
    lng:      -3.6850,
  },

  // ─── FOTOS ────────────────────────────────────────────────────────────────
  fotos: [
    { src: '/fotos/hero-clinica.jpg',          alt: 'Interior moderno de Clínica Dental Lumia en Madrid',       width: 1920, height: 1080, pexelsQuery: 'modern dental clinic interior white clean' },
    { src: '/fotos/clinica-sala-espera.jpg',   alt: 'Sala de espera de Clínica Dental Lumia',                   width: 1200, height: 800,  pexelsQuery: 'dental clinic waiting room modern' },
    { src: '/fotos/clinica-gabinete.jpg',      alt: 'Gabinete dental equipado con tecnología digital',          width: 1200, height: 800,  pexelsQuery: 'dental office equipment modern technology' },
  ],

  // ─── MARCA ────────────────────────────────────────────────────────────────
  marca: {
    logo:      null,
    colores: {
      primario:   '#0ea5e9',
      secundario: '#0369a1',
      acento:     '#059669',
    },
    personalidad: ['Confiable', 'Luminoso', 'Moderno', 'Cercano', 'Riguroso'],
    tipografia: {
      display: 'Inter',
      body:    'Inter',
    },
  },

  // ─── CALENDLY ─────────────────────────────────────────────────────────────
  // Sustituir por la URL real del cliente en Calendly
  calendlyUrl: 'https://calendly.com/lumia-dental/consulta',

  // ─── SOCIAL ───────────────────────────────────────────────────────────────
  social: {
    instagram: 'https://instagram.com/lumia.dental',
    facebook:  'https://facebook.com/lumiadental',
    twitter:   null,
    tiktok:    null,
  },

  // ─── SANITY (Etapa 2) ─────────────────────────────────────────────────────
  sanity: {
    projectId: null,
    dataset:   'production',
  },
};

export default cliente;
