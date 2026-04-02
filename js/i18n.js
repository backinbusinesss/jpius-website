/* ============================================
   J+S — INTERNATIONALIZATION (IT / EN)
   data-i18n="key"      → textContent
   data-i18n-html="key" → innerHTML (for tags inside)
   ============================================ */

const TRANSLATIONS = {

  it: {
    /* ---- NAV ---- */
    'nav.home':           'Home',
    'nav.architecture':   'Architettura',
    'nav.hydraulics':     'Idraulica',
    'nav.infrastructure': 'Infrastrutture',
    'nav.about':          'Chi Siamo',
    'nav.contact':        'Contatti',

    /* ---- HOME · HERO ---- */
    'home.hero.tag':      'Studio di Progettazione',
    'home.hero.sub':      'Architettura · Idraulica · Infrastrutture',
    'home.hero.cta1':     'Scopri chi siamo',
    'home.hero.cta2':     'Contattaci',

    /* ---- HOME · SERVICES ---- */
    'home.services.tag':  'Business Units',
    'home.services.title':'Le nostre <em>competenze</em>',
    'home.services.sub':  'Tre aree di eccellenza per progetti integrati e sostenibili',

    'home.s1.title': 'Architettura',
    'home.s1.desc':  'Progettazione architettonica contemporanea che unisce estetica, funzionalità e sostenibilità ambientale.',
    'home.s1.link':  'Esplora',
    'home.s2.title': 'Idraulica',
    'home.s2.desc':  'Soluzioni idrauliche avanzate per la gestione sostenibile delle risorse idriche e la mitigazione del rischio.',
    'home.s2.link':  'Esplora',
    'home.s3.title': 'Infrastrutture',
    'home.s3.desc':  'Ingegneria delle infrastrutture civili: strade, ponti, reti tecnologiche e opere pubbliche integrate.',
    'home.s3.link':  'Esplora',

    /* ---- HOME · ABOUT STRIP ---- */
    'home.about.tag':   'Chi Siamo',
    'home.about.title': 'Un team <em>multidisciplinare</em><br/>al servizio del territorio',
    'home.about.desc':  'J+S nasce dalla sinergia tra professionalità complementari: architetti, ingegneri idraulici e specialisti in infrastrutture che lavorano insieme per offrire soluzioni progettuali complete e innovative.',
    'home.about.cta':   'Scopri il team',
    'home.stat1.label': 'Progetti completati',
    'home.stat2.label': 'Anni di esperienza',
    'home.stat3.label': 'Business units',

    /* ---- HOME · JOIN ---- */
    'home.join.tag':   'Join Us',
    'home.join.title': 'Entra a far parte<br/>del <em>nostro team</em>',
    'home.join.desc':  'Siamo sempre alla ricerca di talenti appassionati. Se hai competenze in architettura, ingegneria o discipline correlate, vogliamo conoscerti.',
    'home.join.cta':   'Invia la tua candidatura',
    'home.join.c1':    'Architetti',
    'home.join.c2':    'Ingegneri',
    'home.join.c3':    'Specialisti',

    /* ---- FOOTER ---- */
    'footer.tagline':    'Design with a Plus.<br/>Architettura · Idraulica · Infrastrutture',
    'footer.col1.title': 'Servizi',
    'footer.col2.title': 'Azienda',
    'footer.col3.title': 'Legal',
    'footer.privacy':    'Privacy Policy',
    'footer.cookie':     'Cookie Policy',
    'footer.whistle':    'Whistleblowing',
    'footer.governance': 'Governance',
    'footer.copy':       '© 2024 J+S Studio. Tutti i diritti riservati.',

    /* ---- ARCHITECTURE PAGE ---- */
    'arch.hero.tag':   'Business Unit 01',
    'arch.hero.title': 'Architettura',
    'arch.hero.desc':  'Progettazione architettonica contemporanea che unisce estetica, funzionalità e sostenibilità ambientale. Ogni progetto nasce da un dialogo profondo con il contesto e le esigenze del cliente.',
    'arch.s1.tag':     'Il nostro approccio',
    'arch.s1.title':   'Architettura come <em>sintesi</em> tra forma e funzione',
    'arch.s1.p1':      'Il nostro studio affronta la progettazione architettonica con un metodo che integra analisi del contesto, ascolto del cliente e ricerca formale. Il risultato sono edifici che rispondono alle esigenze pratiche senza rinunciare alla qualità dello spazio vissuto.',
    'arch.s1.p2':      'Lavoriamo su scala residenziale, commerciale e pubblica, sempre con la stessa cura per i dettagli costruttivi e per la sostenibilità ambientale.',
    'arch.s1.cta':     'Richiedi un preventivo',
    'arch.serv.tag':   'Servizi',
    'arch.serv.title': 'Cosa <em>offriamo</em>',
    'arch.f1.title': 'Progettazione residenziale',
    'arch.f1.desc':  'Case unifamiliari, condomini e complessi residenziali progettati con attenzione alla qualità abitativa e all\'efficienza energetica.',
    'arch.f2.title': 'Architettura commerciale',
    'arch.f2.desc':  'Uffici, showroom, strutture ricettive e spazi retail che comunicano l\'identità del brand attraverso la qualità spaziale.',
    'arch.f3.title': 'Opere pubbliche',
    'arch.f3.desc':  'Scuole, biblioteche, centri civici e spazi pubblici che valorizzano il territorio e migliorano la qualità della vita urbana.',
    'arch.f4.title': 'Interior & Allestimenti',
    'arch.f4.desc':  'Progettazione degli interni coordinata con l\'architettura, dalla scelta dei materiali all\'arredo su misura.',
    'arch.f5.title': 'Restauro e recupero',
    'arch.f5.desc':  'Interventi su edifici storici e recupero del patrimonio edilizio con metodi rispettosi della preesistenza.',
    'arch.f6.title': 'Consulenza urbanistica',
    'arch.f6.desc':  'Supporto nelle pratiche urbanistiche, varianti, permessi di costruire e rapporti con le amministrazioni locali.',

    /* ---- HYDRAULICS PAGE ---- */
    'hydr.hero.tag':   'Business Unit 02',
    'hydr.hero.title': 'Idraulica',
    'hydr.hero.desc':  'Soluzioni idrauliche avanzate per la gestione sostenibile delle risorse idriche, la mitigazione del rischio alluvionale e la progettazione di reti idriche efficienti.',
    'hydr.s1.tag':     'Idraulica applicata',
    'hydr.s1.title':   'Gestire l\'acqua con <em>precisione</em> e visione',
    'hydr.s1.p1':      'La progettazione idraulica richiede competenze specialistiche unite a una visione sistemica del territorio. Il nostro team combina modellazione numerica avanzata, conoscenza normativa e sensibilità ambientale per affrontare le sfide idriche del presente e del futuro.',
    'hydr.s1.p2':      'Operiamo su scala locale e regionale, dalla singola opera idraulica alla pianificazione di bacino, con un approccio integrato che considera sia gli aspetti tecnici che quelli ecologici.',
    'hydr.s1.cta':     'Richiedi consulenza',
    'hydr.serv.tag':   'Servizi',
    'hydr.serv.title': 'Competenze <em>idrauliche</em>',
    'hydr.f1.title': 'Studi idrologici',
    'hydr.f1.desc':  'Analisi delle precipitazioni, calcolo delle portate di piena, modellazione dei bacini idrografici e valutazione del rischio idraulico.',
    'hydr.f2.title': 'Progettazione reti idriche',
    'hydr.f2.desc':  'Acquedotti, fognature, reti di irrigazione e sistemi di drenaggio urbano sostenibile progettati con software specializzati.',
    'hydr.f3.title': 'Opere di difesa idraulica',
    'hydr.f3.desc':  'Argini, casse di espansione, briglie e opere di ritenzione per la mitigazione del rischio alluvionale.',
    'hydr.f4.title': 'Modellazione numerica',
    'hydr.f4.desc':  'Simulazioni 1D e 2D del moto delle acque, con software come HEC-RAS, MIKE FLOOD e strumenti GIS avanzati.',
    'hydr.f5.title': 'VIA e VAS',
    'hydr.f5.desc':  'Supporto nelle procedure di Valutazione di Impatto Ambientale e Valutazione Ambientale Strategica per opere idrauliche.',
    'hydr.f6.title': 'Riqualificazione fluviale',
    'hydr.f6.desc':  'Interventi di rinaturalizzazione degli alvei, recupero degli habitat ripari e miglioramento dello stato ecologico dei corsi d\'acqua.',

    /* ---- INFRASTRUCTURE PAGE ---- */
    'infra.hero.tag':   'Business Unit 03',
    'infra.hero.title': 'Infrastrutture',
    'infra.hero.desc':  'Ingegneria delle infrastrutture civili: strade, ponti, gallerie, reti tecnologiche e opere pubbliche progettate con rigore tecnico e attenzione al contesto territoriale.',
    'infra.s1.tag':     'Infrastrutture civili',
    'infra.s1.title':   'Connettere il territorio con <em>intelligenza</em>',
    'infra.s1.p1':      'Le infrastrutture sono la spina dorsale del territorio: connettono persone, merci e servizi, e determinano la qualità della vita di intere comunità. Il nostro approccio integra competenze di ingegneria civile, geotecnica e pianificazione territoriale per progettare opere durature e sostenibili.',
    'infra.s1.p2':      'Dalla fattibilità alla direzione lavori, seguiamo ogni fase del processo con rigore metodologico e attenzione alla sicurezza.',
    'infra.s1.cta':     'Parliamo del tuo progetto',
    'infra.serv.tag':   'Servizi',
    'infra.serv.title': 'Aree di <em>intervento</em>',
    'infra.f1.title': 'Viabilità e strade',
    'infra.f1.desc':  'Progettazione di strade comunali, provinciali e statali, parcheggi, rotatorie e sistemi di traffico urbano.',
    'infra.f2.title': 'Ponti e viadotti',
    'infra.f2.desc':  'Strutture di attraversamento in calcestruzzo e acciaio, dal dimensionamento strutturale ai dettagli costruttivi.',
    'infra.f3.title': 'Reti tecnologiche',
    'infra.f3.desc':  'Progettazione di reti gas, elettriche, fognarie e idriche integrate nel contesto infrastrutturale urbano ed extraurbano.',
    'infra.f4.title': 'Geotecnica',
    'infra.f4.desc':  'Indagini del sottosuolo, fondazioni speciali, consolidamenti e opere di sostegno per terreni complessi.',
    'infra.f5.title': 'Direzione Lavori',
    'infra.f5.desc':  'Supervisione tecnica e gestione del cantiere per garantire qualità, sicurezza e rispetto dei tempi.',
    'infra.f6.title': 'Collaudi e verifiche',
    'infra.f6.desc':  'Collaudi statici e funzionali, verifiche di sicurezza e reportistica per enti pubblici e privati.',

    /* ---- ABOUT PAGE ---- */
    'about.hero.tag':   'Chi Siamo',
    'about.hero.title': 'About Us',
    'about.hero.desc':  'Un team multidisciplinare di professionisti uniti dalla passione per il progetto e dall\'impegno verso la qualità, la sostenibilità e l\'innovazione.',
    'about.s1.tag':     'La nostra storia',
    'about.s1.title':   'Vent\'anni di <em>progettazione integrata</em>',
    'about.s1.p1':      'J+S nasce dall\'incontro di professionalità complementari. Nel corso di oltre vent\'anni abbiamo costruito un modello di studio che unisce architettura, ingegneria idraulica e progettazione infrastrutturale in un\'unica realtà coerente e sinergica.',
    'about.s1.p2':      'Oggi il team conta specialisti di diverse discipline che collaborano su ogni progetto, garantendo una visione integrata che riduce i conflitti progettuali e ottimizza i risultati per il committente.',
    'about.s1.p3':      'La nostra forza è la capacità di affrontare la complessità: progetti che richiedono competenze trasversali trovano in J+S un interlocutore unico e affidabile.',
    'about.stat1':      'Progetti',
    'about.stat2':      'Anni',
    'about.quote':      '"Il progetto di qualità nasce dalla collaborazione, dalla curiosità e dal rispetto del contesto in cui si opera."',
    'about.val.tag':    'Valori',
    'about.val.title':  'Cosa ci <em>guida</em>',
    'about.v1.title': 'Qualità senza compromessi',
    'about.v1.desc':  'Ogni progetto riceve la stessa cura e attenzione, indipendentemente dalla scala o dal budget. La qualità non è un optional, è il nostro standard.',
    'about.v2.title': 'Sostenibilità ambientale',
    'about.v2.desc':  'Progettiamo con consapevolezza dell\'impatto ambientale. Ogni scelta costruttiva e tecnica tiene conto della sostenibilità nel tempo.',
    'about.v3.title': 'Innovazione applicata',
    'about.v3.desc':  'Adottiamo strumenti e metodologie aggiornate — BIM, modellazione numerica, GIS — per garantire precisione e coordinamento.',
    'about.v4.title': 'Ascolto e dialogo',
    'about.v4.desc':  'Il progetto migliore nasce da una comunicazione aperta con il cliente. Ascoltiamo, traduciamo, proponiamo e condividiamo ogni decisione.',
    'about.team.tag':   'Il Team',
    'about.team.title': 'Le <em>persone</em> di J+S',
    'about.team.sub':   'Professionisti con competenze diverse, uniti dalla passione per il progetto',
    'about.t1.name': 'J. — Founder',
    'about.t1.role': 'Architetto',
    'about.t1.desc': 'Responsabile della direzione creativa e della progettazione architettonica. Oltre 20 anni di esperienza su scala residenziale e pubblica.',
    'about.t2.name': 'S. — Co-founder',
    'about.t2.role': 'Ingegnere Idraulico',
    'about.t2.desc': 'Specialista in modellazione idrologica e gestione delle acque. Coordina i progetti della business unit Hydraulics.',
    'about.t3.name': 'Il nostro team',
    'about.t3.role': 'Specialisti & Collaboratori',
    'about.t3.desc': 'Un gruppo di ingegneri, architetti e tecnici che collaborano in modo flessibile e coordinato su ogni commessa.',
    'about.join.cta': 'Unisciti al team',

    /* ---- CONTACT PAGE ---- */
    'contact.hero.tag':   'Contatti',
    'contact.hero.title': 'Contattaci',
    'contact.hero.desc':  'Siamo a disposizione per rispondere alle vostre domande e raccogliere le vostre richieste di progetto.',
    'contact.info.tag':   'Dove siamo',
    'contact.info.title': 'Parliamo del<br/><em>vostro progetto</em>',
    'contact.info.desc':  'Contattaci per un primo incontro conoscitivo senza impegno. Ogni progetto inizia con un\'idea: raccontacela.',
    'contact.addr.label': 'Sede',
    'contact.addr.val':   'Via esempio 1, 00000 Città (XX), Italia',
    'contact.phone.label':'Telefono',
    'contact.email.label':'Email',
    'contact.hours.label':'Orari',
    'contact.hours.val':  'Lun – Ven: 9:00 – 18:00',
    'contact.form.title': 'Inviaci un messaggio',
    'contact.form.name':  'Nome *',
    'contact.form.email': 'Email *',
    'contact.form.subj':  'Oggetto',
    'contact.form.msg':   'Messaggio *',
    'contact.form.submit':'Invia messaggio',
    'contact.form.note':  'Risponderemo entro 24 ore lavorative.',
    'contact.form.success':'Messaggio inviato! Ti risponderemo al più presto.',
    'contact.opt0': 'Seleziona un argomento',
    'contact.opt1': 'Architecture — Progettazione architettonica',
    'contact.opt2': 'Hydraulics — Progettazione idraulica',
    'contact.opt3': 'Infrastructure — Infrastrutture civili',
    'contact.opt4': 'Join Us — Candidatura',
    'contact.opt5': 'Altro',
    'contact.name.ph':  'Mario Rossi',
    'contact.email.ph': 'mario@email.it',
    'contact.msg.ph':   'Descrivi brevemente il tuo progetto o la tua richiesta...',
  },

  // ─────────────────────────────────────────
  en: {
    /* ---- NAV ---- */
    'nav.home':           'Home',
    'nav.architecture':   'Architecture',
    'nav.hydraulics':     'Hydraulics',
    'nav.infrastructure': 'Infrastructure',
    'nav.about':          'About Us',
    'nav.contact':        'Contact',

    /* ---- HOME · HERO ---- */
    'home.hero.tag':  'Design Studio',
    'home.hero.sub':  'Architecture · Hydraulics · Infrastructure',
    'home.hero.cta1': 'Discover who we are',
    'home.hero.cta2': 'Get in touch',

    /* ---- HOME · SERVICES ---- */
    'home.services.tag':  'Business Units',
    'home.services.title':'Our <em>expertise</em>',
    'home.services.sub':  'Three areas of excellence for integrated and sustainable projects',

    'home.s1.title': 'Architecture',
    'home.s1.desc':  'Contemporary architectural design that combines aesthetics, functionality and environmental sustainability.',
    'home.s1.link':  'Explore',
    'home.s2.title': 'Hydraulics',
    'home.s2.desc':  'Advanced hydraulic solutions for sustainable water resource management and risk mitigation.',
    'home.s2.link':  'Explore',
    'home.s3.title': 'Infrastructure',
    'home.s3.desc':  'Civil infrastructure engineering: roads, bridges, technological networks and integrated public works.',
    'home.s3.link':  'Explore',

    /* ---- HOME · ABOUT STRIP ---- */
    'home.about.tag':   'About Us',
    'home.about.title': 'A <em>multidisciplinary</em> team<br/>serving the territory',
    'home.about.desc':  'J+S is born from the synergy of complementary professionals: architects, hydraulic engineers and infrastructure specialists working together to deliver complete and innovative design solutions.',
    'home.about.cta':   'Meet the team',
    'home.stat1.label': 'Completed projects',
    'home.stat2.label': 'Years of experience',
    'home.stat3.label': 'Business units',

    /* ---- HOME · JOIN ---- */
    'home.join.tag':   'Join Us',
    'home.join.title': 'Join our<br/><em>team</em>',
    'home.join.desc':  'We are always looking for passionate talents. If you have skills in architecture, engineering or related disciplines, we want to meet you.',
    'home.join.cta':   'Send your application',
    'home.join.c1':    'Architects',
    'home.join.c2':    'Engineers',
    'home.join.c3':    'Specialists',

    /* ---- FOOTER ---- */
    'footer.tagline':    'Design with a Plus.<br/>Architecture · Hydraulics · Infrastructure',
    'footer.col1.title': 'Services',
    'footer.col2.title': 'Company',
    'footer.col3.title': 'Legal',
    'footer.privacy':    'Privacy Policy',
    'footer.cookie':     'Cookie Policy',
    'footer.whistle':    'Whistleblowing',
    'footer.governance': 'Governance',
    'footer.copy':       '© 2024 J+S Studio. All rights reserved.',

    /* ---- ARCHITECTURE PAGE ---- */
    'arch.hero.tag':   'Business Unit 01',
    'arch.hero.title': 'Architecture',
    'arch.hero.desc':  'Contemporary architectural design that combines aesthetics, functionality and environmental sustainability. Every project begins with a deep dialogue with the context and the client\'s needs.',
    'arch.s1.tag':     'Our approach',
    'arch.s1.title':   'Architecture as a <em>synthesis</em> between form and function',
    'arch.s1.p1':      'Our studio approaches architectural design with a method that integrates context analysis, client listening and formal research. The result is buildings that meet practical needs without sacrificing the quality of the lived space.',
    'arch.s1.p2':      'We work on residential, commercial and public scales, always with the same care for constructive details and environmental sustainability.',
    'arch.s1.cta':     'Request a quote',
    'arch.serv.tag':   'Services',
    'arch.serv.title': 'What we <em>offer</em>',
    'arch.f1.title': 'Residential design',
    'arch.f1.desc':  'Single-family homes, condominiums and residential complexes designed with attention to living quality and energy efficiency.',
    'arch.f2.title': 'Commercial architecture',
    'arch.f2.desc':  'Offices, showrooms, hospitality facilities and retail spaces that communicate brand identity through spatial quality.',
    'arch.f3.title': 'Public works',
    'arch.f3.desc':  'Schools, libraries, civic centres and public spaces that enhance the territory and improve the quality of urban life.',
    'arch.f4.title': 'Interior & Fit-out',
    'arch.f4.desc':  'Interior design coordinated with the architecture, from material selection to bespoke furniture.',
    'arch.f5.title': 'Restoration & refurbishment',
    'arch.f5.desc':  'Interventions on historic buildings and recovery of the built heritage using methods respectful of the existing.',
    'arch.f6.title': 'Urban planning consultancy',
    'arch.f6.desc':  'Support with planning procedures, variances, building permits and relations with local authorities.',

    /* ---- HYDRAULICS PAGE ---- */
    'hydr.hero.tag':   'Business Unit 02',
    'hydr.hero.title': 'Hydraulics',
    'hydr.hero.desc':  'Advanced hydraulic solutions for sustainable water resource management, flood risk mitigation and the design of efficient water networks.',
    'hydr.s1.tag':     'Applied hydraulics',
    'hydr.s1.title':   'Managing water with <em>precision</em> and vision',
    'hydr.s1.p1':      'Hydraulic design requires specialist expertise combined with a systemic vision of the territory. Our team combines advanced numerical modelling, regulatory knowledge and environmental sensitivity to address the water challenges of the present and future.',
    'hydr.s1.p2':      'We operate at local and regional scale, from individual hydraulic works to catchment planning, with an integrated approach that considers both technical and ecological aspects.',
    'hydr.s1.cta':     'Request a consultation',
    'hydr.serv.tag':   'Services',
    'hydr.serv.title': 'Hydraulic <em>expertise</em>',
    'hydr.f1.title': 'Hydrological studies',
    'hydr.f1.desc':  'Rainfall analysis, flood flow calculation, catchment modelling and hydraulic risk assessment.',
    'hydr.f2.title': 'Water network design',
    'hydr.f2.desc':  'Aqueducts, sewers, irrigation networks and sustainable urban drainage systems designed with specialist software.',
    'hydr.f3.title': 'Flood defence works',
    'hydr.f3.desc':  'Embankments, detention basins, check dams and retention works for flood risk mitigation.',
    'hydr.f4.title': 'Numerical modelling',
    'hydr.f4.desc':  '1D and 2D water flow simulations using software such as HEC-RAS, MIKE FLOOD and advanced GIS tools.',
    'hydr.f5.title': 'EIA and SEA',
    'hydr.f5.desc':  'Support for Environmental Impact Assessment and Strategic Environmental Assessment procedures for hydraulic works.',
    'hydr.f6.title': 'River restoration',
    'hydr.f6.desc':  'Re-naturalisation of river beds, recovery of riparian habitats and improvement of the ecological status of watercourses.',

    /* ---- INFRASTRUCTURE PAGE ---- */
    'infra.hero.tag':   'Business Unit 03',
    'infra.hero.title': 'Infrastructure',
    'infra.hero.desc':  'Civil infrastructure engineering: roads, bridges, tunnels, technological networks and public works designed with technical rigour and attention to the territorial context.',
    'infra.s1.tag':     'Civil infrastructure',
    'infra.s1.title':   'Connecting the territory with <em>intelligence</em>',
    'infra.s1.p1':      'Infrastructure is the backbone of the territory: it connects people, goods and services, and determines the quality of life for entire communities. Our approach integrates civil engineering, geotechnical and territorial planning expertise to design durable and sustainable works.',
    'infra.s1.p2':      'From feasibility to construction management, we follow every phase of the process with methodological rigour and attention to safety.',
    'infra.s1.cta':     'Talk about your project',
    'infra.serv.tag':   'Services',
    'infra.serv.title': 'Areas of <em>intervention</em>',
    'infra.f1.title': 'Roads and highways',
    'infra.f1.desc':  'Design of municipal, provincial and state roads, car parks, roundabouts and urban traffic systems.',
    'infra.f2.title': 'Bridges and viaducts',
    'infra.f2.desc':  'Concrete and steel crossing structures, from structural dimensioning to construction details.',
    'infra.f3.title': 'Technological networks',
    'infra.f3.desc':  'Design of gas, electrical, sewer and water networks integrated into the urban and extra-urban infrastructure context.',
    'infra.f4.title': 'Geotechnics',
    'infra.f4.desc':  'Sub-soil investigations, special foundations, consolidations and retaining works for complex ground conditions.',
    'infra.f5.title': 'Construction management',
    'infra.f5.desc':  'Technical supervision and site management to ensure quality, safety and schedule compliance.',
    'infra.f6.title': 'Testing and inspections',
    'infra.f6.desc':  'Static and functional testing, safety inspections and reporting for public and private bodies.',

    /* ---- ABOUT PAGE ---- */
    'about.hero.tag':   'About Us',
    'about.hero.title': 'About Us',
    'about.hero.desc':  'A multidisciplinary team of professionals united by a passion for design and a commitment to quality, sustainability and innovation.',
    'about.s1.tag':     'Our story',
    'about.s1.title':   'Twenty years of <em>integrated design</em>',
    'about.s1.p1':      'J+S was born from the meeting of complementary skills. Over more than twenty years we have built a studio model that unites architecture, hydraulic engineering and infrastructure design into a single coherent and synergistic entity.',
    'about.s1.p2':      'Today the team includes specialists from different disciplines collaborating on every project, ensuring an integrated vision that reduces design conflicts and optimises results for the client.',
    'about.s1.p3':      'Our strength is the ability to tackle complexity: projects requiring cross-disciplinary skills find in J+S a unique and reliable partner.',
    'about.stat1':      'Projects',
    'about.stat2':      'Years',
    'about.quote':      '"Quality design is born from collaboration, curiosity and respect for the context in which we work."',
    'about.val.tag':    'Values',
    'about.val.title':  'What <em>guides</em> us',
    'about.v1.title': 'Quality without compromise',
    'about.v1.desc':  'Every project receives the same care and attention, regardless of scale or budget. Quality is not an option, it is our standard.',
    'about.v2.title': 'Environmental sustainability',
    'about.v2.desc':  'We design with awareness of environmental impact. Every constructive and technical choice takes into account long-term sustainability.',
    'about.v3.title': 'Applied innovation',
    'about.v3.desc':  'We adopt updated tools and methodologies — BIM, numerical modelling, GIS — to ensure precision and coordination.',
    'about.v4.title': 'Listening and dialogue',
    'about.v4.desc':  'The best project is born from open communication with the client. We listen, translate, propose and share every decision.',
    'about.team.tag':   'The Team',
    'about.team.title': 'The <em>people</em> of J+S',
    'about.team.sub':   'Professionals with diverse skills, united by a passion for design',
    'about.t1.name': 'J. — Founder',
    'about.t1.role': 'Architect',
    'about.t1.desc': 'Responsible for creative direction and architectural design. Over 20 years of experience at residential and public scale.',
    'about.t2.name': 'S. — Co-founder',
    'about.t2.role': 'Hydraulic Engineer',
    'about.t2.desc': 'Specialist in hydrological modelling and water management. Coordinates projects in the Hydraulics business unit.',
    'about.t3.name': 'Our team',
    'about.t3.role': 'Specialists & Collaborators',
    'about.t3.desc': 'A group of engineers, architects and technicians collaborating flexibly and in a coordinated manner on every project.',
    'about.join.cta': 'Join the team',

    /* ---- CONTACT PAGE ---- */
    'contact.hero.tag':   'Contact',
    'contact.hero.title': 'Contact Us',
    'contact.hero.desc':  'We are available to answer your questions and collect your project requests.',
    'contact.info.tag':   'Where we are',
    'contact.info.title': 'Let\'s talk about<br/>your <em>project</em>',
    'contact.info.desc':  'Contact us for a no-obligation introductory meeting. Every project starts with an idea: tell us about it.',
    'contact.addr.label': 'Address',
    'contact.addr.val':   'Via esempio 1, 00000 City (XX), Italy',
    'contact.phone.label':'Phone',
    'contact.email.label':'Email',
    'contact.hours.label':'Hours',
    'contact.hours.val':  'Mon – Fri: 9:00 am – 6:00 pm',
    'contact.form.title': 'Send us a message',
    'contact.form.name':  'Name *',
    'contact.form.email': 'Email *',
    'contact.form.subj':  'Subject',
    'contact.form.msg':   'Message *',
    'contact.form.submit':'Send message',
    'contact.form.note':  'We will reply within 24 working hours.',
    'contact.form.success':'Message sent! We will get back to you shortly.',
    'contact.opt0': 'Select a topic',
    'contact.opt1': 'Architecture — Architectural design',
    'contact.opt2': 'Hydraulics — Hydraulic design',
    'contact.opt3': 'Infrastructure — Civil infrastructure',
    'contact.opt4': 'Join Us — Application',
    'contact.opt5': 'Other',
    'contact.name.ph':  'John Smith',
    'contact.email.ph': 'john@email.com',
    'contact.msg.ph':   'Briefly describe your project or request...',
  }
};

// ─────────────────────────────────────────
// APPLY TRANSLATIONS
// ─────────────────────────────────────────
function applyLang(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.it;

  // text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // innerHTML (for keys containing HTML tags like <em>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // <html lang>
  document.documentElement.lang = lang;

  // persist
  localStorage.setItem('jpius-lang', lang);

  // update active button
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
}

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
function initI18n() {
  const saved = localStorage.getItem('jpius-lang') || 'it';
  applyLang(saved);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.getAttribute('data-lang'));
    });
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
