<script setup>
import DrVila from "../../assets/staff/teacher_vila.jpg"
</script>
<template>
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
              User Name
            </th>
            <th class="border border-slate-300 py-2 text-center">
              Product
            </th>
            <th class="border border-slate-300 py-2 text-center">Contact Number</th>
            <th class="border border-slate-300 py-2 text-center">Date</th>
            <th class="border border-slate-300 py-2 text-center">CODE-Pro</th>
            <th class="border border-slate-300 py-2 text-center">Qty</th>
            <th class="border border-slate-300 py-2 text-center">Image</th>
            <th class="border border-slate-300 py-2 text-center">Position</th>
            <th class="border border-slate-300 py-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="border border-slate-300 py-2 text-center font-light">
              Dr. Vila
            </th>
            <th class="border border-slate-300 py-2 text-center font-light">
              Macbook
            </th>
            <th class="border border-slate-300 py-2 text-center font-light">
              08-02-2022
            </th>
            <th class="border border-slate-300 py-2 text-center font-light">1</th>
            <th class="border border-slate-300 py-2 text-center font-light">
              sophavin
            </th>
  
            <th class="border border-slate-300 py-2 text-center font-light">
              1
            </th>
            <th class="border border-slate-300 py-2 text-center font-light">
              <img
                  :src="DrVila"
                  class="max-w-xs h-16 ml-6"
              />
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
        <tbody>
        <tr>
          <th class="border border-slate-300 py-2 text-center font-light">
            Dr. Vila
          </th>
          <th class="border border-slate-300 py-2 text-center font-light">
            Macbook
          </th>
          <th class="border border-slate-300 py-2 text-center font-light">
            08-02-2022
          </th>
          <th class="border border-slate-300 py-2 text-center font-light">1</th>
          <th class="border border-slate-300 py-2 text-center font-light">
            sophavin
          </th>

          <th class="border border-slate-300 py-2 text-center font-light">
            1
          </th>
          <th class="border border-slate-300 py-2 text-center font-light">
            <img
                :src="DrVila"
                class="max-w-xs h-16 ml-6"
            />
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