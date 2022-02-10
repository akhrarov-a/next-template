const excludeEmpty = <T>(source: T) => {
  const result: T = {} as T;

  for (const key in source) {
    const value = source[key];

    if (!value || !(value + "")) continue;

    result[key] = value;
  }

  return result;
};

export { excludeEmpty };
