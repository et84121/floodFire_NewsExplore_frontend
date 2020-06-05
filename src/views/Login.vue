<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-row style="height:30vh;" align-h="center" align-v="center">
        <h1>Login page</h1>
      </b-row>
      <b-row class="mt-3" align-h="center" align-v="center">
        <b-col cols="3">
          <h5>Email address:</h5>
        </b-col>
        <b-col cols="5">
          <b-form-group
            id="input-group-1"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row align-h="center" align-v="center">
        <b-col cols="3">
          <h5>password:</h5>
        </b-col>
        <b-col cols="5">
          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              required
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row align-h="center" align-v="center">
        <b-col>
          <b-button class="mx-1" type="submit" variant="primary">
            Login
          </b-button>
          <b-button class="mx-1" type="reset" variant="danger">Reset</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.email = "";
      this.form.password = "";
    }
  }
};
</script>

<style></style>
