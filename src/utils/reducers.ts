

export function shallowClone<T>(obj: T): T {
  return Object.create(
      Object.getPrototypeOf(obj), 
      Object.getOwnPropertyDescriptors(obj) 
  );
}

export function shallowMutate<T>(state: T, predicate: (state: T) => void): T {
  const draft = shallowClone(state);
  predicate(draft)
  return draft;
}