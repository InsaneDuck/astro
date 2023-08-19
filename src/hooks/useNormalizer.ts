import { useReducer } from "react";

export type EntityId = number | string;

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
  action: { type: Action; payload?: readonly T[] },
) => EntityState<T>;
type InitializerType = <T>() => EntityState<T>;
const initializer: InitializerType = () => {
  return {
    ids: [],
    entities: {},
  };
};

export const useNormalizer = <EntityType>(
  init: EntityDefinition<EntityType>,
) => {
  const reducer = <T>(
    state: EntityState<T>,
    action: { type: Action; payload?: readonly T[] },
  ) => {
    switch (action.type) {
      case Action.ADD_ONE: {
        // if (isOfType(action.payload,  T)) {
        //   const id = init.selectId(action.payload);
        //   state.ids.push(id);
        //   state.entities[id] = action.payload;
        // }
        return state;
      }
      case Action.ADD_MANY:
        return state;
      case Action.SET_ALL:
        return state;
      case Action.REMOVE_ONE:
        return state;
      case Action.REMOVE_MANY:
        return state;
      case Action.REMOVE_ALL:
        return state;
      case Action.UPDATE_ONE:
        return state;
      case Action.UPDATE_MANY:
        return state;
      case Action.UPSERT_ONE:
        return state;
      case Action.UPSERT_MANY: {
        // action.payload?.map((item) => {
        //   const id = init.selectId<EntityType>(item);
        //   state.ids.push(id);
        //   state.entities[id] = item;
        // });
        return state;
      }
    }
  };
  const [data, dispatch] = useReducer<
    ReducerFunctionType<EntityType>,
    EntityState<EntityType>
  >(
    reducer,
    {
      ids: [],
      entities: {},
    },
    initializer,
  );

  return { data, dispatch };
};
