const capitalize = (source: string) =>
  source ? source.charAt(0).toUpperCase() + source.substring(1) : source;

const shortener = (source: string, maxLenght: number = 35) =>
  source.length > maxLenght ? source.slice(0, maxLenght) + '...' : source;

export { capitalize, shortener };
