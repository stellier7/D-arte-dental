/**
 * D'Arte Dental — template option (branch: cursor/template-option-dde3)
 * Customized from dentist-template for client pitch.
 */

const config = {
  defaultLanguage: "es",

  practice: {
    name: "D'Arte Dental",
    tagline: {
      en: "Your smile, treated like a work of art.",
      es: "Tu sonrisa, tratada como una obra de arte.",
    },
    phone: "+504 3296-9047",
    phoneTel: "50432969047",
    address: {
      street: "Centro Morazán, Torre 1, Piso 6, Oficina 10606",
      city: "Tegucigalpa",
      state: "",
      zip: "",
      mapsQuery: "Centro Morazan, Blvd. Morazan, Tegucigalpa, Honduras",
    },
    hours: {
      mon: "7:00 AM – 7:00 PM",
      tue: "7:00 AM – 7:00 PM",
      wed: "7:00 AM – 7:00 PM",
      thu: "7:00 AM – 7:00 PM",
      fri: "7:00 AM – 7:00 PM",
      sat: "7:00 AM – 12:00 PM",
      sun: "",
    },
    email: "",
    yearsInPractice: "",
    patientRating: "",
  },

  branding: {
    primaryColor: "#1E4B3F",
    accentColor: "#7C3548",
    primaryDark: "#12332A",
    softBg: "#F6F1E7",
    logoUrl: "assets/images/logo.jpeg",
    heroImageUrl: "assets/images/Hero.jpeg",
  },

  ui: {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        dentists: "Our Team",
        gallery: "Gallery",
        testimonials: "Reviews",
        financing: "Financing",
        location: "Location",
        book: "Book Appointment",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        badge: "Centro Morazán, Tegucigalpa",
        cta: "Book via WhatsApp",
      },
      trust: {
        years: "Years in practice",
        rating: "Patient rating",
        licensed: "Licensed & certified",
      },
      sections: {
        services: "Our Services",
        servicesLead: "Every treatment, with the same attention to detail.",
        dentists: "Meet the Team",
        dentistsLead: "Dentistry designed from the first contact.",
        gallery: "Clinic Gallery",
        galleryLead: "A look inside our Centro Morazán practice.",
        testimonials: "What Patients Say",
        testimonialsLead: "Trusted by patients who visit us.",
        financing: "Insurance & Payments",
        financingLead: "Clear options, no surprises.",
        location: "Visit Us",
        locationLead: "We look forward to seeing you at Centro Morazán.",
      },
      services: { expand: "Learn more", collapse: "Show less" },
      location: {
        hours: "Hours",
        call: "Call Us",
        directions: "Get Directions",
        closed: "Closed",
        days: {
          mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday",
          fri: "Friday", sat: "Saturday", sun: "Sunday",
        },
      },
      stickyBar: { cta: "WhatsApp" },
      footer: {
        contact: "Contact",
        hours: "Hours",
        follow: "Follow Us",
        rights: "All rights reserved.",
      },
      langToggle: { label: "Language", en: "EN", es: "ES" },
    },
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        dentists: "Equipo",
        gallery: "Galería",
        testimonials: "Opiniones",
        financing: "Pagos",
        location: "Ubicación",
        book: "Agendar Cita",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        badge: "Centro Morazán, Tegucigalpa",
        cta: "Escríbenos por WhatsApp",
      },
      trust: {
        years: "Años de experiencia",
        rating: "Calificación de pacientes",
        licensed: "Licenciados y certificados",
      },
      sections: {
        services: "Nuestros Servicios",
        servicesLead: "Cada tratamiento, con el mismo cuidado por el detalle.",
        dentists: "El Equipo",
        dentistsLead: "Odontología pensada desde el primer contacto.",
        gallery: "La Galería",
        galleryLead: "Un vistazo a nuestro consultorio.",
        testimonials: "Testimonios",
        testimonialsLead: "Lo que dicen quienes ya nos visitaron.",
        financing: "Seguros y Pagos",
        financingLead: "Opciones claras, sin sorpresas.",
        location: "Ubicación",
        locationLead: "Te esperamos en Centro Morazán.",
      },
      services: { expand: "Ver más", collapse: "Ver menos" },
      location: {
        hours: "Horario",
        call: "Llámanos",
        directions: "Cómo Llegar",
        closed: "Cerrado",
        days: {
          mon: "Lunes", tue: "Martes", wed: "Miércoles", thu: "Jueves",
          fri: "Viernes", sat: "Sábado", sun: "Domingo",
        },
      },
      stickyBar: { cta: "WhatsApp" },
      footer: {
        contact: "Contacto",
        hours: "Horario",
        follow: "Síguenos",
        rights: "Todos los derechos reservados.",
      },
      langToggle: { label: "Idioma", en: "EN", es: "ES" },
    },
  },

  dentists: [
    {
      name: "Dra. Katherine Duarte",
      title: { en: "Dentist", es: "Odontóloga" },
      bio: {
        en: "Committed to calm, clear care — explaining every step and tailoring treatment to what you truly need.",
        es: "Comprometida con una atención calmada y clara — explicando cada paso y adaptando el tratamiento a lo que realmente necesitas.",
      },
      photoUrl: "assets/images/doctora-image.jpeg",
    },
    {
      name: "Dr. Jose Turcios",
      title: { en: "Dentist", es: "Odontólogo" },
      bio: {
        en: "Focused on precise diagnostics and predictable outcomes in a comfortable, welcoming environment.",
        es: "Enfocado en diagnósticos precisos y resultados predecibles en un entorno cómodo y acogedor.",
      },
      photoUrl: "assets/images/doctor-image.jpeg",
    },
  ],

  services: [
    {
      name: { en: "Dental Cleaning", es: "Limpieza dental" },
      description: {
        en: "Deep plaque and tartar removal to prevent cavities and gum disease — gentle and comfortable.",
        es: "Elimina placa y sarro en profundidad para prevenir caries y enfermedad de encías, con técnica suave y sin dolor.",
      },
      icon: "cleaning",
    },
    {
      name: { en: "Teeth Whitening", es: "Blanqueamiento dental" },
      description: {
        en: "Safe, supervised whitening with visible results from the first session.",
        es: "Aclara el tono natural de tus dientes con un procedimiento seguro y supervisado.",
      },
      icon: "whitening",
    },
    {
      name: { en: "Orthodontics", es: "Ortodoncia" },
      description: {
        en: "Traditional or aesthetic braces to align your bite and teeth at your own pace.",
        es: "Alineamos tu mordida y tus dientes con brackets tradicionales o estéticos.",
      },
      icon: "aligners",
    },
    {
      name: { en: "Dental Implants", es: "Implantes dentales" },
      description: {
        en: "Replace missing teeth with a personalized implant plan for function and aesthetics.",
        es: "Reemplaza piezas perdidas con implantes y un plan de tratamiento personalizado.",
      },
      icon: "implants",
    },
    {
      name: { en: "Smile Design / Veneers", es: "Diseño de sonrisa / Carillas" },
      description: {
        en: "Reshape color and proportion with high-aesthetic porcelain or resin veneers.",
        es: "Rediseñamos forma, color y proporción con carillas de porcelana o resina de alta estética.",
      },
      icon: "cosmetic",
    },
    {
      name: { en: "General Dentistry", es: "Odontología general" },
      description: {
        en: "Consultations, diagnostics, and restorative care for the whole family.",
        es: "Consultas, diagnósticos y tratamientos restaurativos para toda la familia.",
      },
      icon: "general",
    },
  ],

  testimonials: [],

  financingImages: [],

  gallery: [
    "assets/images/gallery/Gallery_01.jpeg",
    "assets/images/gallery/Gallery_02.jpeg",
    "assets/images/gallery/Gallery_03.jpeg",
    "assets/images/gallery/Gallery_04.jpeg",
    "assets/images/gallery/Gallery_05.jpeg",
    "assets/images/gallery/Gallery_06.jpeg",
  ],

  socials: {
    instagram: "https://www.instagram.com/dartedental",
    facebook: "https://www.facebook.com/profile.php?id=61583088577394",
  },
};

window.SITE_CONFIG = config;
