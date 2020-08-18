<template>
  <div class="home">
      <Navbar />
      <Carousel />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from './Navbar';
import Carousel from '@/views/Carousel'
export default {
  name: 'Home',
  components:{
    Navbar,
    Carousel
  }
}
</script>

<style>

</style>
