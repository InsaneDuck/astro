import { useState } from "react";

export type EntityId = number | string;

export type Comparer<T> = (a: T, b: T) => number;

export type IdSelector<T> = (model: T) => EntityId;

export interface DictionaryNum<T> {
  [id: number]: T | undefined;
}

export interface Dictionary<T> extends DictionaryNum<T> {
  [id: string]: T | undefined;
}

export type Update<T> = { id: EntityId; changes: Partial<T> };

export interface EntityState<T> {
  ids: EntityId[];
  entities: Dictionary<T>;
}

export interface EntityDefinition<T> {
  selectId: IdSelector<T>;
  sortComparer: false | Comparer<T>;
}

export type ReturnType<T> = {
  data: EntityState<T>;
};

export interface EntityStateAdapter<T> {
  addOne(entity: T): void;

  addMany(entities: T[]): void;

  setAll(entities: T[]): void;

  removeOne(key: EntityId): void;

  removeMany(keys: EntityId[]): void;

  removeAll(): void;

  updateOne(update: Update<T>): void;

  updateMany(updates: Update<T>[]): void;

  upsertOne(entity: T): void;

  upsertMany(entities: T[]): void;
}

export const useEntityAdapter = <T>(init: EntityDefinition<T>) => {
  const [data, setData] = useState<EntityState<T>>({ ids: [], entities: {} });

  const dispatch: EntityStateAdapter<T> = {
    addOne(entity: T) {},

    addMany(entities: readonly T[]) {},

    setAll(entities: readonly T[]) {},

    removeOne(key: EntityId) {},

    removeMany(keys: EntityId[]) {},

    removeAll() {},

    updateOne(update: Update<T>) {},

    updateMany(updates: Update<T>[]) {},

    upsertOne(entity: T) {},

    upsertMany(entities: T[]) {},
  };

  return { data, dispatch };
};
