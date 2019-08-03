const other = {
  'LocalStorage.get.item': {
    replaceWith: 'LocalStorage.getItem'
  },
  'SessionStorage.get.item': {
    replaceWith: 'SessionStorage.getItem'
  },
  'this.$q.localStorage.get.item': {
    replaceWith: 'this.$q.localStorage.getItem'
  },
  'this.$q.sessionStorage.get.item': {
    replaceWith: 'this.$q.sessionStorage.getItem'
  }
}