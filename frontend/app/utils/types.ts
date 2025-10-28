import type { StrapiUser } from "@nuxtjs/strapi";

export type User = StrapiUser & {
  role: Role;
};

export type Role = {
  id: number;
  documentId: string;
  name: string;
  description: string;
  type: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export interface Todo {
  id: number
  value: string
  state: boolean
  
  // Strapi system fields:
  documentId: string
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
}