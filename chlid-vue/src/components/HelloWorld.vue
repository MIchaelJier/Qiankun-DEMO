<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      这是一个跨项目组件栗子
    </p> 
  </div>
</template>
 
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  border: 1px solid #666;
}
h3 {
  margin: 40px 0 0; 
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
