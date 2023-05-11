export function capitalizeFirstLetter(str) {
  if (typeof str === 'string') {
    return str.replace(/^(.)(.*)$/, function (_, firstLetter, restOfString) {
      return firstLetter.toUpperCase() + restOfString;
    });
  }
  return str;
}

export function formatNumber(num) {
  const str = String(num);

  const length = str.length;

  if (length === 1) {
    return '00' + str;
  } else if (length === 2) {
    return '0' + str;
  } else {
    return str;
  }
}
