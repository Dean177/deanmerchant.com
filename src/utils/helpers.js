export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5)
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill('🍱')
      .join('')} ${minutes} min read`
  } else {
    return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`
  }
}

export function formatPostDate(dateString) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return dateString
  }

  let date = new Date(dateString)

  return date.toLocaleDateString({
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
