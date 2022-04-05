<template>
    <div class="hover:bg-emerald-700 border-b border-gray-500 p-2 my-5 text-center">
        <router-link :to="toRoute">{{ routeName }}</router-link>
    </div>
</template>
<script>
export default {
    name: 'SideLink',
    props: {
        toRoute: String,
        routeName: String
    }
}
</script>