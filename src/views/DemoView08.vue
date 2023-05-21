<template>
  <div app="DemoView08">
    <h1>{{ title }}</h1>
    <form v-on:submit.prevent="submit">
    <!-- prevent -->
       <div>
        <label for="firstName">First Name:</label>
        <input type="text" name="firstName" v-model.trim="applicant.firstName" />
          <!-- trim -->
      </div>

      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" name="lastName" v-model.lazy="applicant.lastName" />
          <!-- lazy -->
      </div>

      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />

        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model.number="applicant.sex" />
         <!-- number -->
      </div>

      <div>
        <label for="age">Age:</label>
        <input type="number" name="age" v-model="applicant.age" />
      </div>

      <div>
        <select name="applicant" v-model="applicant.course">
          <option value="Angular">Angular</option>
          <option value="ReactJS">ReactJS</option>
          <option value="VueJS">VueJS</option>
        </select>
      </div>

      <button type="button" @click="clear1">Clear1</button>
      <button type="button" @click.ctrl="clear2">Clear2</button>
      <button type="button" @click.exact="clear1" @click.ctrl="clear2">Clear3</button>
      <!-- exact &  ctrl-->
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
      title: "#Modifier",
      applicant:{
        firstName:"",
        lastName:"",
        sex:"",
        age:0,
        course:"",
      }
    };
},
methods: {
 submit() {
        alert(JSON.stringify(this.applicant));
    },
    clear1() {
        this.applicant={
        firstName:"",
        lastName:"",
        sex:"",
        course:""
    }
  },
    clear2() {
        this.applicant={
        firstName:"N/A",
        lastName:"N/A",
        sex:"",
        course:""
    }
  }
}
}


</script>

<style></style>
