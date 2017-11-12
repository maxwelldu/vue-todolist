(function(){
  var STORAGE_KEY = 'todos'
  window.todoStorage = {
    fetch() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      } catch(err) {
        return [];
      }
    },
    save(todos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
  }
})();
