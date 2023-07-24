//takes a type as input and make every key optional and recursively applies to every possible subclass
//useful for when api returns object with values missing in types defined in lemmy-js-client
export type Optional<T> = T extends Function
  ? T
  : T extends object
  ? { [P in keyof T]?: Optional<T[P]> }
  : T;
