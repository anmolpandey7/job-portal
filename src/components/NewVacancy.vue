<template>
  <div>
    <div class="box">
      <h1 class="title is-5">Create a vacancy</h1>
      <form @submit.prevent="handleSubmit">
        <input
          v-model="form.title"
          class="input is-info"
          type="text"
          placeholder="Job-title"
          required
        />
        <input
          v-model="form.company"
          class="input is-info"
          type="text"
          placeholder="Company name"
          required
        />
        <input
          v-model="form.city"
          class="input is-info"
          type="text"
          placeholder="City name"
          required
        />
        <textarea
          v-model="form.description"
          class="input is-info"
          type="text"
          placeholder="Description"
          required
        ></textarea>
        <button class="button is-primary">Create Job</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        company: "",
        city: "",
        description: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("save", { ...this.form, id: new Date().getTime().toString() });

      for (let key in this.form) {
        this.form[key] = "";
      }
    },
  },
};
</script>

<style scoped>
input,
textarea {
  margin-bottom: 20px;
}
</style>
