<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <p class="title">Find your dream job today.</p>
        <p class="subtitle">Apply for any vacancies below.</p>
      </div>
    </section>
    <NewVacancy v-if="isAdmin" @save="handleSubmit" />
    <VacancyComponent
      v-for="vacancy in vacancies"
      :key="vacancy.id"
      :isAdmin="isAdmin"
      :vacancy="vacancy"
      @delete="handleDelete"
    />
  </div>
</template>

<script>
import NewVacancy from "@/components/NewVacancy.vue";
import VacancyComponent from "@/components/VacancyComponent.vue";
import { vacancies } from "@/data";

export default {
  name: "HomeComponent",
  components: {
    NewVacancy,
    VacancyComponent,
  },
  data() {
    return {
      vacancies,
      isAdmin: true,
    };
  },
  methods: {
    handleSubmit(formdata) {
      this.vacancies.unshift(formdata);
      console.log("submit form", formdata);
    },
    handleDelete(vacancyId) {
      this.vacancies = this.vacancies.filter((vacancy) => vacancy.id != vacancyId);
    },
  },
};
</script>

<style></style>
