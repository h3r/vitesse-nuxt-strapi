import { defineStore, acceptHMRUpdate } from 'pinia';
import type { Strapi5RequestParams } from '@nuxtjs/strapi';

export const useTodoStore = defineStore("Todo", () => {
  const client = useStrapiClient();
  const strapi = useStrapi()
  const endpoint = "todos";
  const records = ref<Todo[]>([]);

  const get = async (opts: Partial<Todo> = {}) => {
    const res = await strapi.find<Todo>('todos', { sort: ['createdAt:asc'] });
    records.value = res.data;
    return res;
  };

  const create = async (data: Partial<Todo>) => {
    const res = await strapi.create<Todo>('todos', data);
    return res;
  };

  const getById = async (id: string, opt: Strapi5RequestParams<Todo> = {  }) => {
    const res = await strapi.findOne<Todo>('todos', id, opt);
    return res;
  };

  const update = async (id: string, data: Partial<Todo>) => {
    const res = await strapi.update<Todo>('todos', id, data);
    return res;
  };

  const _delete = async (id: string) => {
    const res = await strapi.delete<Todo>('todos', id);
    return res;
  };

  return {
    get,
    records,
    create,
    getById,
    update,
    _delete,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot));
}