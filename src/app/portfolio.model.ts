export interface Portfolio {
  navbar: Navbar;
  hero: Hero;
  work: Work;
  about: About;
  services: Services;
  skills: Skills;
  contact: Contact;
}

export interface Navbar {
  title: string;
  items: NavbarItem[];
}

export interface NavbarItem {
  title: string;
  link: string;
}

export interface Hero {
  id: string;
  title: string;
  imageUrl: string;
  videoUrl: string;
  description: string;
  projectCount: number;
}

export interface Work {
  id: string;
  title: string;
  filters: FilterItem[];
  items: WorkItem[];
}

export interface FilterItem {
  title: string;
  tag: string;
}

export interface WorkItem {
  tags: string[];
  imageUrl: string;
  videoUrl: string;
}

export interface About {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Services {
  id: string;
  title: string;
  serviceList: ServicesItem[];
}

export interface ServicesItem {
  title: string;
  description: string;
  imageUrl: string;
}

export interface Skills {
  id: string;
  title: string;
  imageUrl: string;
  skillList: SkillItem[];
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface Contact {
  id: string;
  title: string;
  itemList: ContactItem[];
}

export interface ContactItem {
  title: string;
  value: string;
  link: string;
}
