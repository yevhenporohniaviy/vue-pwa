<template>
  <hello-world :posts="posts"/>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import axios from 'axios'
  export default {
    name: 'Home',
    data: () => ({
      posts: []
    }),
    components: {
      HelloWorld,
    },
    created() {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {
        this.posts = resp.data
      }).catch(e => {
        console.error(e)
      })
    }
  }
</script>
