const slugOff = (string = '', separator = '-') => {
  if (string.length > 0) {
    const split = string.split(' ');
    return split.join(separator).toLowerCase();
  }
  return false;
}

module.exports = slugOff