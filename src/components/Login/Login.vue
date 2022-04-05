<template>
    <div class="content-center">
        <h1>Inicie Sesion Ingresando Sus Datos</h1>
        <br>
        <form action="">
            <input-v type="email" name="email" v-model="email" placeholder=" Email de usuario"/>
            <br>
            <input-v type="password" name="password" v-model="password" placeholder=" Ingrese contraseña"/>
        </form>

    </div>
</template>

<script>
import InputV from '@/components/Layout/Inputs.vue'
export default {
    name: 'LoginComponent',
    data() {
        return {
            email:''
        }
    },
    components:{
        InputV
    }
}
</script>