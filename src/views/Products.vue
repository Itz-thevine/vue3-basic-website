<template>
     <main class="wrapper">
        <h1>Products</h1>

        <div class="card-container">
          <ProductCart 
            v-for="(products, i) in inventory" 
            :key="i" 
            class="card"
            :i = 'i'
            :products='products'
            :addToCart='addToCart'
          />
        </div>
      </main>
</template>

<script>

import ProductCart from '@/components/ProductCart.vue'

export default {
  props: ['inventory', 'addToCart'],
  components: {
    ProductCart
  }
}
</script>