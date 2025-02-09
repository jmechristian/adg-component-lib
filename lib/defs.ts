export enum Role {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  VIEWER = 'VIEWER',
}

export enum Status {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Location {
  id: string;
  name?: string;
  address?: string;
  description?: string;
  latitude: number;
  longitude: number;
}

export interface Project {
  id: string;
  oldId: string;
  name: string;
  description?: string;
  location?: Location;
  locationString?: string;
  createdBy: User;
  lastUpdatedBy?: User;
  featured?: boolean;
  link: string;
  quote?: string;
  quoteAttribution?: string;
  collaborators?: Collaborator[];
  size?: string;
  gridOrder?: number;
  status: Status;
  hero?: ImageObject;
  department: Department;
  subcategories?: Subcategory[];
  building_type?: BuildingType[];
  project_type?: ProjectType[];
}

export interface Collaborator {
  id: string;
  name: string;
  email?: string;
  company?: string;
  title?: string;
  projects?: Project[];
}

export interface Department {
  id: string;
  name: string;
  projects?: Project[];
}

export interface ImageObject {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

export interface Subcategory {
  id: string;
  name: string;
  projects?: Project[];
}

export interface BuildingType {
  id: string;
  name: string;
  projects?: Project[];
}

export interface ProjectType {
  id: string;
  name: string;
  projects?: Project[];
}

export interface Image {
  id: string;
  url: string;
  caption?: string;
}
