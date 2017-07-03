  // naive check for browser or node environment

module.exports = {
  isBrowser: () => typeof window !== 'undefined' && !!window.document,
  isNode: () => typeof global !== 'undefined' && !!module.exports
}
