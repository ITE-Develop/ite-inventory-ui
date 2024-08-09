<template>
  <div class="bg-white p-4 rounded-lg shadow-md mb-4">
    <h2 class="text-xl font-semibold mb-2">Products Electronic list</h2>
    <table class="min-w-full">
      <thead>
        <tr>
          <th class="px-4 py-2">Products Name</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Quantity</th>
          <th class="px-4 py-2">User</th>
          <th class="px-4 py-2">Location</th>
          <th class="px-4 py-2">Product Image</th>
          <th class="px-4 py-2">Code</th>
          <th class="px-4 py-2">Purchase Date</th>
          <th class="px-4 py-2">Availability</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.code">
          <td class="border px-4 py-2">{{ item.name }}</td>
          <td class="border px-4 py-2">{{ item.description }}</td>
          <td class="border px-4 py-2">{{ item.quantity }}</td>
          <td class="border px-4 py-2">{{ item.user }}</td>
          <td class="border px-4 py-2">{{ item.location }}</td>
          <td class="border px-4 py-2">
            <img class="h-16 w-16 ml-20" src="../../assets/iMac.png" alt="" />
          </td>
          <td class="border px-4 py-2">{{ item.code }}</td>
          <td class="border px-4 py-2">{{ item.purchaseDate }}</td>
          <td class="border px-4 py-2">{{ item.availability }}</td>
        </tr>
      </tbody>
      <tbody>
        <tr v-for="item in items" :key="item.code">
          <td class="border px-4 py-2">{{ item.name }}</td>
          <td class="border px-4 py-2">{{ item.description }}</td>
          <td class="border px-4 py-2">{{ item.quantity }}</td>
          <td class="border px-4 py-2">{{ item.user }}</td>
          <td class="border px-4 py-2">{{ item.location }}</td>
          <td class="border px-4 py-2">
            <img class="h-16 w-16 ml-20" src="../../assets/iMac.png" alt="" />
          </td>
          <td class="border px-4 py-2">{{ item.code }}</td>
          <td class="border px-4 py-2">{{ item.purchaseDate }}</td>
          <td class="border px-4 py-2">{{ item.availability }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
export default {
  name: "ElectronicList",
  data() {
    return {
      items: [
        {
          name: "IMac M1",
          description: "All in one",
          quantity: 1,
          user: "Mai Reaksa",
          location: "STEM 302",
          productImage: "HEIP22-MB60033",
          code: "HEIP22-MB60033",
          purchaseDate: "11/12/22",
          availability: "In-stock",
        },
      ],
    };
  },
};
</script>
  