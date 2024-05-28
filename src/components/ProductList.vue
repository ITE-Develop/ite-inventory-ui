<template>
    <div class="w-full p-4">
        <div class="box bg-white shadow-lg rounded-lg overflow-hidden py-2 text-center">
            <div class="box-header bg-gray-100 p-4 font-bold border-b">
                Product List
            </div>
            <div class="card-body">
                <table class="py-2 text-center w-full">

                    <thead>
                        <tr>
                            <th class="border border-slate-300 py-2 text-center"> Products Name </th>
                            <th class="border border-slate-300 py-2 text-center">Description/Specification (Include
                                Serial/Model No. Country of Origin)</th>

                            <th class="border border-slate-300 py-2 text-center">Purchase</th>
                            <th class="border border-slate-300 py-2 text-center">Quantity</th>
                            <th class="border border-slate-300 py-2 text-center">User</th>
                            <th class="border border-slate-300 py-2 text-center">Image</th>
                            <th class="border border-slate-300 py-2 text-center">Location and Condition</th>
                            <th class="border border-slate-300 py-2 text-center">Code</th>
                            <th class="border border-slate-300 py-2 text-center">Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in products" :key="index" class="bg-white hover:bg-gray-100">
                            <td class="border border-slate-300 py-2 text-center">{{ product.name }}</td>
                            <td class="border border-slate-300 py-2 text-center">{{ product.Description }}</td>
                            <td class="border border-slate-300 py-2 text-center">{{ product.purchase }}</td>
                            <td class="border border-slate-300 py-2 text-center">{{ product.quantity }}</td>
                            <td class="border border-slate-300 py-2 text-center">{{ product.user }}</td>
                            <td class="border border-slate-300 py-2 text-center">
                                <img :src="product.image" class="w-16 h-16 abject-cover" />
                            </td>
                            <td class="border border-slate-300 py-2 text-center">{{ product.LocationCondition }}</td>
                            <td class="border border-slate-300 py-2 text-center">{{ product.code }}</td>
                            <td class="border border-slate-300 py-2 text-center">{{ product.Availability }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'ProductTable',
    data() {
        return {
            products: [
                {
                    name: 'IMac M1',
                    Description: 'Automatic Hand Dryer/Product Code EcoFast (SRA)/2206170003',
                    purchase: '08-02-2022 ',
                    quantity: '1',
                    user: 'WC',
                    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-imac-27-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1654865822599',
                    LocationCondition: '1stFloor',
                    code: 'HEIP-MT800008',
                    Availability: 'In-Person'
                },
                {
                    name: '',
                    Description: ' ',
                    purchase: '',
                    quantity: '',
                    user: '',
                    image: '',
                    LocationCondition: '',
                    code: '',
                    Availability: 'Out of stock'
                },
                {
                    name: '',
                    Description: ' ',
                    purchase: '',
                    quantity: '',
                    user: '',
                    image: '',
                    LocationCondition: '',
                    code: '',
                    Availability: 'In- stock'
                },
                {
                    name: '',
                    Description: ' ',
                    purchase: '',
                    quantity: '',
                    user: '',
                    image: '',
                    LocationCondition: '',
                    code: '',
                    Availability: 'Out of stock'
                },
                {
                    name: '',
                    Description: ' ',
                    purchase: '',
                    quantity: '',
                    user: '',
                    image: '',
                    LocationCondition: '',
                    code: '',
                    Availability: 'In- stock'
                },
                {
                    name: '',
                    Description: ' ',
                    purchase: '',
                    quantity: '',
                    user: '',
                    image: '',
                    LocationCondition: '',
                    code: '',
                    Availability: 'In- stock'
                },
                {
                    name: '',
                    Description: ' ',
                    purchase: '',
                    quantity: '',
                    user: '',
                    image: '',
                    LocationCondition: '',
                    code: '',
                    Availability: 'Out of stock'
                },
                {
                    name: '',
                    Description: ' ',
                    purchase: '',
                    quantity: '',
                    user: '',
                    image: '',
                    LocationCondition: '',
                    code: '',
                    Availability: 'In- stock'
                }
            ]
        }
    }
};
</script>
