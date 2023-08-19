import { useReducer } from "react";

export type EntityId = string;

export type Comparer<T> = (a: T, b: T) => number;

export type IdSelector<T> = (entity: T) => EntityId;

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

export enum Action {
  ADD_ONE = "ADD_ONE",
  ADD_MANY = "ADD_MANY",
  SET_ALL = "SET_ALL",
  REMOVE_ONE = "REMOVE_ONE",
  REMOVE_MANY = "REMOVE_MANY",
  REMOVE_ALL = "REMOVE_ALL",
  UPDATE_ONE = "UPDATE_ONE",
  UPDATE_MANY = "UPDATE_MANY",
  UPSERT_ONE = "UPSERT_ONE",
  UPSERT_MANY = "UPSERT_MANY",
}

type ReducerFunctionType<T> = (
  state: EntityState<T>,
  action: ReducerAction<T>,
) => EntityState<T>;

type ReducerAction<T> = { type: Action; payload?: readonly T[] };

export const useStateNormalized = <EntityType>(
  init: EntityDefinition<EntityType>,
) => {
  const reducer = (
    state: EntityState<EntityType>,
    action: ReducerAction<EntityType>,
  ) => {
    switch (action.type) {
      case Action.ADD_ONE: {
        return state;
      }
      case Action.ADD_MANY: {
        return state;
      }
      case Action.SET_ALL: {
        return state;
      }
      case Action.REMOVE_ONE: {
        return state;
      }
      case Action.REMOVE_MANY: {
        return state;
      }
      case Action.REMOVE_ALL: {
        return state;
      }
      case Action.UPDATE_ONE: {
        return state;
      }
      case Action.UPDATE_MANY: {
        return state;
      }
      case Action.UPSERT_ONE: {
        return state;
      }
      case Action.UPSERT_MANY: {
        if (action.payload) {
          action.payload.map((item) => {
            const id = init.selectId(item);

            state.ids.push(id);
            state.entities[id] = item;
          });
        }

        return state;
      }
    }
  };
  const [data, dispatch] = useReducer<ReducerFunctionType<EntityType>>(
    reducer,
    {
      ids: [] as EntityId[],
      entities: {},
    },
  );
  return { data, dispatch };
};
