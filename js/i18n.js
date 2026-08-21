/**
 * Système de traduction FR / HU pour le site több segítséget.
 * - Les éléments avec data-i18n="clé" ont leur contenu (innerHTML) remplacé.
 * - Les éléments avec data-i18n-placeholder="clé" ont leur attribut placeholder remplacé.
 * - La langue choisie est mémorisée dans localStorage (clé "lang").
 * - t(key) est utilisable directement en JS (ex: messages de succès dynamiques).
 */

const I18N = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_ask: "Demander une aide",
    nav_fund: "Faire un financement",
    nav_projects: "Projets",
    nav_testimonials: "Témoignages",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_account: "Espace personnel",

    // Footer
    footer_rights: "© 2026 több segítséget. Tous droits réservés.",
    footer_privacy: "Politique de confidentialité",
    footer_terms: "Conditions d'utilisation",
    footer_links: "Liens rapides",
    footer_info: "Informations",
    footer_city: "Budapest, Hongrie",
    hero_tagline: "Plus d'aide. Plus d'espoir. Plus d'avenir.",

    // Accueil — hero
    hero_title: "Plus d'aide.<br>Plus d'espoir.<br><span class=\"accent\">Plus d'avenir.</span>",
    hero_lead: "több segítséget soutient les personnes et les entreprises qui traversent des moments difficiles. Parce que chaque situation mérite une opportunité.",
    stat_people: "Personnes aidées",
    stat_biz: "Entreprises soutenues",
    stat_amount: "Aides accordées",

    // Accueil — bandeau de confiance
    trust_head: "Un soutien concret. Un impact durable.",
    trust1_t: "Aide non remboursable",
    trust1_p: "Une aide financière pour rebondir sans dette.",
    trust2_t: "Étude personnalisée",
    trust2_p: "Chaque demande est analysée avec attention.",
    trust3_t: "Utilisation responsable",
    trust3_p: "Des fonds gérés avec transparence et intégrité.",
    trust4_t: "Des vies, des projets, un avenir meilleur",
    trust4_p: "Ensemble, faisons la différence.",

    // Accueil — mission / valeurs
    eyebrow_mission: "Notre mission",
    mission_text: "Offrir un soutien financier non remboursable aux personnes et aux entreprises en difficulté, afin de favoriser la stabilité, la relance et un avenir plus serein.",
    value1: "Solidarité",
    value2: "Transparence",
    value3: "Responsabilité",
    value4: "Impact",

    // Accueil — processus
    eyebrow_how: "Comment ça marche",
    process_title: "Un processus simple et transparent",
    step1_t: "Déposer une demande", step1_p: "Remplissez le formulaire en quelques minutes.",
    step2_t: "Vérification", step2_p: "Nous étudions chaque dossier avec soin.",
    step3_t: "Décision", step3_p: "Une décision équitable selon nos critères.",
    step4_t: "Versement", step4_p: "L'aide est versée en toute sécurité.",
    step5_t: "Suivi", step5_p: "Vous suivez l'impact de votre aide.",

    // Accueil — CTA
    cta_title: "Une aide aujourd'hui. Un avenir demain.",
    cta_sub: "Déposez votre demande en quelques minutes, ou soutenez un projet dès maintenant.",
    projects_head: "Des projets qui changent des vies et construisent un avenir meilleur",

    // Projets (noms + descriptions, réutilisés sur index et projets.html)
    proj1_name: "Soutien aux petites entreprises",
    proj1_desc: "Aider à relancer et développer les activités locales.",
    proj2_name: "Aide aux familles en difficulté",
    proj2_desc: "Soutenir les besoins essentiels et l'avenir des enfants.",
    proj3_name: "Relance professionnelle",
    proj3_desc: "Redonner les moyens d'un nouveau départ.",
    proj4_name: "Aide médicale d'urgence",
    proj4_desc: "Prendre en charge des soins imprévus pour des familles vulnérables.",
    proj5_name: "Formation &amp; reconversion",
    proj5_desc: "Financer des formations professionnelles courtes et qualifiantes.",
    proj6_name: "Aide au logement",
    proj6_desc: "Éviter les expulsions et sécuriser un toit stable.",
    proj_general: "Là où le besoin est le plus urgent",

    // À propos
    ph_about_crumb: "À propos",
    ph_about_title: "Notre histoire, notre engagement",
    ph_about_sub: "több segítséget est née d'une conviction simple : personne ne devrait affronter une difficulté financière seul.",
    about_eyebrow: "Qui sommes-nous",
    about_h2: "Une association au service des personnes et des entreprises en difficulté",
    about_p1: "Depuis notre création, nous accompagnons des particuliers et des entreprises confrontés à des imprévus financiers, en leur offrant une aide non remboursable, étudiée au cas par cas.",
    about_p2: "Notre équipe travaille chaque jour à garantir un processus transparent, humain et rigoureux, du dépôt de la demande jusqu'au suivi de l'impact de l'aide accordée.",
    about_values_eyebrow: "Nos valeurs",
    about_values_title: "Ce qui guide chacune de nos décisions",
    about_cta_title: "Envie de nous rejoindre ou de contribuer ?",
    about_cta_sub: "Découvrez comment soutenir un projet ou déposer votre propre demande.",
    about_contact_btn: "Nous contacter",

    // Demander une aide
    ph_ask_title: "Demander une aide",
    ph_ask_sub: "Votre situation semble simple. Remplissez ce formulaire en toute sécurité et en toute confidentialité.",
    ask_step1: "Informations personnelles",
    ask_step2: "Situation et besoins",
    ask_step3: "Documents justificatifs",
    ask_step4: "Validation",
    lbl_fullname: "Nom complet",
    lbl_email: "Email",
    lbl_phone: "Téléphone",
    lbl_reqtype: "Type de demande",
    lbl_situation: "Décrivez votre situation et vos besoins",
    lbl_amount_wanted: "Montant souhaité (€)",
    ph_yourname: "Votre nom",
    ph_amount_ex: "Ex : 2000",
    opt_select: "Sélectionner",
    opt_individual: "Particulier",
    opt_company: "Entreprise",
    btn_cancel: "Annuler",
    btn_send_request: "Envoyer ma demande",
    msg_ask_success: "Votre demande a bien été envoyée. Vous pouvez suivre son avancement depuis votre espace personnel.",

    // Faire un financement
    ph_fund_title: "Faire un financement",
    ph_fund_sub: "Chaque contribution, quel que soit son montant, aide une personne ou une entreprise à rebondir.",
    fund_side_sub: "Choisissez un montant, un projet à soutenir, puis validez votre financement en toute sécurité.",
    fund_step1: "Montant & projet",
    fund_step2: "Vos informations",
    fund_step3: "Paiement",
    fund_step4: "Confirmation",
    lbl_project: "Projet à soutenir",
    opt_select_project: "Sélectionner un projet",
    lbl_amount: "Montant",
    lbl_other_amount: "Autre montant",
    ph_amount_eur: "Montant en €",
    lbl_payment_method: "Mode de paiement",
    payment_method_bank: "Virement bancaire — coordonnées fournies après validation",
    btn_view_projects: "Voir les projets",
    btn_confirm_fund: "Obtenir les coordonnées bancaires",
    msg_fund_success: "Merci ! Voici les coordonnées pour effectuer votre virement.",
    bank_panel_title: "Coordonnées pour votre virement",
    bank_panel_sub: "Effectuez votre virement avec ces coordonnées, en indiquant impérativement la référence ci-dessous dans le libellé. Votre don sera comptabilisé dès réception confirmée par notre équipe.",
    bank_lbl_holder: "Titulaire",
    bank_lbl_bank: "Banque",
    bank_lbl_amount: "Montant",
    bank_lbl_reference: "Référence à indiquer",

    // Projets en cours
    ph_projects_crumb: "Projets en cours",
    ph_projects_title: "Projets en cours",
    ph_projects_sub: "Des projets qui changent des vies et construisent un avenir meilleur.",

    // Témoignages
    ph_testi_title: "Ils ont été aidés",
    ph_testi_sub: "Des histoires réelles de personnes et d'entreprises qui ont retrouvé un nouveau départ.",
    testi1_quote: "« Grâce à l'aide reçue, j'ai pu relancer mon petit commerce après une période très difficile. »",
    testi1_role: "Commerçante",
    testi2_quote: "« Le processus a été rapide et humain. Je me suis sentie accompagnée du début à la fin. »",
    testi3_quote: "« Notre entreprise a pu surmonter une période de trésorerie tendue grâce à ce soutien. »",
    testi3_role: "Entreprise soutenue",
    testi_cta_title: "Vous aussi, partagez votre histoire",
    testi_cta_sub: "Votre témoignage peut donner de l'espoir à d'autres personnes dans le besoin.",

    // FAQ
    ph_faq_title: "Questions fréquentes",
    ph_faq_sub: "Tout ce qu'il faut savoir avant de déposer une demande ou de faire un financement.",
    faq1_q: "L'aide est-elle vraiment non remboursable ?",
    faq1_a: "Oui. Toutes les aides accordées par több segítséget sont des dons, sans obligation de remboursement.",
    faq2_q: "Qui peut déposer une demande ?",
    faq2_a: "Toute personne ou entreprise traversant une difficulté financière ponctuelle peut soumettre une demande via notre formulaire en ligne.",
    faq3_q: "Combien de temps prend l'étude d'un dossier ?",
    faq3_a: "En général, notre équipe étudie chaque dossier sous quelques jours ouvrés après réception des documents justificatifs.",
    faq4_q: "Comment sont utilisés les financements reçus ?",
    faq4_a: "Les fonds sont exclusivement affectés aux demandes validées, avec un suivi transparent publié sur la page Projets en cours.",
    faq5_q: "Puis-je suivre l'état de ma demande ?",
    faq5_a: "Oui, votre espace personnel vous permet de suivre en temps réel l'avancement de votre demande et les mises à jour de votre dossier.",

    // Contact
    ph_contact_title: "Contactez-nous",
    ph_contact_sub: "Une question sur votre dossier, un partenariat, ou simplement envie d'échanger ? Écrivez-nous.",
    lbl_subject: "Sujet",
    lbl_message: "Message",
    lbl_address: "Adresse",
    subj_followup: "Suivi d'une demande",
    subj_fund: "Question sur un financement",
    subj_partner: "Partenariat",
    subj_other: "Autre",
    btn_send_message: "Envoyer le message",
    msg_contact_success: "Merci, votre message a bien été envoyé.",

    // Connexion / Inscription
    login_title: "Connexion",
    login_sub: "Accédez à votre espace personnel.",
    lbl_password: "Mot de passe",
    btn_login: "Se connecter",
    no_account_yet: "Pas encore de compte ?",
    btn_create_account: "Créer un compte",
    register_title: "Créer un compte",
    register_sub: "Nécessaire pour déposer une demande d'aide et suivre son avancement.",
    lbl_account_type: "Type de compte",
    btn_create_my_account: "Créer mon compte",
    already_account: "Déjà un compte ?",

    // Tableau de bord
    dash_nav_home: "Tableau de bord",
    dash_nav_new: "Nouvelle demande",
    dash_nav_messages: "Messages",
    dash_nav_docs: "Documents",
    dash_nav_tracking: "Suivi des aides",
    dash_nav_profile: "Profil",
    dash_nav_logout: "Déconnexion",
    kpi_requests: "Demandes",
    kpi_total_label: "Au total",
    kpi_received: "Aides reçues",
    kpi_accepted_label: "Acceptées",
    kpi_total_amount: "Montant total",
    kpi_granted_label: "Attribué",
    dash_updates_title: "Dernières mises à jour",

    // Documents
    docs_title: "Mes documents",
    docs_sub: "Ajoutez vos justificatifs (pièce d'identité, factures, preuves de situation) pour appuyer vos demandes d'aide.",
    docs_upload_title: "Ajouter un document",
    docs_choose_file: "Fichier (PDF, JPG, PNG, DOC — 5 Mo max)",
    docs_upload_btn: "Envoyer",
    docs_list_title: "Mes fichiers",
    docs_loading: "Chargement…",
    docs_empty: "Aucun document envoyé pour le moment.",

    // Profil
    profile_title: "Mon profil",
    profile_sub: "Modifiez vos informations personnelles et votre mot de passe.",
    profile_info_title: "Informations personnelles",
    profile_password_title: "Changer le mot de passe (optionnel)",
    profile_current_pw: "Mot de passe actuel",
    profile_new_pw: "Nouveau mot de passe",
    profile_save_btn: "Enregistrer",
  },

  hu: {
    // Navigáció
    nav_home: "Kezdőlap",
    nav_about: "Rólunk",
    nav_ask: "Segítséget kérek",
    nav_fund: "Adományozás",
    nav_projects: "Projektek",
    nav_testimonials: "Vélemények",
    nav_faq: "GYIK",
    nav_contact: "Kapcsolat",
    nav_account: "Saját fiók",

    // Lábléc
    footer_rights: "© 2026 több segítséget. Minden jog fenntartva.",
    footer_privacy: "Adatvédelmi irányelvek",
    footer_terms: "Felhasználási feltételek",
    footer_links: "Gyorslinkek",
    footer_info: "Elérhetőségek",
    footer_city: "Budapest, Magyarország",
    hero_tagline: "Több segítség. Több remény. Több jövő.",

    // Főoldal — hero
    hero_title: "Több segítség.<br>Több remény.<br><span class=\"accent\">Több jövő.</span>",
    hero_lead: "A több segítséget azokat a magánszemélyeket és vállalkozásokat támogatja, akik nehéz időszakon mennek keresztül. Mert minden helyzet megérdemel egy esélyt.",
    stat_people: "Támogatott személy",
    stat_biz: "Támogatott vállalkozás",
    stat_amount: "Nyújtott támogatás",

    // Főoldal — bizalmi sáv
    trust_head: "Valódi támogatás. Tartós hatás.",
    trust1_t: "Vissza nem térítendő támogatás",
    trust1_p: "Pénzügyi segítség, hogy adósság nélkül talpra állhass.",
    trust2_t: "Személyre szabott vizsgálat",
    trust2_p: "Minden kérelmet gondosan megvizsgálunk.",
    trust3_t: "Felelős felhasználás",
    trust3_p: "Az adományokat átláthatóan és feddhetetlenül kezeljük.",
    trust4_t: "Életek, tervek, jobb jövő",
    trust4_p: "Együtt változtatunk.",

    // Főoldal — küldetés / értékek
    eyebrow_mission: "Küldetésünk",
    mission_text: "Vissza nem térítendő pénzügyi támogatást nyújtani nehéz helyzetben lévő magánszemélyeknek és vállalkozásoknak, hogy elősegítsük a stabilitást, az újraindulást és egy nyugodtabb jövőt.",
    value1: "Szolidaritás",
    value2: "Átláthatóság",
    value3: "Felelősség",
    value4: "Hatás",

    // Főoldal — folyamat
    eyebrow_how: "Hogyan működik",
    process_title: "Egyszerű és átlátható folyamat",
    step1_t: "Kérelem benyújtása", step1_p: "Töltsd ki az űrlapot néhány perc alatt.",
    step2_t: "Ellenőrzés", step2_p: "Minden dossziét gondosan megvizsgálunk.",
    step3_t: "Döntés", step3_p: "Méltányos döntés a kritériumaink alapján.",
    step4_t: "Kifizetés", step4_p: "A támogatás biztonságosan kerül kiutalásra.",
    step5_t: "Nyomon követés", step5_p: "Nyomon követheted a támogatásod hatását.",

    // Főoldal — CTA
    cta_title: "Segítség ma. Jövő holnap.",
    cta_sub: "Nyújtsd be kérelmed néhány perc alatt, vagy támogass egy projektet most rögtön.",
    projects_head: "Projektek, amelyek életeket változtatnak és jobb jövőt építenek",

    // Projektek (nevek + leírások)
    proj1_name: "Kisvállalkozások támogatása",
    proj1_desc: "Segítség a helyi tevékenységek újraindításához és fejlesztéséhez.",
    proj2_name: "Nehéz helyzetű családok támogatása",
    proj2_desc: "A gyermekek alapvető szükségleteinek és jövőjének támogatása.",
    proj3_name: "Szakmai újraindulás",
    proj3_desc: "Eszközök biztosítása egy új kezdethez.",
    proj4_name: "Sürgősségi egészségügyi segély",
    proj4_desc: "Váratlan orvosi ellátás fedezése kiszolgáltatott családok számára.",
    proj5_name: "Képzés és átképzés",
    proj5_desc: "Rövid, szakképesítést adó szakmai képzések finanszírozása.",
    proj6_name: "Lakhatási támogatás",
    proj6_desc: "Kilakoltatások elkerülése és stabil otthon biztosítása.",
    proj_general: "Ahol a legnagyobb szükség van rá",

    // Rólunk
    ph_about_crumb: "Rólunk",
    ph_about_title: "Történetünk, elkötelezettségünk",
    ph_about_sub: "A több segítséget egy egyszerű meggyőződésből született: senkinek sem szabad egyedül szembenéznie a pénzügyi nehézségekkel.",
    about_eyebrow: "Kik vagyunk",
    about_h2: "Egyesület nehéz helyzetben lévő magánszemélyek és vállalkozások szolgálatában",
    about_p1: "Alapításunk óta olyan magánszemélyeket és vállalkozásokat kísérünk, akik váratlan pénzügyi nehézségekkel néznek szembe, vissza nem térítendő, egyedileg elbírált támogatást nyújtva.",
    about_p2: "Csapatunk minden nap azon dolgozik, hogy átlátható, emberközpontú és alapos folyamatot biztosítson a kérelem benyújtásától a támogatás hatásának nyomon követéséig.",
    about_values_eyebrow: "Értékeink",
    about_values_title: "Ami minden döntésünket vezérli",
    about_cta_title: "Csatlakoznál vagy hozzájárulnál?",
    about_cta_sub: "Nézd meg, hogyan támogathatsz egy projektet, vagy hogyan nyújthatod be saját kérelmed.",
    about_contact_btn: "Kapcsolatfelvétel",

    // Segítséget kérek
    ph_ask_title: "Segítséget kérek",
    ph_ask_sub: "A helyzeted egyszerűnek tűnik. Töltsd ki ezt az űrlapot biztonságosan és bizalmasan.",
    ask_step1: "Személyes adatok",
    ask_step2: "Helyzet és szükségletek",
    ask_step3: "Igazoló dokumentumok",
    ask_step4: "Jóváhagyás",
    lbl_fullname: "Teljes név",
    lbl_email: "E-mail",
    lbl_phone: "Telefonszám",
    lbl_reqtype: "Kérelem típusa",
    lbl_situation: "Írd le a helyzeted és a szükségleteid",
    lbl_amount_wanted: "Kívánt összeg (€)",
    ph_yourname: "A neved",
    ph_amount_ex: "Pl.: 2000",
    opt_select: "Válassz",
    opt_individual: "Magánszemély",
    opt_company: "Vállalkozás",
    btn_cancel: "Mégse",
    btn_send_request: "Kérelem elküldése",
    msg_ask_success: "Kérelmed sikeresen elküldve. Az állapotát a saját fiókodban követheted nyomon.",

    // Adományozás
    ph_fund_title: "Adományozás",
    ph_fund_sub: "Minden hozzájárulás, bármekkora is, segít egy embernek vagy vállalkozásnak talpra állni.",
    fund_side_sub: "Válassz egy összeget és egy támogatandó projektet, majd erősítsd meg az adományt biztonságosan.",
    fund_step1: "Összeg & projekt",
    fund_step2: "Adataid",
    fund_step3: "Fizetés",
    fund_step4: "Megerősítés",
    lbl_project: "Támogatandó projekt",
    opt_select_project: "Válassz egy projektet",
    lbl_amount: "Összeg",
    lbl_other_amount: "Más összeg",
    ph_amount_eur: "Összeg €-ban",
    lbl_payment_method: "Fizetési mód",
    payment_method_bank: "Banki átutalás — az adatokat a jóváhagyás után kapod meg",
    btn_view_projects: "Projektek megtekintése",
    btn_confirm_fund: "Banki adatok lekérése",
    msg_fund_success: "Köszönjük! Íme az átutaláshoz szükséges adatok.",
    bank_panel_title: "Átutalási adatok",
    bank_panel_sub: "Utald el az összeget ezekkel az adatokkal, és feltétlenül tüntesd fel az alábbi hivatkozást a közleményben. Az adományod a beérkezés csapatunk általi megerősítése után kerül jóváírásra.",
    bank_lbl_holder: "Kedvezményezett",
    bank_lbl_bank: "Bank",
    bank_lbl_amount: "Összeg",
    bank_lbl_reference: "Feltüntetendő hivatkozás",

    // Projektek
    ph_projects_crumb: "Folyamatban lévő projektek",
    ph_projects_title: "Folyamatban lévő projektek",
    ph_projects_sub: "Projektek, amelyek életeket változtatnak és jobb jövőt építenek.",

    // Vélemények
    ph_testi_title: "Ők kaptak segítséget",
    ph_testi_sub: "Valódi történetek olyan emberekről és vállalkozásokról, akik új kezdetet találtak.",
    testi1_quote: "„A kapott segítségnek köszönhetően újra tudtam indítani a kisboltomat egy nagyon nehéz időszak után.”",
    testi1_role: "Kereskedő",
    testi2_quote: "„A folyamat gyors és emberséges volt. Az elejétől a végéig támogatva éreztem magam.”",
    testi3_quote: "„A vállalkozásunk ennek a támogatásnak köszönhetően vészelt át egy nehéz likviditási időszakot.”",
    testi3_role: "Támogatott vállalkozás",
    testi_cta_title: "Te is oszd meg a történeted",
    testi_cta_sub: "A történeted reményt adhat másoknak, akiknek szükségük van rá.",

    // GYIK
    ph_faq_title: "Gyakori kérdések",
    ph_faq_sub: "Minden, amit tudnod kell, mielőtt kérelmet nyújtasz be vagy adományozol.",
    faq1_q: "Tényleg nem kell visszafizetni a támogatást?",
    faq1_a: "Igen. A több segítséget által nyújtott minden támogatás adomány, visszafizetési kötelezettség nélkül.",
    faq2_q: "Ki nyújthat be kérelmet?",
    faq2_a: "Bármely magánszemély vagy vállalkozás, aki átmeneti pénzügyi nehézséggel küzd, benyújthat kérelmet online űrlapunkon keresztül.",
    faq3_q: "Mennyi ideig tart egy dosszié elbírálása?",
    faq3_a: "Csapatunk általában néhány munkanapon belül megvizsgálja a dossziét az igazoló dokumentumok beérkezése után.",
    faq4_q: "Hogyan használjuk fel a kapott adományokat?",
    faq4_a: "A pénzeszközöket kizárólag jóváhagyott kérelmekre fordítjuk, átlátható nyomon követéssel a Projektek oldalon.",
    faq5_q: "Nyomon követhetem a kérelmem állapotát?",
    faq5_a: "Igen, a saját fiókodban valós időben követheted kérelmed előrehaladását és a dossziéd frissítéseit.",

    // Kapcsolat
    ph_contact_title: "Lépj kapcsolatba velünk",
    ph_contact_sub: "Kérdésed van a dossziéddal, egy partnerséggel kapcsolatban, vagy egyszerűen csak írnál nekünk?",
    lbl_subject: "Tárgy",
    lbl_message: "Üzenet",
    lbl_address: "Cím",
    subj_followup: "Kérelem nyomon követése",
    subj_fund: "Kérdés egy adománnyal kapcsolatban",
    subj_partner: "Partnerség",
    subj_other: "Egyéb",
    btn_send_message: "Üzenet küldése",
    msg_contact_success: "Köszönjük, üzeneted sikeresen elküldve.",

    // Bejelentkezés / Regisztráció
    login_title: "Bejelentkezés",
    login_sub: "Lépj be a saját fiókodba.",
    lbl_password: "Jelszó",
    btn_login: "Bejelentkezés",
    no_account_yet: "Még nincs fiókod?",
    btn_create_account: "Fiók létrehozása",
    register_title: "Fiók létrehozása",
    register_sub: "Szükséges egy segélykérelem benyújtásához és nyomon követéséhez.",
    lbl_account_type: "Fiók típusa",
    btn_create_my_account: "Fiókom létrehozása",
    already_account: "Már van fiókod?",

    // Irányítópult
    dash_nav_home: "Irányítópult",
    dash_nav_new: "Új kérelem",
    dash_nav_messages: "Üzenetek",
    dash_nav_docs: "Dokumentumok",
    dash_nav_tracking: "Támogatások nyomon követése",
    dash_nav_profile: "Profil",
    dash_nav_logout: "Kijelentkezés",
    kpi_requests: "Kérelmek",
    kpi_total_label: "Összesen",
    kpi_received: "Kapott támogatás",
    kpi_accepted_label: "Elfogadva",
    kpi_total_amount: "Teljes összeg",
    kpi_granted_label: "Odaítélve",
    dash_updates_title: "Legutóbbi frissítések",

    // Dokumentumok
    docs_title: "Dokumentumaim",
    docs_sub: "Töltsd fel az igazoló dokumentumaidat (személyi igazolvány, számlák, igazolások) a kérelmeid alátámasztásához.",
    docs_upload_title: "Dokumentum hozzáadása",
    docs_choose_file: "Fájl (PDF, JPG, PNG, DOC — max. 5 MB)",
    docs_upload_btn: "Küldés",
    docs_list_title: "Fájljaim",
    docs_loading: "Betöltés…",
    docs_empty: "Még nincs feltöltött dokumentum.",

    // Profil
    profile_title: "Profilom",
    profile_sub: "Módosítsd a személyes adataidat és a jelszavadat.",
    profile_info_title: "Személyes adatok",
    profile_password_title: "Jelszó módosítása (opcionális)",
    profile_current_pw: "Jelenlegi jelszó",
    profile_new_pw: "Új jelszó",
    profile_save_btn: "Mentés",
  }
};

function t(key) {
  const lang = _siteLang;
  return (I18N[lang] && I18N[lang][key]) || (I18N.fr && I18N.fr[key]) || key;
}

// Langue affichée à TOUT LE MONDE, lue depuis le serveur (api/site-lang.php).
// Ce n'est plus une préférence par navigateur : elle est décidée par l'admin
// et s'applique à tous les visiteurs du site.
let _siteLang = 'hu';

function applyI18n() {
  const lang = _siteLang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function(el){
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key] !== undefined) {
      el.innerHTML = I18N[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
    const key = el.getAttribute('data-i18n-placeholder');
    if (I18N[lang] && I18N[lang][key] !== undefined) {
      el.setAttribute('placeholder', I18N[lang][key]);
    }
  });

  document.querySelectorAll('.lang-switch [data-lang]').forEach(function(btn){
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

async function setLang(lang) {
  // Réservé à l'admin : le serveur refuse si l'appelant n'est pas admin.
  try {
    const res = await fetch('api/site-lang.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ lang: lang })
    });
    const json = await res.json().catch(function(){ return {}; });
    if (!res.ok) {
      alert(json.error || "Impossible de changer la langue.");
      return;
    }
    _siteLang = lang;
    applyI18n();
  } catch (e) {
    alert("Impossible de changer la langue (connexion au serveur).");
  }
}

async function injectLangSwitchIfAdmin() {
  // Le sélecteur FR/HU n'est injecté QUE si le visiteur connecté est admin.
  let isAdmin = false;
  try {
    const res = await fetch('api/session.php', { credentials: 'include' });
    const json = await res.json().catch(function(){ return {}; });
    isAdmin = !!(json.authenticated && json.user && json.user.is_admin);
  } catch (e) {
    isAdmin = false;
  }
  if (!isAdmin) return;

  const cta = document.querySelector('.nav-cta');
  if (!cta || cta.querySelector('.lang-switch')) return;
  const wrap = document.createElement('div');
  wrap.className = 'lang-switch';
  wrap.title = 'Langue du site (visible par tous les visiteurs)';
  wrap.innerHTML =
    '<button type="button" data-lang="hu">HU</button>' +
    '<button type="button" data-lang="fr">FR</button>';
  cta.prepend(wrap);
  wrap.querySelectorAll('button').forEach(function(btn){
    btn.addEventListener('click', function(){ setLang(btn.getAttribute('data-lang')); });
  });
  applyI18n();
}

async function loadSiteLang() {
  try {
    const res = await fetch('api/site-lang.php', { credentials: 'include' });
    const json = await res.json().catch(function(){ return {}; });
    _siteLang = (json.lang === 'fr') ? 'fr' : 'hu';
  } catch (e) {
    _siteLang = 'hu';
  }
}

document.addEventListener('DOMContentLoaded', async function(){
  await loadSiteLang();
  applyI18n();
  injectLangSwitchIfAdmin();
});
