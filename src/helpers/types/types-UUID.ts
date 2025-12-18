type Brand<K, T> = K & { readonly __brand: T };
export type _UUID = Brand<string, "UUID">;