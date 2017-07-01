// naive check for browser or node environment

module.exports = {
  getPlatform: () => {
    return typeof window !== 'undefined' && window.document ? 'browser' : 'node';
  },
  isBrowser: () => typeof window !== 'undefined' && window.document,
  isNode: () => !this.isBrowser()
}
