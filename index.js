const slugOff = (string = '', separator = '-') => {
  if (string.length > 0) {
    const split = string.split(' ');
    return split.join(separator).toLowerCase();
  }

  console.warn('No title or separator was provided to slugOff 😢');
  return '';
}

module.exports = slugOff