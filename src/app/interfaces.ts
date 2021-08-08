export interface Interfaces {
}

export interface Resume {
  jobs?: Job[],
  skills?: string[]
}

export interface Job {
  key: string,
  position: string,
  company: string,
  companylogo?: string,
  location: string,
  description: string,
  year: string,
  tags?: String[]
} 

export interface Project {
  key: string,
  title: string,
  headline: string,
  subtitle: string,
  projectimage: string,
  description: string,
  challenge?: string,
  year: string,
  imageurl?: string,
  tags?: String[]
}

export interface Tag {
  key: string,
  text: string,
  color?: string
}
