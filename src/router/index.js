import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DemoView01 from "../views/DemoView01.vue";
import DemoView02 from "../views/DemoView02.vue";
import DemoView03 from "../views/DemoView03.vue";
import DemoView04 from "../views/DemoView04.vue";
import DemoView05 from "../views/DemoView05.vue";
import DemoView06 from "../views/DemoView06.vue";
import DemoView07 from "../views/DemoView07.vue";
import DemoView08 from "../views/DemoView08.vue";
import DemoView09 from "../views/DemoView09.vue";
import DemoView10 from "../views/DemoView10.vue";
import DemoView11 from "../views/DemoView11.vue";
import DemoView12 from "../views/DemoView12.vue";
import DemoView13 from "../views/DemoView13.vue";
import DemoView14 from "../views/DemoView14.vue";
import DemoView15 from "../views/DemoView15.vue";
import DemoView16 from "../views/DemoView16.vue";
import DemoView17 from "../views/DemoView17.vue";
import DemoView18 from "../views/DemoView18.vue";
import DemoView19 from "../views/DemoView19.vue";
import DemoView20 from "../views/DemoView20.vue";
import DemoCRUDResfulAPI from "../views/DemoCRUDResfulAPI.vue";
import DemoImportExcel from "../views/DemoImportExcel.vue";
import DemoImportExcel2 from "../views/DemoImportExcel2.vue";
import DemoJsPDF from "../views/DemoJsPDF.vue";
import DemoPayinSlip from "../views/DemoPayinSlip.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/DemoView01",
    name: "DemoView01",
    component: DemoView01,
  },
  {
    path: "/DemoView02",
    name: "DemoView02",
    component: DemoView02,
  },
  {
    path: "/DemoView03",
    name: "DemoView03",
    component: DemoView03,
  },
  {
    path: "/DemoView04",
    name: "DemoView04",
    component: DemoView04,
  },
  {
    path: "/DemoView05",
    name: "DemoView05",
    component: DemoView05,
  },
  {
    path: "/DemoView06",
    name: "DemoView06",
    component: DemoView06,
  },
  {
    path: "/DemoView07",
    name: "DemoView07",
    component: DemoView07,
  },
  {
    path: "/DemoView08",
    name: "DemoView08",
    component: DemoView08,
  },
  {
    path: "/DemoView09",
    name: "DemoView09",
    component: DemoView09,
  },
  {
    path: "/DemoView10",
    name: "DemoView10",
    component: DemoView10,
  },
  {
    path: "/DemoView11",
    name: "DemoView11",
    component: DemoView11,
  },
  {
    path: "/DemoView12",
    name: "DemoView12",
    component: DemoView12,
  },
  {
    path: "/DemoView13",
    name: "DemoView13",
    component: DemoView13,
  },
  {
    path: "/DemoView14",
    name: "DemoView14",
    component: DemoView14,
  },
  {
    path: "/DemoView15",
    name: "DemoView15",
    component: DemoView15,
  },
  {
    path: "/DemoView16",
    name: "DemoView16",
    component: DemoView16,
  },
  {
    path: "/DemoView17",
    name: "DemoView17",
    component: DemoView17,
  },
  {
    path: "/DemoView18",
    name: "DemoView18",
    component: DemoView18,
  },
  {
    path: "/DemoView19",
    name: "DemoView19",
    component: DemoView19,
  },
  {
    path: "/DemoView20",
    name: "DemoView20",
    component: DemoView20,
  },
  {
    path: "/DemoCRUDResfulAPI",
    name: "DemoCRUDResfulAPI",
    component: DemoCRUDResfulAPI,
  },
  {
    path: "/DemoImportExcel",
    name: "DemoImportExcel",
    component: DemoImportExcel,
  },
  {
    path: "/DemoImportExcel2",
    name: "DemoImportExcel2",
    component: DemoImportExcel2,
  },
  {
    path: "/DemoJsPDF",
    name: "DemoJsPDF",
    component: DemoJsPDF,
  },
  {
    path: "/DemoPayinSlip",
    name: "DemoPayinSlip",
    component: DemoPayinSlip,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
