export interface Author {
  company: string | null;
  headshot?: string | null;
  createdAt: string;
  id: string;
  linkedIn: string;
  name: string;
  title: string;
  updatedAt: string;
}

interface Tag {
  id: string;
  tag: string;
}

interface TagItem {
  tags: Tag;
}

interface Tags {
  items: TagItem[];
}

export interface Lesson {
  author: Author[];
  backdate: string;
  content: string;
  createdAt: string;
  id: string;
  objectives: string[];
  screengrab: string | null;
  seoImage: string;
  slug: string;
  tags: Tags;
  title: string;
  type: string;
  subhead: string;
}
