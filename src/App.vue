<template>
   <header class="top-bar spread">
      <nav class="top-bar-nav">
        <router-link to="/" class="top-bar-link">
          <i class="icofont-spoon-and-fork"></i>
          <span>Home</span>
        </router-link>
        <router-link to="/products" class="top-bar-link">
          <span>Products</span>
        </router-link>
        <router-link to="/orders" class="top-bar-link">
          <span>Past Orders</span>
        </router-link>
      </nav>
      <div class="top-bar-cart-link" @click="toggleSideBar">
        <i class="icofont-cart-alt icofont-1x"></i>
        <span>Cart ({{ totalQuantity }})</span>
      </div>
      </header>  
      <router-view :inventory='inventory' :addToCart='addToCart'/>

      <Sidebar
        v-if="showSideBar"
        :toggle="toggleSideBar" 
        :cart="cart"
        :inventory="inventory"
        :remove="removeItem"
      />

</template>

<script>
  import Sidebar from '@/components/Sidebar.vue'
  import Food from './food.json'

  export default{
    components: {
      Sidebar
    },
    data(){
      return{
        showSideBar: false,
        inventory: Food,
        cart: {},
      }
    },
    computed:{
      totalQuantity(){
        return Object.values(this.cart).reduce((acc, curr)=> {
          return acc + curr
        }, 0)
      }
    },
    methods: {
      addToCart(name, quantity){
        if(!this.cart[name]){ this.cart[name]= 0}
        this.cart[name] += quantity
        // this.inventory[index].quantity = 0
      },
      toggleSideBar(){
        this.showSideBar = !this.showSideBar
      },
      removeItem(name){
      delete this.cart[name]
      }
    },
  }
</script>
