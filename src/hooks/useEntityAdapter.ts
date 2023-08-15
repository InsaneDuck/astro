import { useReducer } from "react";

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

  addMany(entities: readonly T[]): void;

  setAll(entities: readonly T[]): void;

  removeOne(key: EntityId): void;

  removeMany(keys: readonly EntityId[]): void;

  removeAll(): void;

  updateOne(update: Update<T>): void;

  updateMany(updates: readonly Update<T>[]): void;

  upsertOne(entity: T): void;

  upsertMany(entities: readonly T[]): void;
}

export function selectIdValue<T>(entity: T, selectId: IdSelector<T>) {
  const key = selectId(entity);

  if (process.env.NODE_ENV !== "production" && key === undefined) {
    console.warn(
      "The entity passed to the `selectId` implementation returned undefined.",
      "You should probably provide your own `selectId` implementation.",
      "The entity that was passed:",
      entity,
      "The `selectId` implementation:",
      selectId.toString(),
    );
  }

  return key;
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

const reducer = <T>(
  state: EntityState<T>,
  action: { type: Action; payload?: readonly T[] | T | EntityId },
) => {
  switch (action.type) {
    case Action.ADD_ONE:
      return state;
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
    case Action.UPSERT_MANY:
      return state;
  }
};

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
export const useEntityAdapter = <T>(init: EntityDefinition<T>) => {
  //const [data, setData] = useState<EntityState<T>>({ ids: [], entities: {} });

  const [data, dispatch] = useReducer<ReducerFunctionType<T>, EntityState<T>>(
    reducer,
    {
      ids: [],
      entities: {},
    },
    initializer,
  );

  return { data, dispatch };
};
