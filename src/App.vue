<template>
  <div class="h-full">
    <div class="flex h-full">
      <side-bar/>
      <router-view class="w-full h-screen place-content-center mx-auto text-center" />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/Layout/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>
