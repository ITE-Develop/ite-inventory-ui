<template>
    <div class="container mx-auto py-8">

        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Overall Inventory</h2>
            <div class="grid grid-cols-5 gap-4">
                <div class="text-center">
                    <h2 class="text-blue-700 flex ">Categories</h2>
                    <p class="text-lg font-semibold flex">2</p>
                    <p class="text-sm text-gray-600 flex">Last 7 days</p>
                </div>
                <div class="text-center bg-slate-600">
                    <h2 class="text-orange-700 ">Total Product</h2>

                    <p class="text-lg font-semibold text-left">868</p>
                    <h class="text-sm text-gray-600 text-l">Electronic</h>
                    <p class="text-lg font-semibold text-right">25000</p>
                    <p class="text-sm text-gray-600 text-right">Furniture</p>

                </div>
                <div class="text-center bg-slate-300">
                    <h2 class="text-cyan-500">In Person</h2>
                    <div>
                        <p class="text-lg font-semibold">5</p>
                        <p class="text-lg font-semibold text-right">9</p>
                        <p class="text-lg text-gray-600">Laptop</p>
                        <p class="text-lg text-gray-600 text-right">IMac M1</p>
                    </div>

                </div>
                <div class="text-center">
                    <h2 class="text-red-700">In Stocks</h2>
                    <p class="text-lg font-semibold">12</p>
                    <p class="text-lg font-semibold">2</p>
                    <p class="text-sm text-gray-600">Laptop</p>
                    <p class="text-sm text-gray-600">IMac M1</p>
                </div>



            </div>
        </div>

    </div>
    <div class="container mx-auto py-8">

        <div class="box bg-white shadow-lg rounded-lg overflow-hidden">

            <h2 class="text-2xl font-bold mb-4">Product</h2>
            <button @click="addItem"
                class="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700  flex-nowarp">
                Add Product
            </button>


            <div class="card-body">
                <table class="py-2 text-center w-full">

                    <thead>
                        <tr>
                            <th class="border border-slate-300 py-2 text-center"> Products Name </th>
                            <th class="border border-slate-300 py-2 text-center">Description/Specification (Include
                                Serial/Model No. Country of Origin)</th>

                            <th class="border border-slate-300 py-2 text-center">Purchase</th>
                            <th class="border border-slate-300 py-2 text-center">Quantity</th>
                            <th class="border border-slate-300 py-2 text-center"> User</th>
                            <th class="border border-slate-300 py-2 text-center">Image</th>
                            <th class="border border-slate-300 py-2 text-center">Location</th>
                            <th class="border border-slate-300 py-2 text-center">Code</th>
                            <th class="border border-slate-300 py-2 text-center">Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="border border-slate-300 py-2 text-center font-light">IMac</th>
                            <th class="border border-slate-300 py-2 text-center font-light">Automatic Hand Dryer/Product
                                Code: EcoFast (SRA) /220617003</th>
                            <th class="border border-slate-300 py-2 text-center font-light">08-02-2022</th>
                            <th class="border border-slate-300 py-2 text-center font-light">1</th>
                            <th class="border border-slate-300 py-2 text-center font-light">sophavin</th>

                            <th class="border border-slate-300 py-2 text-center font-light"><img
                                    src="../assets/iMac.png" class="max-w-xs h-16 rounded-lg shadow-lg">
                            </th>
                            <th class="border border-slate-300 py-2 text-center font-light">1st</th>
                            <th class="border border-slate-300 py-2 text-center font-light ">HEIP-MT800008</th>
                            <th class="border border-slate-300 py-2 text-center font-light text-emerald-400">In-Person
                            </th>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>


</script>