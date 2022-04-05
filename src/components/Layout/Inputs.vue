<template>
    <div class="mx-5">
        <label :for="name">{{name}}</label><br>
        <input :type="type" :name="name" :placeholder="placeholder" class=" border border-gray-400 rounded-sm p-1 text-center" :value="value" @input="getValues($event.target.value)">
    </div>
</template>

<script>
export default {
    name:'InputV',
    props: [
        'type',
        'name',
        'placeholder',
        'value'
    ],
    methods: {
        getValues(value){
            this.$emit('values',value);
        }
    },
    
}
</script>