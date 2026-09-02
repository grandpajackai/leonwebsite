export type Locale = "en" | "es";

export interface NavItem {
  slug: string;
  label: string;
}

export interface HeadingBody {
  h: string;
  p: string;
}

export interface ProcessStep {
  t: string;
  h: string;
  p: string;
}

export interface HomeContent {
  h1a: string;
  h1b: string;
  sub: string;
  bullets: string[];
  heroPhoto: string;
  heroImg: string;
  proofTitle: string;
  proofBody: string;
  proofPoints: HeadingBody[];
  servicesTitle: string;
  servicesSub: string;
  processTitle: string;
  processSub: string;
  process: ProcessStep[];
  equipTitle: string;
  equipBody: string;
  workTitle: string;
  workSub: string;
  reviewsTitle: string;
  reviewsNote: string;
  areasTitle: string;
  claimTitle: string;
  claimBody: string;
  claimPoints: string[];
  ctaTitle: string;
  ctaSub: string;
}

export interface ServiceGroup {
  label: string;
  items: string[];
}

export interface ServicesPageContent {
  title: string;
  sub: string;
  groups: ServiceGroup[];
}

export interface WorkPageContent {
  title: string;
  sub: string;
  captions: string[];
}

export interface County {
  name: string;
  cities: string[];
}

export interface AreasPageContent {
  title: string;
  sub: string;
  counties: County[];
  mapNote: string;
}

export interface AboutPageContent {
  title: string;
  sub: string;
  body: string[];
  valuesTitle: string;
  values: HeadingBody[];
  credsTitle: string;
  creds: string[];
  photo: string;
  img: string;
}

export interface ContactFields {
  name: string;
  phone: string;
  email: string;
  address: string;
  damage: string;
  when: string;
  carrier: string;
  claim: string;
  role: string;
  callback: string;
  photos: string;
}

export interface ContactPageContent {
  title: string;
  sub: string;
  urgentTitle: string;
  urgentBody: string;
  fields: ContactFields;
  damageOptions: string[];
  whenOptions: string[];
  roleOptions: string[];
  callbackOptions: string[];
  dropNote: string;
  submit: string;
  privacy: string;
  sentTitle: string;
  sentBody: string;
}

export interface FooterContent {
  tag: string;
  colTitle1: string;
  colTitle2: string;
  colTitle3: string;
  legal: string;
  email: string;
}

export interface ServiceStep {
  h: string;
  p: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: string;
  title: string;
  blurb: string;
  intro: string;
  photo: string;
  img?: string;
  includes: HeadingBody[];
  steps: ServiceStep[];
  faqs: ServiceFaq[];
}

export interface SiteContent {
  lang: string;
  other: string;
  phoneLabel: string;
  nav: NavItem[];
  strip: string[];
  topbar: string;
  ctaCall: string;
  ctaForm: string;
  ctaText: string;
  emergency: string;
  home: HomeContent;
  servicesPage: ServicesPageContent;
  workPage: WorkPageContent;
  areasPage: AreasPageContent;
  aboutPage: AboutPageContent;
  contactPage: ContactPageContent;
  footer: FooterContent;
  faqTitle: string;
  includesTitle: string;
  stepsTitle: string;
  relatedTitle: string;
  sidebarTitle: string;
  sidebarBody: string;
  services: ServiceContent[];
}
