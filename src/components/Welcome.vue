<template>
  <div class="hello">
    欢迎
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {

  },
  mounted() {
    this.init();
  },
  methods: {  
    init: function() {
    //   console.log($("#test").text());
    //   this.$axios.get('/student/getStuList').then(function(data) {
    //     console.log('成功==>', data);
    //   }).catch(function() {
    //     console.log('失败');
    //   });
    },
    goLogin: function() {
      this.$router.push({
        name: 'Login'
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
