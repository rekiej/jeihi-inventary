<template>
    <div class="w-full z-0">
        <!--//////////////Agregar o editar productos inventario////////////////////-->
        <div class="conten-center">
            <h2 class="my-5 text-lg"><b>Agregar producto</b></h2>
          
            <div class="inline-flex">
                <input-v :value="TipoProducto" name="Tipo" placeholder="Tipo" type="string" @values="TipoProducto=$event"/>
                <input-v :value="Marca" name="Marca" placeholder="Marca" type="string" @values="Marca=$event"/>
                <input-v :value="Descripcion" name="Descripción" placeholder="Descripción" type="string" @values="Descripcion=$event"/>
                <input-v :value="Cantidad" name="Cantidad" placeholder="Cantidad" type="number" @values="Cantidad=$event"/>
                <input-v :value="key" class="hidden" @values="key=$event"/>
            </div> 
            <div v-show="validar">
                <p class="my-10 text-red-600">{{msg}}</p>
            </div>
            <div class="my-5 text-white">
                <button-acept @click="editando ? updateInventary() : addElement()" :content="editando ? 'Guardar cambios' : 'Agregar'"/>
                <button-cancel v-show="editando" @click="cleanInputs()" content="Cancelar Edicion"/>
            </div>

        </div>
        <!--//////////////Tabla de inventario////////////////////-->
        <div>
            <table id="pedidos" class="table-fixed align-middle content-center mx-auto my-10 w-4/6 h-2/4">
                <thead>
                    <tr>
                        <th class="border-2 px-2 py-2">#</th>
                        <th class="border-2 px-2 py-2">Id</th>
                        <th class="border-2 px-4 py-2">Tipo Producto</th>
                        <th class="border-2 px-4 py-2">Marca</th>
                        <th class="border-2 px-4 py-2">Descripción</th>
                        <th class="border-2 px-4 py-2">Cantidad</th>
                        <th class="border-2 px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(producto, k) in Productos" :key="k">
                        <td class="text-center border-2 px-2 py-4">{{k+1}}</td>
                        <td class="text-center border-2 px-2 py-4">{{producto.Id}}</td>
                        <td class="text-center border-2 px-2 py-4">{{producto.TipoProducto}}</td>
                        <td class="text-center border-2 px-2 py-4">{{producto.Marca}}</td>
                        <td class="text-center border-2 px-2 py-4">{{producto.Descripcion}}</td>
                        <td class="text-center border-2 px-2 py-4">{{producto.Cantidad}}</td>
                        <td class="text-center border-2 px-2 py-4">
                            <button @click="selectUpdate(k)"><icon-edit/></button>
                            <button @click="popUpConfirmation(k)"><icon-delete/></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    <!--//////////////Ventana confirmaicon para eliminar////////////////////-->
    <div class="absolute bottom-auto content-center z-50 w-96 p-10 border rounded-md mx-auto my-auto inset-0 bg-gray-100 top-80" v-show="deleteProducto">
        <p>¿Esta seguro de que desea borrar el resgistro?</p>
        <div class="text-white mt-5 w-full">
            <button-acept @click="confirmDelete(true)" content="Si"/>
            <button-cancel @click="confirmDelete(false)" content="No"/>
        </div>
    </div>
    </div>    
</template>

<script>
import IconDelete from '@/assets/IconDelete.vue'
import IconEdit from '@/assets/IconEdit.vue'
import InputV from '@/components/Layout/Inputs.vue'
import ButtonAcept from '@/components/Layout/ButtonAccept.vue'
import ButtonCancel from '@/components/Layout/ButtonCancel.vue'

export default {
    name: 'InventaryTable',
    components:{
        IconDelete,
        IconEdit,
        InputV,
        ButtonAcept,
        ButtonCancel
        
    },
    data() {
        return {
            key: '',
            TipoProducto: '',
            Marca: '',
            Descripcion: '',
            Cantidad: '',
            validar: false,
            msg: 'error',
            deleteProducto: false,
            editando: false,
            Productos: [
                {
                    Id: 1,
                    TipoProducto: 'Pendrive',
                    Marca: 'kingstone',
                    Descripcion: '128 GB',
                    Cantidad: '50'
                },
                {
                    Id: 2,
                    TipoProducto: 'Pendrive',
                    Marca: 'hp',
                    Descripcion: '128 GB',
                    Cantidad: '70'
                },
                {
                    Id: 3,
                    TipoProducto: 'Pendrive',
                    Marca: 'kingstone',
                    Descripcion: '64 GB',
                    Cantidad: '60'
                },
                {
                    Id: 4,
                    TipoProducto: 'Pendrive',
                    Marca: 'kingstone',
                    Descripcion: '256 GB',
                    Cantidad: '30'
                },
                {
                    Id: 5,
                    TipoProducto: 'Pendrive',
                    Marca: 'Microsoft',
                    Descripcion: '128 GB',
                    Cantidad: '50'
                }
            ]
        }
    },
    methods: {
        popUpConfirmation(k){
            console.log('entro dos')
            this.key = k;
            this.deleteProducto=true
        },
        confirmDelete(verificar){
            if(verificar){
                this.deleteElement(this.key);
            } else{
                this.key = '';
                this.deleteProducto = false;
            }
        },
        deleteElement(k){
            this.Productos.splice(k,1);
            this.key = '';
            this.deleteProducto = false;
        },

        addElement(){
            console.log('add')
            if(this.validateInputs()){
                var producto = new Object();
                producto.Id = this.Productos.length+1;
                producto.TipoProducto = this.TipoProducto;
                producto.Marca = this.Marca;
                producto.Descripcion = this.Descripcion;
                producto.Cantidad = this.Cantidad;
                
                this.cleanInputs();

                return this.Productos.push(producto);
            } else{
                this.validar = true;
                this.msg = 'Todos los campos son requeridos';
            }
        },

        cleanInputs(){
            // Limpiando inputs
            this.TipoProducto = '';
            this.Marca = '';
            this.Descripcion = '';
            this.Cantidad = '';
            this.key = '';
            this.editando = false;
            if(this.validar == true){
                console.log('cambiando validar')
                this.validar = false;
            }
        },

        selectUpdate(k){
            this.editando = true;
            this.key = k;
            this.TipoProducto = this.Productos[k].TipoProducto;
            this.Marca = this.Productos[k].Marca;
            this.Descripcion = this.Productos[k].Descripcion;
            this.Cantidad = this.Productos[k].Cantidad;
        },

        updateInventary(){
            var k = this.key;
            if(this.validateInputs() == true){
                this.Productos[k].TipoProducto = this.TipoProducto;
                this.Productos[k].Marca = this.Marca;
                this.Productos[k].Descripcion = this.Descripcion;
                this.Productos[k].Cantidad = this.Cantidad;
            
                this.cleanInputs();
            } else{
                this.validar = true;
                this.msg = 'Todos los campos son requeridos';
            }

        },

        validateInputs(){
            if(this.TipoProducto == '' ||
            this.Marca == '' ||
            this.Descripcion == '' ||
            this.Cantidad == ''){
                console.log('entro a false')
                return false
            } else{
                console.log('entro a true')
                return true
            }
        }
    },
}
</script>