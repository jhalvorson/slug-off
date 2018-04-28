const slugOff = (string = '', separator = '-') => {
  if (string.length > 0) {
    const split = string.split(' ');
    return split.join(separator).toLowerCase();
  }
  return '';
}

module.exports = slugOff