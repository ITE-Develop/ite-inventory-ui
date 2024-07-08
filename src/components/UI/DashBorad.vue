<script setup>
import { mapState } from "vuex";
import { computed } from "vue";

import Sidebar from "./SideBar.vue";
import Navbar from "./NavBar.vue";
import Footer from "./Footer.vue";

computed({
  ...mapState(["sideBarOpen"]),
});
</script>
<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <Sidebar />

      <div
        class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"
        :class="sideBarOpen ? 'overlay' : ''"
        id="main-content"
      >
        <Navbar />

        <div class="p-6 bg-gray-100 mb-20">
          <router-view />
        </div>

        <Footer />
      </div>
    </div>
  </div>
</template>

<!-- <script>
import { mapState } from "vuex";
import Sidebar from "./SideBar.vue";
import Navbar from "./NavBar.vue";
import Footer from "./Footer.vue";
import { computed } from "vue";
export default {
  setup() {
    Navbar,
      Sidebar,
      Footer,
      computed({
        ...mapState(["sideBarOpen"]),
      });
  },
};
</script>

<script>
import { mapState } from "vuex";

import Sidebar from "./SideBar.vue";
import Navbar from "./NavBar.vue";
import Footer from "./Footer.vue";

export default {
  name: "Dashboard",
  computed: {
    ...mapState(["sideBarOpen"]),
  },
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
};
</script> -->