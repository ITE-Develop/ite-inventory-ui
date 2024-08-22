<template>
  <div class="flex justify-between">
    <div class="card-body w-full">
      <h2 class="text-2xl font-bold mb-4 ml-4 mt-4">Overall Inventory</h2>
      <div class="flex px-4 space-x-5">
        <div class="bg-white p-4 rounded-md shadow-md grow">
          <h2 class="text-lg font-semibold text-blue-700 text-center">Categories</h2>
          <h2 class="text-2xl">2</h2>
          <h2 class="text-sm">Last 7 Days</h2>
        </div>

        <div class="bg-white p-4 rounded-md shadow-md grow">
          <h2 class="text-lg font-semibold text-orange-700 text-center">Total Products</h2>
          <div class="mt-2 space-y-2">
            <div class="flex px-4 space-x-8">
              <div>
                <h2 class="text-xl">868</h2>
                <h2 class="text-sm">Electronic</h2>
              </div>
              <div>
                <h2 class="text-xl">25000</h2>
                <h2 class="text-sm">Furniture</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-4 grow">
          <h2 class="text-lg font-semibold text-purple-700 text-center">In Person</h2>
          <div class="mt-2 space-y-2">
            <div class="flex px-4 space-x-8">
              <div>
                <h2 class="text-xl">5</h2>
                <h2 class="text-sm">Laptop</h2>
              </div>
              <div>
                <h2 class="text-xl">9</h2>
                <h2 class="text-sm">IMac M1</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-4 rounded-md shadow-md grow">
          <h2 class="text-lg font-semibold text-red-700 text-center">In Stocks</h2>
          <div class="mt-2 space-y-2">
            <div class="flex px-4 space-x-8 justify-evenly">
              <div>
                <h2 class="text-xl">12</h2>
                <h2 class="text-xl2 font-semibold">Laptop</h2>
              </div>
              <div>
                <h2 class="text-xl">2</h2>
                <h2 class="text-sm">IMac M1</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-between mt-5">
    <div class="card-body w-full">
      <div class="bg-white overflow-hidden p-4">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">Product</h2>
          <div class="flex px-4 space-x-5 justify-end">
            <router-link to="/add-product">
              <button
              class="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Add Product
            </button>
            </router-link>

            <button
              class="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Filters
            </button>
            <button
              class="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Download all
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card-body">
    <table class="py-2 text-center w-full">
      <thead>
        <tr>
          <th class="border border-slate-300 py-2 text-center">
            Products Name
          </th>
          <th class="border border-slate-300 py-2 text-center">
            Description/Specification (Include Serial/Model No.)
          </th>
          <th class="border border-slate-300 py-2 text-center">Purchase</th>
          <th class="border border-slate-300 py-2 text-center">Quantity</th>
          <th class="border border-slate-300 py-2 text-center">User</th>
          <th class="border border-slate-300 py-2 text-center">Image</th>
          <th class="border border-slate-300 py-2 text-center">Location</th>
          <th class="border border-slate-300 py-2 text-center">Code</th>
          <th class="border border-slate-300 py-2 text-center">Availability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="border border-slate-300 py-2 text-center font-light">
            IMac
          </th>
          <th class="border border-slate-300 py-2 text-center font-light">
            Automatic Hand Dryer/Product Code: EcoFast (SRA) /220617003
          </th>
          <th class="border border-slate-300 py-2 text-center font-light">
            08-02-2022
          </th>
          <th class="border border-slate-300 py-2 text-center font-light">1</th>
          <th class="border border-slate-300 py-2 text-center font-light">
            sophavin
          </th>

          <th class="border border-slate-300 py-2 text-center font-light">
            <img
              src="../../assets/iMac.png"
              class="max-w-xs h-16 ml-5"
            />
          </th>
          <th class="border border-slate-300 py-2 text-center font-light">
            1st
          </th>
          <th class="border border-slate-300 py-2 text-center font-light">
            HEIP-MT800008
          </th>
          <th
            class="border border-slate-300 py-2 text-center font-light text-emerald-400"
          >
            In-Person
          </th>
        </tr>
      </tbody>
    </table>
  </div>
  <div></div>
</template>

<script>
</script>