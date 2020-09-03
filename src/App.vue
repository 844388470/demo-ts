<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  mounted (){
    function* gen(){
      // some code
    }

    var g = gen();
    console.log(g)
    const func = async function () {
      const a = await new Promise((resolve, reject)=>{
        setTimeout(() => {
          console.log(111)
          reject(222)
        }, 2000);
      }).catch((err) => {
        console.log(err)
      })
      console.log(a)
      console.log(666)
    }
    func()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
