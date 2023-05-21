<template>
  <div app="DemoView07">
    <h1>{{ title }}</h1>
    <form v-on:submit.prevent="submit">
    <!--<form v-on:submit="submit">-->

      <div>
        <label for="firstName">First Name:</label>
        <input type="text" name="firstName" v-model="applicant.firstName" />
      </div>

      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" name="lastName" v-model="applicant.lastName" />
      </div>

      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />

        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>

      <div>
        <select name="applicant" v-model="applicant.course">
          <option value="Angular">Angular</option>
          <option value="ReactJS">ReactJS</option>
          <option value="VueJS">VueJS</option>
        </select>
      </div>

      <button type="button" @click="clear">Clear</button>
      <button type="submit">Submit</button>

    </form>

    <div style="margin-top:16px; color:red;">
        #Display Debug {{ JSON.stringify(applicant) }}
    </div>
    
  </div>
</template>

<script>
export default {
  name: "DemoView07",
  data() {
    return {
      title: "#form",
      applicant:{
        firstName:"",
        lastName:"",
        sex:"",
        course:"",
      }
    };
},
    methods: {
 submit() {
    //submit(even) {
        //event.preventDefault();
        alert(JSON.stringify(this.applicant));
    },
    clear() {
        this.applicant={
        firstName:"",
        lastName:"",
        sex:"",
        course:""
    }
}
    }
}


</script>

<style></style>
