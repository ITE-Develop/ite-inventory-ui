<template>
  <div class="container mx-auto py-8">
    <div class="flex flex-nowrap">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Electronics Overview</h2>
        <div class="grid grid-cols-5 gap-4">
          <div class="text-center">
            <img src="../assets/iMac.png" class="w-16 md:w-32 lg:w-48" />
            <p class="text-lg font-semibold">832</p>
            <p class="text-sm text-gray-600">Product User</p>
          </div>
          <div class="text-center">
            <img
              src="../assets/iMac.png"
              class="bg-white rounded-lg shadow-lg"
            />
            <p class="text-lg font-semibold">18,300</p>
            <p class="text-sm text-gray-600">Broken</p>
          </div>
          <div class="text-center">
            <img
              src="../assets/Laptop.jpg"
              class="bg-white rounded-lg shadow-lg"
            />
            <p class="text-lg font-semibold">832</p>
            <p class="text-sm text-gray-600">Product User</p>
          </div>
          <div class="text-center">
            <img
              src="../assets/Laptop.jpg"
              class="bg-white rounded-lg shadow-lg"
            />
            <p class="text-lg font-semibold">17,432</p>
            <p class="text-sm text-gray-600">Broken</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Inventory Summary</h2>
        <div class="grid grid-cols-5 gap-4">
          <div class="text-center">
            <img
              src="../assets/Laptop.jpg"
              class="bg-white p-6 rounded-lg shadow-lg"
            />
            <p class="text-lg font-semibold">868</p>
            <p class="text-sm text-gray-600">Quantity in Hand</p>
          </div>
          <div class="text-center">
            <img
              src="../assets/Table.jpg"
              class="bg-white p-6 rounded-lg shadow-lg"
            />
            <p class="text-lg font-semibold">832</p>
            <p class="text-sm text-gray-600">Product User</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto py-8">
    <div class="flex flex-nowrap">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Furniture Overview</h2>
        <div class="grid grid-cols-5 gap-4">
          <div class="text-center">
            <img
              src="../assets/Table.jpg"
              class="bg-white p-6 rounded-lg shadow-lg"
            />
            <p class="text-lg font-semibold">82</p>
            <p class="text-sm text-gray-600">In Office</p>
          </div>
          <div class="text-center">
            <img
              src="../assets/Table.jpg"
              class="bg-white p-6 rounded-lg shadow-lg"
            />
            <p class="text-lg font-semibold">13,573</p>
            <p class="text-sm text-gray-600">Lost</p>
          </div>
          <div class="text-center">
            <img
              src="../assets/chair.jpg"
              class="bg-white p-6 rounded-lg shadow-lg"
            />
            <p class="text-lg font-semibold">5</p>
            <p class="text-sm text-gray-600">In Lab</p>
          </div>
          <div class="text-center">
            <img
              src="../assets/chair.jpg"
              class="bg-white p-6 rounded-lg shadow-lg"
            />
            <p class="text-lg font-semibold">17,432</p>
            <p class="text-sm text-gray-600">Lost</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Product Summary</h2>
        <div class="grid grid-cols-5 gap-4">
          <div class="text-center">
            <img
              src="../assets/profile.jpg"
              class="bg-white p-6 rounded-lg shadow-lg"
            />
            <p class="text-lg font-semibold">31</p>
            <p class="text-sm text-gray-600">Number of User</p>
          </div>
          <div class="text-center">
            <img
              src="../assets/List1.jpg"
              class="bg-white p-6 rounded-lg shadow-lg"
            />
            <p class="text-lg font-semibold">2</p>
            <p class="text-sm text-gray-600">Number of Categories</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex-flex-nowrap">
    <div class="container mx-auto py-8">
      <div class="flex justify-between items-conter mb-4">
        <h2 class="text-x1 font-semibold">Product Inform</h2>
        <a href="#" class="text-blue-500">See All</a>
      </div>
      <div
        v-for="product in products"
        :key="product.id"
        class="flex item-center mb-4 border-b pb-4"
      >
        <img src="../assets/Laptop.jpg" class="w-16 h-16 mr-4" />
        <div class="flex-1">
          <p class="font-semibold">{{ product.name }}</p>
          <p class="text-sm text-gray-500">{{ product.dsecription }}</p>
          <p class="text-sm text-gray-500">{{ product.quantity }}</p>
        </div>
        <p class="text-red-500 font-semibold">{{ product.status }}</p>
      </div>
    </div>
    <div class="container mx-auto py-8">
      <div class="flex justify-between items-conter mb-4">
        <h2 class="text-x1 font-semibold">Product Inform</h2>
        <a href="#" class="text-blue-500">See All</a>
      </div>
      <div
        v-for="product in products"
        :key="product.id"
        class="flex item-center mb-4 border-b pb-4"
      >
        <img src="../assets/Laptop.jpg" class="w-16 h-16 mr-4" />
        <div class="flex-1">
          <p class="font-semibold">{{ product.name }}</p>
          <p class="text-sm text-gray-500">{{ product.dsecription }}</p>
          <p class="text-sm text-gray-500">{{ product.quantity }}</p>
        </div>
        <p class="text-red-500 font-semibold">{{ product.status }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductTable",
  data() {
    return {
      products: [
        {
          id: 1,
          image: "/assets/Laptop.jpg",
          name: "Tata Salt",
          dsecription: "Remaining Quantity: 10 Packet",
          quantity: "",
          status: "Low",
        },
        {
          id: 2,
          image: "/assets/Laptop.jpg",
          name: "IMac M1",
          dsecription: "Move to NICC for staff provide by Dr.Vila",
          quantity: "",
          status: "",
        },
        {
          id: 3,
          image: "/assets/Laptop.jpg",
          name: "Tata Salt",
          dsecription: "Remaining Quantity: 15 Packet",
          quantity: "",
          status: "Low",
        },
      ],
    };
  },
};
</script>