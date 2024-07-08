<script setup lang="ts">
import ElectronicsOverview from "../components/Card/ElectronicsOverview.vue";
import FurnitureOverview from "../components/Card/FurnitureOverview.vue";
import InventorySummary from "../components/Card/InventorySummary.vue";
import ProductSummary from "../components/Card/ProductSummary.vue";
import ProductInfo from "../components/Card/ProductInfo.vue";
import ElectronicList from "../components/Card/ElectronicList.vue";
</script>

<template>
  <div>
    <section class="flex">
      <div class="flex-6">
        <ElectronicsOverview />
      </div>
      <div class="flex-4">
        <FurnitureOverview />
      </div>
    </section>

    <InventorySummary />
    <ProductSummary />
    <ProductInfo />
    <ElectronicList />
  </div>
</template>