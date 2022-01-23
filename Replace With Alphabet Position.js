const alphabetPosition = text =>
  text
    .toLowerCase()
    .split('')
    .map(el => el.charCodeAt() - 96)
    .filter(el => (el > 0) & (el < 27))
    .join(' ');
