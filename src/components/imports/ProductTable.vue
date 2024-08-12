<template>
  <div class="flex mx-6 py-2">
    <div class="bg-white p-6 rounded-lg shadow-lg flex-6 mr-4">
      <h2 class="text-2xl font-bold mb-4">Furniture Overview</h2>
      <div class="flex justify-around">
        <div class="text-center">
          <img
            src="../../assets/Table.jpg"
            class="bg-white p-6 rounded-lg w-24 h-24"
          />
          <div class="flex justify-around mt-4">
            <p class="text-lg font-semibold mr-8">82</p>
            <p class="text-lg text-gray-600 font-semibold">In Office</p>
          </div>
        </div>
        <div class="text-center">
          <img
            src="../../assets/Table.jpg"
            class="bg-white p-6 rounded-lg w-24 h-24"
          />
          <div class="flex justify-around mt-4">
            <p class="text-lg font-semibold mr-8">82</p>
            <p class="text-lg text-gray-600 font-semibold">In Office</p>
          </div>
        </div>
        <div class="text-center">
          <img
            src="../../assets/Table.jpg"
            class="bg-white p-6 rounded-lg w-24 h-24"
          />
          <div class="flex justify-around mt-4">
            <p class="text-lg font-semibold mr-8">82</p>
            <p class="text-lg text-gray-600 font-semibold">In Office</p>
          </div>
        </div>
        <div class="text-center">
          <img
            src="../../assets/Table.jpg"
            class="bg-white p-6 rounded-lg w-24 h-24"
          />
          <div class="flex justify-around mt-4">
            <p class="text-lg font-semibold mr-8">82</p>
            <p class="text-lg text-gray-600 font-semibold">In Office</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg flex-4">
      <h2 class="text-2xl font-bold mb-4 text-center">Product Summary</h2>
      <div class="flex justify-evenly">
        <div>
          <img
            src="../../assets/image/profile_user.png"
            class="bg-white p-6 rounded-lg shadow-lg w-24 h-24"
          />
          <p class="text-lg font-semibold text-center">31</p>
          <p class="text-sm text-gray-600 text-center">User</p>
        </div>
        <div>
          <img
            src="../../assets/image/5919663.png"
            class="bg-white p-6 rounded-lg shadow-lg w-24 h-24"
          />
          <p class="text-lg font-semibold text-center">2</p>
          <p class="text-sm text-gray-600 text-center">Categories</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex mx-6  py-2">
    <div class="bg-white p-6 rounded-lg shadow-lg flex-6 mr-4">
      <h2 class="text-2xl font-bold mb-4">Furniture Overview</h2>
      <div class="flex justify-around">
        <div class="text-center">
          <img
            src="../../assets/Table.jpg"
            class="bg-white p-6 rounded-lg w-24 h-24"
          />
          <div class="flex justify-around mt-4">
            <p class="text-lg font-semibold mr-8">82</p>
            <p class="text-lg text-gray-600 font-semibold">In Office</p>
          </div>
        </div>
        <div class="text-center">
          <img
            src="../../assets/Table.jpg"
            class="bg-white p-6 rounded-lg w-24 h-24"
          />
          <div class="flex justify-around mt-4">
            <p class="text-lg font-semibold mr-8">82</p>
            <p class="text-lg text-gray-600 font-semibold">In Office</p>
          </div>
        </div>
        <div class="text-center">
          <img
            src="../../assets/Table.jpg"
            class="bg-white p-6 rounded-lg w-24 h-24"
          />
          <div class="flex justify-around mt-4">
            <p class="text-lg font-semibold mr-8">82</p>
            <p class="text-lg text-gray-600 font-semibold">In Office</p>
          </div>
        </div>
        <div class="text-center">
          <img
            src="../../assets/Table.jpg"
            class="bg-white p-6 rounded-lg w-24 h-24"
          />
          <div class="flex justify-around mt-4">
            <p class="text-lg font-semibold mr-8">82</p>
            <p class="text-lg text-gray-600 font-semibold">In Office</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg flex-4">
      <h2 class="text-2xl font-bold mb-4 text-center">Product Summary</h2>
      <div class="flex justify-evenly">
        <div>
          <img
            src="../../assets/image/profile_user.png"
            class="bg-white p-6 rounded-lg shadow-lg w-24 h-24"
          />
          <p class="text-lg font-semibold text-center">31</p>
          <p class="text-sm text-gray-600 text-center">User</p>
        </div>
        <div>
          <img
            src="../../assets/image/5919663.png"
            class="bg-white p-6 rounded-lg shadow-lg w-24 h-24"
          />
          <p class="text-lg font-semibold text-center">2</p>
          <p class="text-sm text-gray-600 text-center">Categories</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex mx-6 py-2">
    <section class="flex-5  bg-white p-6 rounded-lg shadow-lg">
      <div class="container mx-auto">
        <div class="flex justify-between items-conter mb-4">
          <h2 class="text-x1 font-semibold">Product Inform</h2>
          <a href="#" class="text-blue-500">See All</a>
        </div>
        <div
          v-for="product in products"
          :key="product.id"
          class="flex item-center mb-4 border-b pb-4"
        >
          <img src="../../assets/Laptop.png" class="w-16 h-16 mr-4" />
          <div class="flex-1">
            <p class="font-semibold">{{ product.name }}</p>
            <p class="text-sm text-gray-500">{{ product.dsecription }}</p>
            <p class="text-sm text-gray-500">{{ product.quantity }}</p>
          </div>
          <p class="text-red-500 font-semibold">{{ product.status }}</p>
        </div>
      </div>
    </section>
    <section class="flex-5 ml-10 bg-white p-6 rounded-lg shadow-lg">
      <div class="container mx-auto">
        <div class="flex justify-between items-conter mb-4">
          <h2 class="text-x1 font-semibold">Product Inform</h2>
          <a href="#" class="text-blue-500">See All</a>
        </div>
        <div
          v-for="product in products"
          :key="product.id"
          class="flex item-center mb-4 border-b pb-4"
        >
          <img src="../../assets/Laptop.png" class="w-16 h-16 mr-4" />
          <div class="flex-1">
            <p class="font-semibold">{{ product.name }}</p>
            <p class="text-sm text-gray-500">{{ product.dsecription }}</p>
            <p class="text-sm text-gray-500">{{ product.quantity }}</p>
          </div>
          <p class="text-red-500 font-semibold">{{ product.status }}</p>
        </div>
      </div>
    </section>
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