function deepClone<T>(source: T): T {
  if (source === null) {
    return source;
  }

  if (Array.isArray(source)) {
    return source.map((item) => deepClone(item)) as unknown as T;
  }

  if (typeof source === 'object') {
    const target: Partial<T> = {};
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = deepClone(source[key]);
      }
    }
    return target as T;
  }

  return source;
}

export default deepClone;
