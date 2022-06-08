<template>
    <div class="card">
        <div class="card-title">
            {{products.name}}
        </div>
        <div class="card-body">
            <i class="icofont-10x icofont-{{ products.icon }}"></i>
            <form>
            <div class="row">
                <div class="cell">
                <label>Type:</label>
                </div>
                <div class="cell">
                <em>{{products.type}}</em>
                </div>
            </div>
            <div class="row">
                <div class="cell">
                <label>Price:</label>
                </div>
                <div class="cell">
                ${{ products.price.USD}}
                </div>
            </div>
            <div class="row">
                <div class="cell">
                <label>Quantity:</label>
                </div>
                <div class="cell">
                <input type="number" v-model.number="quantity">
                </div>
            </div>
            </form>
        </div>
        <div class="card-footer">
            <button @click="addToCart(products.name, quantity)" class="btn btn-light">Add to cart</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['products', 'i', 'addToCart' ],
    data(){
        return {
            quantity: 0
        }
    }
}
</script>