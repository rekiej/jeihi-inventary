<template>
    <div class="w-64 bg-emerald-500 h-screen">
        <img alt="Vue logo" src="@/assets/logo.png" class="mx-auto my-10">
        <!--<side-link toRoute="/login" routeName="Login"/>-->
        <side-link toRoute="/inventary" routeName="Inventario"/>
    </div>
</template>
<script>
import SideLink from './SideLinks.vue'

export default {
    name: 'SideBar',
    components: {
        SideLink
    }
}
</script>