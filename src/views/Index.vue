<template>
<cube-slide ref="slide" :data="items" @change="changePage">
  <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
    <a :href="item.url">
      <img :src="item.image">
    </a>
  </cube-slide-item>
</cube-slide>
</template>
<script>
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  },
  async  created(){
    try {
      const item =  await this.$http.get('/api/banner')
      this.items=item.data
    } catch (error) {
      console.log(error);
    }
  }
   
}
</script>
