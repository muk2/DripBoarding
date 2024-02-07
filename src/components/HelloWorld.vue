<template>
  <div class="ecommerce">
    <h1>Welcome to Fractal</h1>
    <div class="product-list">
      <div v-for="(product, index) in products" :key="index" class="product-card">
        <img :src="product.image" alt="Product Image" class="product-image">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
    <h2>Your Shopping Cart</h2>
    <div class="cart">
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <p>{{ item.name }}</p>
        <p>Price: ${{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/components/firebaseInit.js";
 // Adjust the path as necessary
import { collection, getDocs } from "firebase/firestore";

export default {
  name: 'EcommercePage',
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  async created() {
    await this.fetchProducts();
  },
  methods: {

    async fetchProducts() {
  try {
    console.log(this.products)
    const querySnapshot = await getDocs(collection(db, "Accessories"));
    console.log("Documents:", querySnapshot.docs);
    this.products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().Name,
      description: doc.data().Description,
      price: doc.data().Price,
      image: doc.data().Image,
    }));
    console.log(this.products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
},


    
/*
    async fetchProducts() {
      const querySnapshot = await getDocs(collection(db, "products"));
      this.products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    },
*/


    addToCart(product) {
      this.cart.push(product);
    },
  },
};




/*

export default {
  name: 'EcommercePage',
  data() {
    return {
      products: [
        {
          name: 'Poori GAAND',
          description: 'Description of Product 1',
          price: 19.99,
          image: 'product1.jpg',
        },
        {
          name: 'Product 2',
          description: 'Description of Product 2',
          price: 29.99,
          image: 'product2.jpg',
        },
        {
          name: 'Product 3',
          description: 'Description of Product 3',
          price: 69.99,
          image: 'product3.jpg',
        }
        // Add more products here
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
  },
};

*/


</script>

<style scoped>
h1 {
  text-align: center;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.product-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  text-align: center;
  width: 250px;
}
.product-image {
  max-width: 100%;
  height: auto;
}
button {
  background-color: #42b983;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
.cart {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.cart-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  width: 200px;
}
</style>
