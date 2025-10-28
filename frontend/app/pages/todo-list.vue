<script setup lang="ts">
import type { Todo } from '~/utils/types'

definePageMeta({
  layout: 'home',
  middleware: 'auth',
  keepalive: false,
})


const store = useTodoStore();
let todoText = ref('');
const { data: todos, refresh } = await useAsyncData('todos', () => store.get().then( ()=>{ return store.records; }));
const remainingTodos = computed(() => (todos.value ?? []).filter((t: Todo) => t.state === false));
const completedTodos = computed(() => (todos.value ?? []).filter((t: Todo) => t.state === true));

const onCreate = async () => {
  if (!todoText.value.trim().length)
    return;
  await store.create({ value: todoText.value.trim() });
  todoText.value = '';
};

const onUpdate = async (todo: Todo, event: Event) => {
  const input = event.target as HTMLInputElement;
  const newValue = input.value.trim();
  if (!newValue.length || newValue === todo?.value)
    return;

  await store.update(String(todo?.documentId), { value: newValue });
  refresh();
};

const changeState = async (id: string, state: boolean) => {
  await store.update(id, { state: state });
  refresh();
};

const onDelete = async (todo: Todo) => {
  await store._delete(String(todo?.documentId));
};

</script>

<template>
   <div mx-auto w="68">

    <div flex justify-center items-center>
      <h2 font-montserrat font-blod text-2xl>
        TodoList
      </h2>
      <i ml-1 i-carbon:rotate-360 btn p-1 text-sm rounded transition-all-500 hover:-rotate-180 @click="() => refresh()" />
    </div>

    <div>
      <div my-2 flex bg-gray-1 dark:bg-gray-8>
        <input
          v-model="todoText" type="text" font-montserrat w-52 text-center bg-transparent border-0 outline-none
          @keyup.enter="onCreate"
        >
        <button ml-2 btn @click="onCreate">
          add
        </button>
      </div>
    </div>

    <div>
      <div class="flex my-2 text-center truncate
                  before:(content-none relative top-50% w-50% translate-y-50% b-t-1 b-primary)
                  after:(content-none relative top-50% w-50% translate-y-50% b-t-1 b-primary)"
      >
        <span px-2 text-gray-4 text-sm>{{ remainingTodos.length }} Active</span>
        <span px-2 text-gray-4 text-sm>{{ completedTodos.length }} Completed</span>
      </div>

      <TransitionGroup tag="ul" name="list" class="flex flex-col gap-2 font-montserrat mb-2">
        <li v-for="todo in remainingTodos" :key="todo?.documentId" class="group" inline-flex items-center px-2 py-2 b-1 rounded>
          <input
            flex-1 :checked="todo?.state" type="checkbox" bg-primary-500
            @click="changeState(String(todo.documentId), !(todo?.state))"
          >
          <p px-2>
            <input
              text-center outline-primary-500 bg-transparent :value="todo?.value"
              @blur="onUpdate(todo, $event)" @keyup.enter="onUpdate(todo, $event)"
            >
          </p>
          <i i-carbon-close text-red icon-btn opacity-0 group-hover:opacity-100 @click="onDelete(todo)" />
        </li>
      </TransitionGroup>

      <TransitionGroup tag="ul" name="list" class="flex flex-col gap-2 font-montserrat">
        <li v-for="todo in completedTodos" :key="todo?.documentId" class="group" inline-flex items-center px-2 py-2 b-1 rounded>
          <input
            flex-1 :checked="todo?.state" type="checkbox" bg-primary-500
            @click="changeState(String(todo.documentId), !(todo?.state))"
          >
          <p px-2>
            <input
              text-center outline-primary-500 bg-transparent :value="todo?.value"
              @blur="onUpdate(todo, $event)" @keyup.enter="onUpdate(todo, $event)"
            >
          </p>
          <i i-carbon-close text-red icon-btn opacity-0 group-hover:opacity-100 @click="onDelete(todo)" />
        </li>
      </TransitionGroup>
    </div>

   </div>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
