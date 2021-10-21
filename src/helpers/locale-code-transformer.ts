export const transformLocaleCode = (
  code: string,
  transformLocaleCodes?: any[]
): string => {
  if (!transformLocaleCodes) {
    return code;
  }

  const originalKeys = Object.keys(transformLocaleCodes);

  if (!originalKeys.includes(code)) {
    return code;
  }

  return transformLocaleCodes[code];
};
