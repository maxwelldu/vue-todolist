(function(){
  // 实例化
  var app = new Vue({
    // 挂载元素
    el: '.todoapp',
    // 属性
    data: {
      newTodo: '',
      todos: [
        {
          title: '学Vue',
          completed: true
        },
        {
          title: '学React',
          completed: false
        }
      ]
    },
    // 计算属性
    computed: {
      showTodos() {
        return this.todos.length > 0
      }
    },
    // 属性观察
    watch: {

    },
    // 方法集合
    methods: {
      addTodo() {
        this.newTodo = this.newTodo.trim()
        if (this.newTodo.length < 1) {
          return
        }
        this.todos.unshift({
          title: this.newTodo,
          completed: false
        })
        this.newTodo = ''
      },
      deleteTodo(todo) {
        this.todos = _.without(this.todos, todo)
      }
    },
    // 指令集合
    directive: {

    },
  })
})();
