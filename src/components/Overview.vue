<template>
    <div class="text-center">
        <img src="../assets/iMac.png" class="bg-white p-6 rounded-lg shadow-lg" >  
      <p class="text-lg font-semibold">{{ count }}</p>
      <p class="text-sm text-gray-600">{{ label }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OverviewItem',
    props: {
      imgSrc:{
        type: String,
        required: true,
      },
      count: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
    },
  };
  </script>