<template>
  <div id="app">
    <h1>Danh sách bệnh viện</h1>
    <ul>
      <li v-for="hospital in hospitals" :key="hospital.id">
        {{ hospital.name }} - {{ hospital.address }}
      </li>
    </ul>

    <h2>Thêm bệnh viện mới</h2>
    <form @submit.prevent="addHospital">
      <input v-model="newHospital.name" placeholder="Tên bệnh viện" />
      <br/>
      <input v-model="newHospital.address" placeholder="Địa chỉ" />
      <br/>
      <button type="submit">Thêm</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      hospitals: [],
      newHospital: {
        name: "",
        address: "",
      },
    };
  },
  mounted() {
    this.fetchHospitals();
  },
  methods: {
    async fetchHospitals() {
      try {
        const response = await axios.get("http://localhost:3000/api/hospitals");
        this.hospitals = response.data;
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      }
    },
    async addHospital() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/hospitals",
          this.newHospital
        );
        this.hospitals.push(response.data);
        this.newHospital.name = "";
        this.newHospital.address = "";
      } catch (error) {
        console.error("Error adding hospital:", error);
      }
    },
  },
};
</script>
