(function(){
  // 实例化
  var app = new Vue({
    // 挂载元素
    el: '.todoapp',
    // 属性
    data: {
      newTodo: '',
      todos: todoStorage.fetch(),
      editedTodo: null,
      beforeEditCache: ''
    },
    // 计算属性
    computed: {
      showTodos() {
        return this.todos.length > 0
      }
    },
    // 属性观察
    watch: {
      todos: {
        deep: true,
        handler: todoStorage.save
      }
    },
    // 方法集合
    methods: {
      addTodo() {
        this.newTodo = this.newTodo.trim()
        if (!this.newTodo) {
          return
        }
        this.todos.unshift({
          title: this.newTodo,
          completed: false
        })
        this.newTodo = ''
      },
      removeTodo(todo) {
        this.todos = _.without(this.todos, todo)
      },
      editTodo(todo) {
        this.editedTodo = todo
        this.beforeEditCache = todo.title
      },
      doneEdit(todo) {
        if (!this.editedTodo) {
          return;
        }
        this.editedTodo = null;
        todo.title = todo.title.trim()
        if (!todo.title) {
          this.removeTodo(todo)
        }
      },
      cancelEdit(todo) {
        if (this.editedTodo) {
          todo.title = this.beforeEditCache
          this.editedTodo = null
        }
      }
    },
    // 指令集合
    directives: {
      focus: {
        update(el) {
          el.focus()
        }
      }
    },
  })
})();
