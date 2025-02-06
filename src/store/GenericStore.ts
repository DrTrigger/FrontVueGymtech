// src/store/GenericStore.ts
import { defineStore } from 'pinia';

interface GenericService<T> {
  list: () => Promise<T[]>;
  create: (item: T) => Promise<any>;
  delete: (id: number) => Promise<any>;
  update: (id: number, item: T) => Promise<any>;
}

interface GenericState<T> {
  items: T[];
  loading: boolean;
  error: string | null;
}

export function createGenericStore<T>(storeName: string, service: GenericService<T>) {
  return defineStore(storeName, {
    state: (): GenericState<T> => ({
      items: [] as T[],
      loading: false,
      error: null,
    }),
    actions: {
        async fetchItems() {
            this.loading = true;
            this.error = null;
            try {
              this.items = (await service.list()) as unknown as typeof this.items;
            } catch (error) {
              this.error = 'Falha ao carregar itens';
              console.error('Erro ao buscar itens', error);
            } finally {
              this.loading = false;
            }
          }, 
      async addItem(item: T) {
        this.loading = true;
        this.error = null;
        try {
          const message = await service.create(item);
          await this.fetchItems();
          return message;
        } catch (error) {
          this.error = 'Falha ao adicionar item';
          console.error('Erro ao adicionar item', error);
          throw error;
        } finally {
          this.loading = false;
        }
      },

      async removeItem(id: number) {
        this.loading = true;
        this.error = null;
        try {
          const message = await service.delete(id);
          await this.fetchItems();
          return message;
        } catch (error) {
          this.error = 'Falha ao remover item';
          console.error('Erro ao remover item', error);
          throw error;
        } finally {
          this.loading = false;
        }
      },

      async updateItem(id: number, item: T) {
        this.loading = true;
        this.error = null;
        try {
          const message = await service.update(id, item);
          await this.fetchItems();
          return message;
        } catch (error) {
          this.error = 'Falha ao atualizar item';
          console.error('Erro ao atualizar item', error);
          throw error;
        } finally {
          this.loading = false;
        }
      },
    },
  });
}
