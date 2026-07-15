const translations = {

  en: {
    meta: {
      title: "AeroCater — Dispatch software for in-flight catering",
      description: "AeroCater is the dispatch platform built for in-flight catering: auto-dispatch, trolley chain-of-custody scanning, and a driver mobile app — built by a former dispatcher, not a generic logistics vendor."
    },
    nav: { platform: "Platform", how: "How it works", security: "Security", pricing: "Pricing", cta: "Book a demo" },
    hero: {
      eyebrow: "Dispatch software for in-flight catering",
      h1: "Every truck, every trolley, accounted for.",
      sub: "AeroCater replaces the whiteboard and the group chat with one dispatch board built around the mechanics of catering a flight — not a generic delivery route.",
      cta_primary: "Book a demo",
      cta_secondary: "See the platform",
      cta_sample: "Try with sample data"
    },
    board: { aria: "Live dispatch board animation showing simulated flight and trolley assignments", live: "Live dispatch feed" },
    trust_strip: {
      item1: "Encrypted in transit & at rest",
      item2: "Row-level access control",
      item3: "Individual activity logging",
      item4: "SOC 2 compliance in progress"
    },
    origin: {
      badge: "Why AeroCater exists",
      h2: "Eight years of running catering ops taught us exactly where the old systems break.",
      quote: "\"Generic logistics software doesn't know what a hydraulic scissor lift, a wide-body pairing rule, or a four-hour food-safety window even is. We built AeroCater because we got tired of bending someone else's software to fit an industry it was never designed for.\"",
      attrib: "— Founder, AeroCater · former in-flight catering dispatcher"
    },
    valueprop: {
      eyebrow: "Why not generic logistics software",
      h2: "Built around rules a generic platform doesn't know exist.",
      body: "A wide-body flight needs a different truck than a narrow-body. A trolley has a food-safety clock the moment it leaves the kitchen. A driver can't be double-booked across two gates. AeroCater's dispatch logic is built around constraints like these, not bolted on after the fact."
    },
    how: {
      eyebrow: "How it works",
      h2: "From flight schedule to loaded aircraft",
      step1_t: "Flights sync in", step1_d: "Schedules come in automatically, each with its catering requirement attached.",
      step2_t: "Auto-dispatch assigns", step2_d: "Trucks and drivers are matched by shift, drive time, and workload, without a dispatcher building the board by hand.",
      step3_t: "Drivers scan at the loading unit", step3_d: "Every trolley is scanned once, directly at the loading unit, before it goes on the truck.",
      step4_t: "Dispatch sees it live", step4_d: "Status, location, and exceptions update on the board as they happen."
    },
    cap: {
      h2: "Depth built for running a station, not just a truck",
      sub: "Beyond dispatch and scanning: the parts of the job that matter once you're running real volume.",
      card1_num: "FLEET HEALTH", card1_t: "See a problem before it's a delay", card1_d: "Live hydraulic cycles, service windows, and alerts surface issues before a truck fails mid-turnaround.",
      card2_num: "STATION ISOLATION", card2_t: "Every station stands alone", card2_d: "Each station runs on its own account, its own staff, and its own data — no shared logins, no visibility across sites, even for one operator running five stations.",
      card3_num: "REPORTING", card3_t: "Every scan, ready for an audit", card3_d: "Trolley scans, dispatch assignments, and driver check-ins export cleanly, built for the reporting an airline audit actually asks for.",
      card4_num: "LIVE ALERTS", card4_t: "Flagged before it becomes a delay", card4_d: "SLA risk, hydraulic thresholds, and unassigned flights surface on the board the moment they cross a threshold."
    },
    shot: {
      h2: "One screen. Every truck, every flight.",
      sub: "This is a real AeroCater ops board, not a mockup, running a live station.",
      alt: "AeroCater dispatcher ops board showing staff on duty, dispatch board with flight assignments, and fleet status panel",
      c1_k: "STAFF ON DUTY", c1_p: "Every shift, every driver, grouped and visible at a glance.",
      c2_k: "DISPATCH BOARD", c2_p: "Unassigned flights on one side, driver columns on the other.",
      c3_k: "FLEET & ALERTS", c3_p: "Truck health and live warnings, updated in real time."
    },
    mobile: {
      eyebrow: "At the loading unit",
      h2: "Drivers scan. Dispatch knows. Instantly.",
      sub: "No app store download, no separate password — just a personal link and a camera.",
      alt: "AeroCater driver app on a phone, mid-scan of a trolley QR label, showing 6 scanned confirmation",
      feat1: "Point-and-scan trolley QR labels — no manual typing",
      feat2: "Automatic duplicate and unknown-barcode detection",
      feat3: "Manual entry fallback for damaged labels",
      feat4: "Scans queue locally and sync the moment signal returns"
    },
    security: {
      h2: "Built to be trusted with live ops",
      sub: "Straight answers about how AeroCater is built and run, no vague reassurances.",
      item1_h: "Encrypted, access-controlled data", item1_p: "All data is encrypted in transit and stored with row-level security, so every user only ever sees the station and role they're authorized for. Hosted on Supabase, with SOC 2 compliance in progress.",
      item2_h: "Individual driver identity", item2_p: "No shared logins. Every scan and every check-in is tied to a specific person and logged for review.",
      item3_h: "Built around real operational timing", item3_p: "Food-safety windows, turnaround buffers, and shift boundaries are enforced in the dispatch logic itself, not left to a spreadsheet.",
      item4_h: "Direct support, not a ticket queue", item4_p: "You reach the team that builds AeroCater directly, not a tiered support desk reading from a script."
    },
    pricing: {
      tag: "Pricing", h3: "Sized to your station, not a seat license",
      p: "AeroCater is priced around your fleet size and number of stations, not a flat per-user fee that punishes you for scaling your team. Tell us about your operation and we'll size a plan around it.",
      cta: "Get pricing"
    },
    demo: {
      h2: "Talk to the people who built it.",
      p: "No sales deck, no tiered support queue. A working demo on a real station's data, and straight answers about how it's built.",
      cta_primary: "Book a demo", cta_secondary: "Ask a question"
    },
    footer: {
      tagline: "Dispatch software for in-flight catering, built by people who've run the ramp.",
      product_h: "Product", link_platform: "Platform", link_mobile: "Mobile app", link_security: "Security",
      company_h: "Company", link_contact: "Contact", link_pricing: "Pricing", link_demo: "Book a demo",
      rights: "All rights reserved.", location: "Toronto, Canada"
    }
  },

  fr: {
    meta: {
      title: "AeroCater — Logiciel de répartition pour la restauration à bord",
      description: "AeroCater est la plateforme de répartition conçue pour la restauration à bord : répartition automatique, traçabilité des chariots par scan, et une application mobile pour les chauffeurs — conçue par un ancien répartiteur, pas un fournisseur logistique générique."
    },
    nav: { platform: "Plateforme", how: "Fonctionnement", security: "Sécurité", pricing: "Tarifs", cta: "Réserver une démo" },
    hero: {
      eyebrow: "Logiciel de répartition pour la restauration à bord",
      h1: "Chaque camion, chaque chariot, sous contrôle.",
      sub: "AeroCater remplace le tableau blanc et le groupe de discussion par un seul tableau de répartition, conçu autour des contraintes propres à la restauration à bord — pas d'une tournée de livraison générique.",
      cta_primary: "Réserver une démo",
      cta_secondary: "Voir la plateforme",
      cta_sample: "Essayer avec des données d'exemple"
    },
    board: { aria: "Animation d'un tableau de répartition en direct montrant des affectations de vols et de chariots simulées", live: "Flux de répartition en direct" },
    trust_strip: {
      item1: "Chiffré en transit et au repos",
      item2: "Contrôle d'accès par ligne",
      item3: "Journalisation individuelle des activités",
      item4: "Conformité SOC 2 en cours"
    },
    origin: {
      badge: "Pourquoi AeroCater existe",
      h2: "Huit ans à gérer des opérations de restauration nous ont appris exactement où les anciens systèmes flanchent.",
      quote: "« Un logiciel logistique générique ne sait pas ce qu'est un lève-charge à ciseaux hydraulique, une règle de jumelage gros-porteur, ou une fenêtre de sécurité alimentaire de quatre heures. Nous avons créé AeroCater parce que nous étions fatigués de plier le logiciel d'un autre à une industrie pour laquelle il n'a jamais été conçu. »",
      attrib: "— Fondateur, AeroCater · ancien répartiteur en restauration à bord"
    },
    valueprop: {
      eyebrow: "Pourquoi pas un logiciel logistique générique",
      h2: "Conçu autour de règles qu'une plateforme générique ignore.",
      body: "Un vol gros-porteur exige un camion différent d'un monocouloir. Un chariot a une horloge de sécurité alimentaire dès qu'il quitte la cuisine. Un chauffeur ne peut pas être réservé sur deux portes en même temps. La logique de répartition d'AeroCater est construite autour de contraintes comme celles-ci, pas ajoutée après coup."
    },
    how: {
      eyebrow: "Fonctionnement",
      h2: "De l'horaire de vol à l'avion chargé",
      step1_t: "Les vols arrivent automatiquement", step1_d: "Les horaires sont synchronisés automatiquement, chacun avec ses exigences de restauration déjà attachées.",
      step2_t: "La répartition automatique assigne", step2_d: "Camions et chauffeurs sont jumelés selon le quart, le temps de trajet et la charge de travail, sans qu'un répartiteur construise le tableau à la main.",
      step3_t: "Les chauffeurs scannent au poste de chargement", step3_d: "Chaque chariot est scanné une seule fois, directement au poste de chargement, avant d'être chargé sur le camion.",
      step4_t: "La répartition voit tout en direct", step4_d: "Statut, position et exceptions se mettent à jour sur le tableau au fur et à mesure."
    },
    cap: {
      h2: "Une profondeur pensée pour gérer une station, pas seulement un camion",
      sub: "Au-delà de la répartition et du scan : les aspects qui comptent une fois que le volume devient réel.",
      card1_num: "SANTÉ DE LA FLOTTE", card1_t: "Repérer un problème avant qu'il ne devienne un retard", card1_d: "Cycles hydrauliques en direct, fenêtres d'entretien et alertes signalent les problèmes avant qu'un camion ne tombe en panne en pleine rotation.",
      card2_num: "ISOLATION PAR STATION", card2_t: "Chaque station est indépendante", card2_d: "Chaque station fonctionne avec son propre compte, son propre personnel et ses propres données — aucun identifiant partagé, aucune visibilité entre les sites, même pour un même exploitant gérant cinq stations.",
      card3_num: "RAPPORTS", card3_t: "Chaque scan, prêt pour un audit", card3_d: "Scans de chariots, affectations de répartition et présences des chauffeurs s'exportent proprement, conçus pour les rapports qu'un audit de compagnie aérienne exige réellement.",
      card4_num: "ALERTES EN DIRECT", card4_t: "Signalé avant que ça ne devienne un retard", card4_d: "Risque de délai, seuils hydrauliques et vols non assignés apparaissent sur le tableau dès qu'un seuil est franchi."
    },
    shot: {
      h2: "Un seul écran. Chaque camion, chaque vol.",
      sub: "Ceci est un véritable tableau de répartition AeroCater, pas une maquette, en fonction sur une station réelle.",
      alt: "Tableau de répartition AeroCater montrant le personnel en service, le tableau de répartition avec les affectations de vols et le panneau d'état de la flotte",
      c1_k: "PERSONNEL EN SERVICE", c1_p: "Chaque quart, chaque chauffeur, regroupés et visibles d'un coup d'œil.",
      c2_k: "TABLEAU DE RÉPARTITION", c2_p: "Vols non assignés d'un côté, colonnes des chauffeurs de l'autre.",
      c3_k: "FLOTTE ET ALERTES", c3_p: "État des camions et alertes en direct, mis à jour en temps réel."
    },
    mobile: {
      eyebrow: "Au point de chargement",
      h2: "Les chauffeurs scannent. La répartition sait. Instantanément.",
      sub: "Aucun téléchargement d'application, aucun mot de passe séparé — juste un lien personnel et un appareil photo.",
      alt: "Application chauffeur AeroCater sur un téléphone, en train de scanner une étiquette QR de chariot, affichant une confirmation de 6 scans",
      feat1: "Pointez et scannez les étiquettes QR des chariots — aucune saisie manuelle",
      feat2: "Détection automatique des doublons et des codes-barres inconnus",
      feat3: "Saisie manuelle de secours pour les étiquettes endommagées",
      feat4: "Les scans se mettent en file localement et se synchronisent dès le retour du signal"
    },
    security: {
      h2: "Conçu pour être digne de confiance avec des opérations en direct",
      sub: "Des réponses claires sur la façon dont AeroCater est conçu et exploité, sans vagues assurances.",
      item1_h: "Données chiffrées et à accès contrôlé", item1_p: "Toutes les données sont chiffrées en transit et stockées avec une sécurité au niveau des lignes, afin que chaque utilisateur ne voie que la station et le rôle pour lesquels il est autorisé. Hébergé sur Supabase, avec une conformité SOC 2 en cours.",
      item2_h: "Identité individuelle des chauffeurs", item2_p: "Aucun identifiant partagé. Chaque scan et chaque présence est lié à une personne précise et journalisé aux fins de révision.",
      item3_h: "Construit autour du rythme opérationnel réel", item3_p: "Fenêtres de sécurité alimentaire, marges de rotation et limites de quart sont appliquées directement dans la logique de répartition, pas laissées à une feuille de calcul.",
      item4_h: "Support direct, pas une file de tickets", item4_p: "Vous joignez directement l'équipe qui construit AeroCater, pas un service de support à paliers qui lit un script."
    },
    pricing: {
      tag: "Tarifs", h3: "Adapté à votre station, pas une licence par utilisateur",
      p: "AeroCater est tarifé selon la taille de votre flotte et le nombre de vos stations, pas selon des frais fixes par utilisateur qui vous pénalisent quand votre équipe grandit. Parlez-nous de votre exploitation et nous établirons un plan adapté.",
      cta: "Obtenir un tarif"
    },
    demo: {
      h2: "Parlez à ceux qui l'ont construit.",
      p: "Pas de présentation commerciale, pas de file de support à paliers. Une démo fonctionnelle sur les données réelles d'une station, et des réponses directes sur la façon dont c'est construit.",
      cta_primary: "Réserver une démo", cta_secondary: "Poser une question"
    },
    footer: {
      tagline: "Logiciel de répartition pour la restauration à bord, conçu par des gens qui ont géré le tarmac.",
      product_h: "Produit", link_platform: "Plateforme", link_mobile: "Application mobile", link_security: "Sécurité",
      company_h: "Entreprise", link_contact: "Contact", link_pricing: "Tarifs", link_demo: "Réserver une démo",
      rights: "Tous droits réservés.", location: "Toronto, Canada"
    }
  },

  es: {
    meta: {
      title: "AeroCater — Software de despacho para catering aéreo",
      description: "AeroCater es la plataforma de despacho creada para el catering aéreo: despacho automático, trazabilidad de carritos por escaneo y una app móvil para conductores — creada por un ex despachador, no por un proveedor logístico genérico."
    },
    nav: { platform: "Plataforma", how: "Cómo funciona", security: "Seguridad", pricing: "Precios", cta: "Solicitar demo" },
    hero: {
      eyebrow: "Software de despacho para catering aéreo",
      h1: "Cada camión, cada carrito, bajo control.",
      sub: "AeroCater reemplaza la pizarra y el grupo de chat con un solo tablero de despacho construido alrededor de la mecánica real de abastecer un vuelo — no de una ruta de reparto genérica.",
      cta_primary: "Solicitar demo",
      cta_secondary: "Ver la plataforma",
      cta_sample: "Probar con datos de ejemplo"

    },
    board: { aria: "Animación de un tablero de despacho en vivo mostrando asignaciones simuladas de vuelos y carritos", live: "Feed de despacho en vivo" },
    trust_strip: {
      item1: "Cifrado en tránsito y en reposo",
      item2: "Control de acceso por fila",
      item3: "Registro individual de actividad",
      item4: "Cumplimiento de SOC 2 en curso"
    },
    origin: {
      badge: "Por qué existe AeroCater",
      h2: "Ocho años operando catering nos enseñaron exactamente dónde fallan los sistemas antiguos.",
      quote: "«El software logístico genérico no sabe qué es un elevador hidráulico de tijera, una regla de emparejamiento de fuselaje ancho, o una ventana de seguridad alimentaria de cuatro horas. Creamos AeroCater porque nos cansamos de forzar el software de otra persona para encajarlo en una industria para la que nunca fue diseñado.»",
      attrib: "— Fundador, AeroCater · ex despachador de catering aéreo"
    },
    valueprop: {
      eyebrow: "Por qué no un software logístico genérico",
      h2: "Construido alrededor de reglas que una plataforma genérica no conoce.",
      body: "Un vuelo de fuselaje ancho necesita un camión distinto al de uno de fuselaje angosto. Un carrito tiene un reloj de seguridad alimentaria desde el momento en que sale de la cocina. Un conductor no puede estar reservado en dos puertas a la vez. La lógica de despacho de AeroCater está construida alrededor de restricciones como estas, no añadida después."
    },
    how: {
      eyebrow: "Cómo funciona",
      h2: "Del horario de vuelo al avión cargado",
      step1_t: "Los vuelos se sincronizan", step1_d: "Los horarios entran automáticamente, cada uno con su requisito de catering ya adjunto.",
      step2_t: "El despacho automático asigna", step2_d: "Camiones y conductores se emparejan por turno, tiempo de traslado y carga de trabajo, sin que un despachador arme el tablero a mano.",
      step3_t: "Los conductores escanean en el punto de carga", step3_d: "Cada carrito se escanea una sola vez, directamente en el punto de carga, antes de subirlo al camión.",
      step4_t: "El despacho lo ve en vivo", step4_d: "Estado, ubicación y excepciones se actualizan en el tablero a medida que ocurren."
    },
    cap: {
      h2: "Profundidad pensada para operar una estación, no solo un camión",
      sub: "Más allá del despacho y el escaneo: las partes del trabajo que importan cuando el volumen es real.",
      card1_num: "SALUD DE LA FLOTA", card1_t: "Detectar un problema antes de que sea un retraso", card1_d: "Ciclos hidráulicos en vivo, ventanas de servicio y alertas exponen problemas antes de que un camión falle a mitad de una rotación.",
      card2_num: "AISLAMIENTO POR ESTACIÓN", card2_t: "Cada estación es independiente", card2_d: "Cada estación opera con su propia cuenta, su propio personal y sus propios datos — sin inicios de sesión compartidos, sin visibilidad entre sedes, incluso para un mismo operador que gestiona cinco estaciones.",
      card3_num: "REPORTES", card3_t: "Cada escaneo, listo para una auditoría", card3_d: "Escaneos de carritos, asignaciones de despacho y registros de conductores se exportan de forma limpia, pensados para el reporte que una auditoría aérea realmente exige.",
      card4_num: "ALERTAS EN VIVO", card4_t: "Señalado antes de convertirse en un retraso", card4_d: "Riesgo de SLA, umbrales hidráulicos y vuelos sin asignar aparecen en el tablero en el momento en que cruzan un umbral."
    },
    shot: {
      h2: "Una sola pantalla. Cada camión, cada vuelo.",
      sub: "Este es un tablero de operaciones real de AeroCater, no una maqueta, funcionando en una estación en vivo.",
      alt: "Tablero de operaciones de despachador AeroCater mostrando personal en turno, tablero de despacho con asignaciones de vuelos y panel de estado de la flota",
      c1_k: "PERSONAL EN TURNO", c1_p: "Cada turno, cada conductor, agrupados y visibles de un vistazo.",
      c2_k: "TABLERO DE DESPACHO", c2_p: "Vuelos sin asignar de un lado, columnas de conductores del otro.",
      c3_k: "FLOTA Y ALERTAS", c3_p: "Estado de camiones y alertas en vivo, actualizados en tiempo real."
    },
    mobile: {
      eyebrow: "En el punto de carga",
      h2: "Los conductores escanean. El despacho lo sabe. Al instante.",
      sub: "Sin descarga de app, sin contraseña separada — solo un enlace personal y una cámara.",
      alt: "App de conductor de AeroCater en un teléfono, escaneando una etiqueta QR de un carrito, mostrando confirmación de 6 escaneos",
      feat1: "Apunte y escanee etiquetas QR de carritos — sin escritura manual",
      feat2: "Detección automática de duplicados y códigos de barras desconocidos",
      feat3: "Entrada manual de respaldo para etiquetas dañadas",
      feat4: "Los escaneos se ponen en cola localmente y se sincronizan en cuanto vuelve la señal"
    },
    security: {
      h2: "Construido para ser confiable con operaciones en vivo",
      sub: "Respuestas directas sobre cómo se construye y opera AeroCater, sin garantías vagas.",
      item1_h: "Datos cifrados y con acceso controlado", item1_p: "Todos los datos están cifrados en tránsito y almacenados con seguridad a nivel de fila, de modo que cada usuario solo ve la estación y el rol para los que está autorizado. Alojado en Supabase, con el cumplimiento de SOC 2 en curso.",
      item2_h: "Identidad individual del conductor", item2_p: "Sin inicios de sesión compartidos. Cada escaneo y cada registro de entrada están vinculados a una persona específica y quedan registrados para su revisión.",
      item3_h: "Construido alrededor del ritmo operativo real", item3_p: "Las ventanas de seguridad alimentaria, los márgenes de rotación y los límites de turno se aplican directamente en la lógica de despacho, no se dejan a una hoja de cálculo.",
      item4_h: "Soporte directo, no una cola de tickets", item4_p: "Usted contacta directamente al equipo que construye AeroCater, no a una mesa de soporte por niveles que lee un guion."
    },
    pricing: {
      tag: "Precios", h3: "Ajustado a su estación, no una licencia por usuario",
      p: "AeroCater se cotiza según el tamaño de su flota y el número de estaciones, no con una tarifa fija por usuario que lo penalice al hacer crecer su equipo. Cuéntenos sobre su operación y ajustaremos un plan a su medida.",
      cta: "Obtener precio"
    },
    demo: {
      h2: "Hable con quienes lo construyeron.",
      p: "Sin presentación de ventas, sin cola de soporte por niveles. Una demo funcional con los datos reales de una estación, y respuestas directas sobre cómo está construido.",
      cta_primary: "Solicitar demo", cta_secondary: "Hacer una pregunta"
    },
    footer: {
      tagline: "Software de despacho para catering aéreo, construido por personas que han operado la rampa.",
      product_h: "Producto", link_platform: "Plataforma", link_mobile: "App móvil", link_security: "Seguridad",
      company_h: "Empresa", link_contact: "Contacto", link_pricing: "Precios", link_demo: "Solicitar demo",
      rights: "Todos los derechos reservados.", location: "Toronto, Canadá"
    }
  },

  ar: {
    meta: {
      title: "AeroCater — برمجية جدولة لخدمات التموين الجوي",
      description: "AeroCater هي منصة الجدولة المصممة لخدمات التموين الجوي: جدولة تلقائية، وتتبّع سلسلة عهدة العربات بالمسح الضوئي، وتطبيق جوال للسائقين — صمّمها مُجدوِل سابق، لا مزوّد خدمات لوجستية عام.",
    },
    nav: { platform: "المنصة", how: "طريقة العمل", security: "الأمان", pricing: "التسعير", cta: "احجز عرضًا توضيحيًا" },
    hero: {
      eyebrow: "برمجية جدولة لخدمات التموين الجوي",
      h1: "كل شاحنة، وكل عربة، تحت السيطرة.",
      sub: "تستبدل AeroCater السبورة البيضاء ومجموعة الدردشة بلوحة جدولة واحدة، مبنية حول آلية تموين رحلة فعلية — لا حول مسار توصيل عام.",
      cta_primary: "احجز عرضًا توضيحيًا",
      cta_secondary: "استعرض المنصة"
    },
    board: { aria: "رسم متحرك للوحة جدولة مباشرة يعرض إسنادات رحلات وعربات محاكاة", live: "بث الجدولة المباشر" },
    trust_strip: {
      item1: "مشفّرة أثناء النقل والتخزين",
      item2: "تحكم بالوصول على مستوى كل سجل",
      item3: "تسجيل الأنشطة الفردية",
      item4: "الامتثال لمعيار SOC 2 قيد التنفيذ"
    },
    origin: {
      badge: "لماذا أُنشئت AeroCater",
      h2: "ثماني سنوات من إدارة عمليات التموين علّمتنا بالضبط أين تفشل الأنظمة القديمة.",
      quote: "«البرمجيات اللوجستية العامة لا تعرف ما هي الرافعة الهيدروليكية المقصية، أو قاعدة إقران الطائرات ذات الهيكل العريض، أو نافذة السلامة الغذائية التي تمتد أربع ساعات. أنشأنا AeroCater لأننا سئمنا من تطويع برمجية صُمّمت لصناعة أخرى تمامًا لتناسب صناعتنا.»",
      attrib: "— مؤسس AeroCater · مُجدوِل تموين جوي سابق"
    },
    valueprop: {
      eyebrow: "لماذا لا نستخدم برمجية لوجستية عامة",
      h2: "مبنية حول قواعد لا تعرفها أي منصة عامة.",
      body: "تحتاج رحلة بطائرة ذات هيكل عريض إلى شاحنة مختلفة عن رحلة بطائرة ذات هيكل ضيق. تبدأ ساعة السلامة الغذائية للعربة لحظة مغادرتها المطبخ. لا يمكن حجز سائق واحد على بوابتين في آنٍ واحد. منطق الجدولة في AeroCater مبني حول قيود من هذا النوع، لا مضافًا إليه لاحقًا."
    },
    how: {
      eyebrow: "طريقة العمل",
      h2: "من جدول الرحلة إلى الطائرة المحمّلة",
      step1_t: "مزامنة الرحلات", step1_d: "تصل الجداول تلقائيًا، ومعها متطلبات التموين الخاصة بكل رحلة.",
      step2_t: "الجدولة التلقائية تُسند المهام", step2_d: "تُطابق الشاحنات والسائقون حسب الوردية ووقت القيادة وعبء العمل، دون أن يبني المُجدوِل اللوحة يدويًا.",
      step3_t: "السائقون يمسحون عند نقطة التحميل", step3_d: "تُمسح كل عربة مرة واحدة فقط، مباشرة عند نقطة التحميل، قبل تحميلها على الشاحنة.",
      step4_t: "الجدولة تظهر مباشرة", step4_d: "تتحدّث الحالة والموقع والاستثناءات على اللوحة لحظة حدوثها."
    },
    cap: {
      h2: "عمق مصمّم لإدارة محطة كاملة، لا شاحنة واحدة فقط",
      sub: "إلى جانب الجدولة والمسح: الجوانب التي تهمّ فعلًا عندما يصبح الحجم حقيقيًا.",
      card1_num: "سلامة الأسطول", card1_t: "اكتشف المشكلة قبل أن تصبح تأخيرًا", card1_d: "دورات هيدروليكية مباشرة، ونوافذ صيانة، وتنبيهات تكشف المشاكل قبل أن تتعطل الشاحنة في منتصف الدورة.",
      card2_num: "عزل المحطات", card2_t: "كل محطة مستقلة بذاتها", card2_d: "تعمل كل محطة بحسابها الخاص، وطاقمها الخاص، وبياناتها الخاصة — دون حسابات دخول مشتركة، ودون أي رؤية مشتركة بين المواقع، حتى لمشغّل واحد يدير خمس محطات.",
      card3_num: "التقارير", card3_t: "كل مسح، جاهز للتدقيق", card3_d: "تُصدَّر عمليات مسح العربات، وإسنادات الجدولة، وتسجيلات دخول السائقين بشكل منظم، مصمّمة للتقارير التي يطلبها تدقيق شركات الطيران فعليًا.",
      card4_num: "تنبيهات مباشرة", card4_t: "تُرصد قبل أن تصبح تأخيرًا", card4_d: "تظهر مخاطر اتفاقية مستوى الخدمة، والعتبات الهيدروليكية، والرحلات غير المُسندة على اللوحة لحظة تجاوزها الحد المسموح."
    },
    shot: {
      h2: "شاشة واحدة. كل شاحنة، وكل رحلة.",
      sub: "هذه لوحة عمليات حقيقية من AeroCater، لا نموذج تجريبي، تعمل فعليًا في محطة حية.",
      alt: "لوحة عمليات مُجدوِل AeroCater تعرض الطاقم المناوب، ولوحة الجدولة مع إسنادات الرحلات، ولوحة حالة الأسطول",
      c1_k: "الطاقم المناوب", c1_p: "كل وردية، وكل سائق، مجمّعون ومرئيون بلمحة واحدة.",
      c2_k: "لوحة الجدولة", c2_p: "الرحلات غير المُسندة على جانب، وأعمدة السائقين على الجانب الآخر.",
      c3_k: "الأسطول والتنبيهات", c3_p: "حالة الشاحنات والتنبيهات المباشرة، محدَّثة في الوقت الفعلي."
    },
    mobile: {
      eyebrow: "عند نقطة التحميل",
      h2: "السائقون يمسحون. الجدولة تعرف. فورًا.",
      sub: "لا تنزيل من متجر تطبيقات، ولا كلمة مرور منفصلة — فقط رابط شخصي وكاميرا.",
      alt: "تطبيق سائق AeroCater على هاتف، أثناء مسح ملصق رمز استجابة سريعة لعربة، يعرض تأكيد مسح 6 عربات",
      feat1: "وجّه وامسح ملصقات رمز الاستجابة السريعة للعربات — دون إدخال يدوي",
      feat2: "كشف تلقائي للتكرار وللرموز الشريطية غير المعروفة",
      feat3: "إدخال يدوي احتياطي للملصقات التالفة",
      feat4: "تُخزَّن عمليات المسح محليًا وتتزامن فور عودة الإشارة"
    },
    security: {
      h2: "مصمّمة لتكون موضع ثقة مع العمليات الحية",
      sub: "إجابات مباشرة عن كيفية بناء AeroCater وتشغيلها، دون طمأنات غامضة.",
      item1_h: "بيانات مشفّرة وبوصول مُتحكَّم به", item1_p: "جميع البيانات مشفّرة أثناء النقل ومخزَّنة بأمان على مستوى كل سجل، بحيث لا يرى كل مستخدم سوى المحطة والدور المصرَّح له بهما. مستضافة على Supabase، والامتثال لمعيار SOC 2 قيد التنفيذ.",
      item2_h: "هوية فردية لكل سائق", item2_p: "لا حسابات دخول مشتركة. كل عملية مسح وكل تسجيل حضور مرتبطان بشخص محدد ومُسجَّلان للمراجعة.",
      item3_h: "مبنية حول التوقيت التشغيلي الفعلي", item3_p: "تُطبَّق نوافذ السلامة الغذائية، وهوامش الدوران، وحدود الورديات مباشرة داخل منطق الجدولة نفسه، لا تُترك لجدول بيانات.",
      item4_h: "دعم مباشر، لا طابور تذاكر", item4_p: "تتواصل مباشرة مع الفريق الذي يبني AeroCater، لا مع مكتب دعم متعدد المستويات يقرأ من نص جاهز."
    },
    pricing: {
      tag: "التسعير", h3: "مصمَّم بحسب حجم محطتك، لا ترخيص لكل مستخدم",
      p: "يُحدَّد سعر AeroCater بحسب حجم أسطولك وعدد محطاتك، لا برسم ثابت لكل مستخدم يعاقبك عند توسيع فريقك. أخبرنا عن عملياتك وسنحدّد خطة تناسبها.",
      cta: "احصل على عرض سعر"
    },
    demo: {
      h2: "تحدّث مع من بنوها.",
      p: "دون عرض تسويقي، ودون طابور دعم متعدد المستويات. عرض توضيحي فعلي على بيانات محطة حقيقية، وإجابات مباشرة عن طريقة بنائها.",
      cta_primary: "احجز عرضًا توضيحيًا", cta_secondary: "اطرح سؤالًا"
    },
    footer: {
      tagline: "برمجية جدولة لخدمات التموين الجوي، صمّمها أشخاص أداروا المدرج بأنفسهم.",
      product_h: "المنتج", link_platform: "المنصة", link_mobile: "تطبيق الجوال", link_security: "الأمان",
      company_h: "الشركة", link_contact: "تواصل معنا", link_pricing: "التسعير", link_demo: "احجز عرضًا توضيحيًا",
      rights: "جميع الحقوق محفوظة.", location: "تورونتو، كندا"
    }
  },

  zh: {
    meta: {
      title: "AeroCater — 航空配餐调度软件",
      description: "AeroCater 是专为航空配餐运营打造的调度平台：自动调度、餐车全程扫码溯源、司机移动应用——由一位曾亲自做过调度的人打造，而非通用物流供应商。"
    },
    nav: { platform: "平台", how: "工作流程", security: "安全", pricing: "价格", cta: "预约演示" },
    hero: {
      eyebrow: "航空配餐调度软件",
      h1: "每辆卡车，每台餐车，尽在掌握。",
      sub: "AeroCater 用一块调度看板取代白板和聊天群组——这块看板是围绕配餐航班的实际运作方式设计的，而不是一条通用配送路线。",
      cta_primary: "预约演示",
      cta_secondary: "查看平台"
    },
    board: { aria: "实时调度看板动画，展示模拟的航班与餐车分配情况", live: "实时调度信息流" },
    trust_strip: {
      item1: "传输与静态数据均加密",
      item2: "行级访问控制",
      item3: "个人操作记录",
      item4: "SOC 2 合规认证进行中"
    },
    origin: {
      badge: "AeroCater 的由来",
      h2: "八年的配餐运营经验，让我们清楚知道旧系统究竟在哪里失灵。",
      quote: "「通用物流软件根本不了解什么是液压剪式升降平台、宽体机配对规则,或者长达四小时的食品安全窗口期。我们打造 AeroCater,是因为受够了把别人为其他行业设计的软件硬套在这个行业上。」",
      attrib: "— AeroCater 创始人 · 前航空配餐调度员"
    },
    valueprop: {
      eyebrow: "为什么不用通用物流软件",
      h2: "围绕通用平台根本不了解的规则而构建。",
      body: "宽体机航班需要的卡车与窄体机不同。餐车一离开厨房,食品安全的倒计时就开始了。同一名司机不能被同时安排到两个登机口。AeroCater 的调度逻辑正是围绕这些约束条件构建的,而不是事后勉强拼凑上去的。"
    },
    how: {
      eyebrow: "工作流程",
      h2: "从航班时刻表到装机完成",
      step1_t: "航班自动同步", step1_d: "航班时刻表自动同步接入,并已附带各自的配餐需求。",
      step2_t: "自动调度完成分配", step2_d: "系统根据班次、行驶时间和工作负荷自动匹配卡车与司机,无需调度员手动排班。",
      step3_t: "司机在装车点扫码", step3_d: "每台餐车只扫码一次——就在装车点,装上卡车之前完成,全程用手机操作。",
      step4_t: "调度实时可见", step4_d: "状态、位置与异常情况会在看板上实时更新。"
    },
    cap: {
      h2: "不只是管好一辆卡车,更是管好整个站点",
      sub: "调度与扫码之外:业务量真正上来之后才会显现其重要性的那些环节。",
      card1_num: "车队健康", card1_t: "在问题变成延误之前发现它", card1_d: "实时液压循环次数、保养周期与预警,能在卡车中途出故障之前就发出提示。",
      card2_num: "站点隔离", card2_t: "各站点相互独立", card2_d: "每个站点使用各自独立的账户、员工与数据——不共享登录信息,站点之间也没有任何数据可见性,即便是同一运营方同时管理五个站点也是如此。",
      card3_num: "报表导出", card3_t: "每一次扫描,随时可供审计", card3_d: "餐车扫描、调度分配与司机签到记录均可清晰导出,满足航空公司审计实际要求的报表格式。",
      card4_num: "实时预警", card4_t: "在变成延误之前就被标记出来", card4_d: "服务水平风险、液压阈值与未分配航班一旦超出阈值,立即在看板上标出。"
    },
    shot: {
      h2: "一块屏幕,看清每辆卡车、每个航班。",
      sub: "这是一块真实运行中站点的 AeroCater 调度看板,不是效果图。",
      alt: "AeroCater 调度员操作看板,显示当班人员、含航班分配的调度看板,以及车队状态面板",
      c1_k: "当班人员", c1_p: "每个班次、每位司机,分组显示,一目了然。",
      c2_k: "调度看板", c2_p: "一侧是未分配航班,另一侧是各司机对应的任务列。",
      c3_k: "车队与预警", c3_p: "卡车状态与实时预警,随时更新。"
    },
    mobile: {
      eyebrow: "在装车点",
      h2: "司机扫码,调度即知,毫秒必达。",
      sub: "无需下载应用商店应用,无需单独设置密码——只需一个个人链接和一部手机的摄像头。",
      alt: "AeroCater 司机应用在手机上运行,正在扫描一张餐车二维码标签,显示已扫描 6 台的确认信息",
      feat1: "对准即可扫描餐车二维码标签——无需手动录入",
      feat2: "自动识别重复扫描与未知条码",
      feat3: "标签损坏时可手动输入作为备用方案",
      feat4: "扫描记录先在本地排队,信号恢复后立即同步"
    },
    security: {
      h2: "为承载实时运营而设计,值得信赖",
      sub: "关于 AeroCater 如何构建与运行,直接给出明确答案,不作模糊的安全承诺。",
      item1_h: "数据加密,访问受控", item1_p: "所有数据在传输过程中均加密,存储时采用行级安全策略,确保每位用户只能看到其被授权的站点与角色范围内的数据。托管于 Supabase,SOC 2 合规工作正在进行中。",
      item2_h: "司机身份精确到个人", item2_p: "不使用共享账号。每一次扫描、每一次签到都对应具体的个人,并被记录以供审查。",
      item3_h: "围绕真实运营时序构建", item3_p: "食品安全窗口期、周转缓冲时间与班次边界都直接写入调度逻辑本身执行,而不是依赖一张表格来把关。",
      item4_h: "直接对接支持团队,而非工单排队", item4_p: "您可以直接联系到构建 AeroCater 的团队本身,而不是照本宣科的分级客服。"
    },
    pricing: {
      tag: "价格", h3: "按站点规模定价,而非按席位收费",
      p: "AeroCater 的定价依据是您的车队规模与站点数量,而不是按用户数收取固定费用、让团队扩张反而增加负担。告诉我们您的运营情况,我们会据此制定合适的方案。",
      cta: "获取报价"
    },
    demo: {
      h2: "直接和打造它的人聊聊。",
      p: "没有销售话术,没有分级支持排队。基于真实站点数据的实机演示,以及关于系统构建方式的直接答复。",
      cta_primary: "预约演示", cta_secondary: "咨询问题"
    },
    footer: {
      tagline: "航空配餐调度软件,由亲自管理过停机坪的人打造。",
      product_h: "产品", link_platform: "平台", link_mobile: "移动应用", link_security: "安全",
      company_h: "公司", link_contact: "联系我们", link_pricing: "价格", link_demo: "预约演示",
      rights: "版权所有。", location: "加拿大多伦多"
    }
  }

};

const RTL_LANGS = new Set(["ar"]);
const SUPPORTED = Object.keys(translations);
const STORAGE_KEY = "aerocater-lang";

function resolveKey(dict, key) {
  return key.split(".").reduce((node, part) => (node && node[part] !== undefined ? node[part] : undefined), dict);
}

function detectInitialLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED.includes(saved)) return saved;
  const browserLangs = navigator.languages || [navigator.language || "en"];
  for (const bl of browserLangs) {
    const short = bl.slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(short)) return short;
  }
  return "en";
}

function applyLang(lang) {
  if (!SUPPORTED.includes(lang)) lang = "en";
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = resolveKey(dict, el.getAttribute("data-i18n"));
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    el.getAttribute("data-i18n-attr").split(";").forEach(pair => {
      const [attr, key] = pair.split(":").map(s => s.trim());
      const value = resolveKey(dict, key);
      if (attr && value !== undefined) el.setAttribute(attr, value);
    });
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.has(lang) ? "rtl" : "ltr";

  const picker = document.getElementById("langSwitch");
  if (picker) picker.value = lang;

  localStorage.setItem(STORAGE_KEY, lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const initial = detectInitialLang();
  applyLang(initial);

  const picker = document.getElementById("langSwitch");
  if (picker) {
    picker.addEventListener("change", (e) => applyLang(e.target.value));
  }
});
