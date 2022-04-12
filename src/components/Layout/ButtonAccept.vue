<template>
    <button 
        class="border bg-green-500 border-green-600 hover:bg-green-600 rounded-md p-2 mx-2"
    >
        {{ content }}
    </button>
</template>

<script>

export default {
    name: 'ButtonAcept',

    props:[
        'content'
    ]

}
</script>