<template>
    <button 
        class="border bg-red-500 border-red-600 hover:bg-red-600 rounded-md p-2 mx-2"
    >
        {{ content }}
    </button>
</template>

<script>

export default {
    name: 'ButtonCancel',

    props: [
        'content'
    ],

}
</script>