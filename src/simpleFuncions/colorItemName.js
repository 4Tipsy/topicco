function colorItemName(itemFor) {
  if (itemFor === 'women') {
    return {backgroundColor: 'var(--pink-color)'}

  } else if (itemFor === 'men') {
    return {backgroundColor: 'var(--blue-color)'}

  } else {
    return {backgroundColor: 'var(--green-color)'}

  }
}

export default colorItemName