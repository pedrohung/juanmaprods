// =====================================================================
// DATOS DEL SITIO DE JUANMA RODRÍGUEZ — único archivo de contenido.
// Cada texto tiene versión ES (principal) y EN.
// ⚠️ PENDIENTE = texto provisional que Juanma debe confirmar o corregir.
// ⚠️ EJEMPLO   = contenido de muestra que hay que sustituir por el real.
// =====================================================================

import pianoImg from "@/assets/piano.jpeg.asset.json";
import monitoresImg from "@/assets/estudio-monitores.jpeg.asset.json";
import retratoImg from "@/assets/estudio-retrato.jpeg.asset.json";
import mezclasImg from "@/assets/estudio-mezclas.jpeg.asset.json";
import tecladoImg from "@/assets/estudio-teclado.jpeg.asset.json";

export type Lang = "es" | "en";
export type T = { es: string; en: string };

export const site = {
  name: "Juanma Rodríguez",
  role: { es: "Productor Musical · Barcelona", en: "Music Producer · Barcelona" },
  tagline: { es: "El sonido que tu música merece.", en: "The sound your music deserves." },
  location: { es: "Sant Joan Despí · Barcelona · Presencial y a distancia", en: "Sant Joan Despí · Barcelona · In-studio and remote" },
  address: "Carrer d'Antoni Gaudí 8, 08970 Sant Joan Despí",
  booksy: "https://booksy.com/es-es/108980_juanma-rodriguez-prods_servicios-profesionales_48832_sant-joan-despi",
  // Audio del showreel (vacío = el reproductor no se muestra)
  reelAudio: "",
  rating: { value: "5,0", count: 15 },
  // PENDIENTE: email y WhatsApp de contacto (vacío = no se muestra)
  email: "",
  whatsapp: "",
};

// PENDIENTE: redes sociales. Solo se muestran las que tengan URL.
export const socials: { name: "Instagram" | "YouTube" | "Spotify" | "TikTok"; url: string }[] = [
  { name: "Instagram", url: "https://www.instagram.com/juanmarodriguezprod/" },
  { name: "YouTube", url: "" },
  { name: "Spotify", url: "" },
  { name: "TikTok", url: "" },
];

export const nav: { id: string; label: T }[] = [
  { id: "inicio", label: { es: "Inicio", en: "Home" } },
  { id: "sobre-mi", label: { es: "Sobre mí", en: "About" } },
  { id: "servicios", label: { es: "Servicios", en: "Services" } },
  { id: "trabajos", label: { es: "Trabajos", en: "Work" } },
  { id: "proceso", label: { es: "Proceso", en: "Process" } },
  { id: "faq", label: { es: "FAQ", en: "FAQ" } },
  { id: "contacto", label: { es: "Contacto", en: "Contact" } },
  { id: "reservar", label: { es: "Reservar", en: "Book" } },
];

export const marquee = ["Producción", "Mezcla", "Mastering", "Beats", "Grabación"];

// PENDIENTE: bio provisional, Juanma debe revisarla.
export const about = {
  title: { es: "El estudio es mi instrumento", en: "The studio is my instrument" },
  bio: [
    {
      es: "Soy Juanma Rodríguez, productor musical en Barcelona. Trabajo con artistas que quieren que su música suene como la imaginan: con carácter, claridad y la fuerza que necesita cada tema.",
      en: "I'm Juanma Rodríguez, a music producer based in Barcelona. I work with artists who want their music to sound the way they imagine it: with character, clarity and the punch every track needs.",
    },
    {
      es: "Desde la primera idea hasta el máster final, acompaño cada proyecto de cerca, escuchando al artista y cuidando cada detalle del sonido.",
      en: "From the first idea to the final master, I stay close to every project, listening to the artist and caring for every detail of the sound.",
    },
  ],
  traits: [
    { icon: "ear", title: { es: "Oído de productor", en: "A producer's ear" }, text: { es: "Escucho lo que pide la canción antes de tocar nada.", en: "I listen to what the song needs before touching anything." } },
    { icon: "detail", title: { es: "Obsesión por el detalle", en: "Obsessed with detail" }, text: { es: "Cada capa, cada transición, cada segundo cuenta.", en: "Every layer, every transition, every second counts." } },
    { icon: "talk", title: { es: "Trato directo", en: "Direct contact" }, text: { es: "Hablas conmigo durante todo el proceso.", en: "You talk to me throughout the whole process." } },
  ],
};

// PENDIENTE: lista orientativa, Juanma confirma la final.
export const services: { icon: string; title: T; text: T; includes: T[]; price?: string }[] = [
  { icon: "prod", price: "500", title: { es: "Producción musical", en: "Music production" }, text: { es: "Construyo el tema contigo: arreglos, sonido y dirección artística.", en: "We build the track together: arrangement, sound and artistic direction." }, includes: [{ es: "Arreglos e instrumentación", en: "Arrangement & instrumentation" }, { es: "Diseño de sonido", en: "Sound design" }, { es: "Dirección artística", en: "Artistic direction" }] },

  { icon: "mix", price: "200", title: { es: "Mezcla", en: "Mixing" }, text: { es: "Equilibrio, espacio y pegada para que cada elemento ocupe su lugar.", en: "Balance, space and punch so every element sits where it belongs." }, includes: [{ es: "Edición y limpieza de pistas", en: "Track editing & cleanup" }, { es: "Ecualización y dinámica", en: "EQ & dynamics" }, { es: "Revisiones contigo", en: "Revisions with you" }] },

  { icon: "master", title: { es: "Mastering", en: "Mastering" }, text: { es: "El acabado final para que tu tema suene sólido en cualquier plataforma.", en: "The final polish so your track sounds solid on any platform." }, includes: [{ es: "Volumen competitivo", en: "Competitive loudness" }, { es: "Ajuste para plataformas", en: "Platform-ready" }, { es: "Archivos finales", en: "Final files" }] },

  { icon: "beat", price: "250", title: { es: "Beats a medida", en: "Custom beats" }, text: { es: "Instrumentales creados desde cero para tu voz y tu estilo.", en: "Instrumentals made from scratch for your voice and style." }, includes: [{ es: "Instrumental desde cero", en: "Built from scratch" }, { es: "Adaptado a tu voz", en: "Tailored to your voice" }, { es: "Pistas separadas", en: "Separate stems" }] },

  { icon: "rec", price: "120", title: { es: "Grabación en estudio", en: "Studio recording" }, text: { es: "Sesiones de grabación de voces e instrumentos en Barcelona.", en: "Vocal and instrument recording sessions in Barcelona." }, includes: [{ es: "Voces e instrumentos", en: "Vocals & instruments" }, { es: "Dirección de la sesión", en: "Session direction" }, { es: "Estudio en Barcelona", en: "Studio in Barcelona" }] },

  { icon: "advice", title: { es: "Preproducción y asesoría", en: "Pre-production & advice" }, text: { es: "Ordenamos ideas, maquetas y objetivos antes de entrar al estudio.", en: "We shape ideas, demos and goals before entering the studio." }, includes: [{ es: "Revisión de maquetas", en: "Demo review" }, { es: "Plan de proyecto", en: "Project plan" }, { es: "Referencias y objetivos", en: "References & goals" }] },

];

export const process: { title: T; text: T }[] = [
  { title: { es: "Escucha y briefing", en: "Listening & briefing" }, text: { es: "Hablamos de tu proyecto, tus referencias y lo que quieres transmitir.", en: "We talk about your project, references and what you want to convey." } },
  { title: { es: "Producción", en: "Production" }, text: { es: "Damos forma al tema: estructura, sonidos y arreglos.", en: "We shape the track: structure, sounds and arrangements." } },
  { title: { es: "Mezcla", en: "Mixing" }, text: { es: "Cada elemento en su sitio, con revisiones contigo.", en: "Every element in place, with revisions together." } },
  { title: { es: "Mastering y entrega", en: "Mastering & delivery" }, text: { es: "Acabado final y archivos listos para publicar.", en: "Final polish and files ready to release." } },
];

// EJEMPLO: sustituir por los trabajos reales de Juanma.
// cover: portada (ahora fotos de estudio PROVISIONALES). audio: URL del audio (vacío = sin reproductor).
export const works: { example: boolean; title: string; artist: string; year: string; role: T; cover: string; coverAlt: string; audio: string; description: T }[] = [
  { example: true, title: "Proyecto 01", artist: "Artista por confirmar", year: "—", role: { es: "Producción", en: "Production" }, cover: pianoImg.url, coverAlt: "Manos en el piano (portada provisional)", audio: "", description: { es: "Trabajo de ejemplo pendiente de sustituir.", en: "Sample work pending replacement." } },
  { example: true, title: "Proyecto 02", artist: "Artista por confirmar", year: "—", role: { es: "Mezcla", en: "Mixing" }, cover: monitoresImg.url, coverAlt: "Frente a los monitores (portada provisional)", audio: "", description: { es: "Trabajo de ejemplo pendiente de sustituir.", en: "Sample work pending replacement." } },
  { example: true, title: "Proyecto 03", artist: "Artista por confirmar", year: "—", role: { es: "Mastering", en: "Mastering" }, cover: retratoImg.url, coverAlt: "Retrato en el estudio (portada provisional)", audio: "", description: { es: "Trabajo de ejemplo pendiente de sustituir.", en: "Sample work pending replacement." } },
];

// Galería «El estudio»
export const gallery: { src: string; caption: T }[] = [
  { src: mezclasImg.url, caption: { es: "La mesa de mezclas", en: "The mixing desk" } },
  { src: pianoImg.url, caption: { es: "El piano", en: "The piano" } },
  { src: tecladoImg.url, caption: { es: "La sala de control", en: "The control room" } },
  { src: monitoresImg.url, caption: { es: "Frente a los monitores", en: "Facing the monitors" } },
  { src: retratoImg.url, caption: { es: "Entre tomas", en: "Between takes" } },
];

// Reseñas reales verificadas en Booksy (texto original, sin traducir).
export const testimonials: { quote: string; author: string }[] = [
  { quote: "El mejor productor de Barcelona.", author: "Manel" },
  { quote: "EL ESTUDIO Y EL PRODUCTOR MÁS TOP DE BARCELONA UN PLACER TRABAJAR AHÍ SIEMPRE", author: "C.G" },
  { quote: "Trabajar con él es una experiencia inolvidable", author: "Hugo" },
  { quote: "ES EL MEJOR!", author: "Arian" },
  { quote: "10/10", author: "Alba di" },
];

export const faq: { q: T; a: T }[] = [
  { q: { es: "¿Cuánto cuesta una producción?", en: "How much does a production cost?" }, a: { es: "Depende del proyecto: número de temas, servicios y plazos. Cuéntame qué tienes en mente y te paso un presupuesto sin compromiso.", en: "It depends on the project: number of tracks, services and timing. Tell me what you have in mind and I'll send a no-obligation quote." } },
  { q: { es: "¿Trabajas a distancia?", en: "Do you work remotely?" }, a: { es: "Sí. Puedo trabajar con tus pistas desde cualquier lugar y mantenernos en contacto durante todo el proceso. Si estás en Barcelona, también en el estudio.", en: "Yes. I can work on your tracks from anywhere and we stay in touch throughout. If you're in Barcelona, in the studio too." } },
  { q: { es: "¿Qué necesito para empezar?", en: "What do I need to get started?" }, a: { es: "Una idea, una maqueta o las pistas que tengas, y algunas referencias de cómo quieres que suene. Con eso hablamos.", en: "An idea, a demo or the tracks you have, plus a few references for how you want it to sound." } },
  { q: { es: "¿Cuánto tarda un proyecto?", en: "How long does a project take?" }, a: { es: "Varía según el alcance. Al definir el proyecto acordamos un calendario realista.", en: "It varies with scope. We agree a realistic timeline when defining the project." } },
  { q: { es: "¿Haces beats por encargo?", en: "Do you make custom beats?" }, a: { es: "Sí, creo instrumentales a medida pensados para tu voz y tu estilo.", en: "Yes, I make custom instrumentals designed for your voice and style." } },
];

export const projectTypes: { value: string; label: T }[] = [
  { value: "produccion", label: { es: "Producción", en: "Production" } },
  { value: "mezcla", label: { es: "Mezcla", en: "Mixing" } },
  { value: "mastering", label: { es: "Mastering", en: "Mastering" } },
  { value: "beat", label: { es: "Beat", en: "Beat" } },
  { value: "otro", label: { es: "Otro", en: "Other" } },
];

// Textos de interfaz
export const ui = {
  cta: { es: "Trabaja conmigo", en: "Work with me" },
  listen: { es: "Escuchar trabajos", en: "Listen to work" },
  contact: { es: "Contactar", en: "Contact" },
  servicesTitle: { es: "Servicios", en: "Services" },
  ask: { es: "Consultar", en: "Enquire" },
  band: { es: "¿Tienes un proyecto en mente? Cuéntamelo", en: "Got a project in mind? Tell me about it" },
  processTitle: { es: "Cómo trabajo", en: "How I work" },
  worksTitle: { es: "Trabajos", en: "Work" },
  testimonialsTitle: { es: "Testimonios", en: "Testimonials" },
  testimonialsEmpty: { es: "Los testimonios de los artistas con los que trabajo aparecerán aquí.", en: "Testimonials from the artists I work with will appear here." },
  faqTitle: { es: "Preguntas frecuentes", en: "FAQ" },
  contactTitle: { es: "Hablemos de tu música", en: "Let's talk about your music" },
  name: { es: "Nombre", en: "Name" },
  email: { es: "Email", en: "Email" },
  type: { es: "Tipo de proyecto", en: "Project type" },
  message: { es: "Mensaje", en: "Message" },
  send: { es: "Enviar mensaje", en: "Send message" },
  thanks: { es: "¡Gracias! Se ha abierto tu correo con el mensaje listo para enviar a Juanma.", en: "Thanks! Your email app opened with the message ready to send to Juanma." },
  book: { es: "Reserva tu sesión", en: "Book your session" },
  bookFast: { es: "De momento, la forma más rápida es reservar tu sesión", en: "For now, the fastest way is to book your session" },
  from: { es: "Desde", en: "From" },
  rating: { es: "reseñas verificadas en Booksy", en: "verified reviews on Booksy" },
  reel: { es: "Escucha mi reel", en: "Listen to my reel" },
  whatWeDo: { es: "Lo que hago", en: "What I do" },
  includes: { es: "Incluye", en: "Includes" },
  onTurntable: { es: "En el plato", en: "On the turntable" },
  audioSoon: { es: "Audio próximamente", en: "Audio coming soon" },
  sample: { es: "Trabajo de ejemplo pendiente de sustituir", en: "Sample work pending replacement" },
  studioEyebrow: { es: "El estudio", en: "The studio" },
  studioTitle: { es: "Donde nace el sonido", en: "Where the sound is born" },
  whatsapp: { es: "WhatsApp", en: "WhatsApp" },
  down: { es: "Bajar", en: "Scroll down" },
  rights: { es: "Productor Musical, Barcelona", en: "Music Producer, Barcelona" },
};
