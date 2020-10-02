<!-- Включение шаблона с разметной гипертекста -->
<template>
  <!-- Разбитие тэгов по классам Bootstrap -->
  <!-- Создание формы для заполнения описания и почты -->
  <form class="mt-3" @submit.prevent="handleEdit">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="card bg-light">
            <!-- Создание основного внутриформенного раздела -->
            <div class="card-body">
              <!-- Получение имени и фамилии выбранного контакта -->
              <h3 class="font-weight-light mb-3">
                {{ item.firstName }} {{ item.lastName }}
              </h3>
              <!-- Создание поля для добавления описания -->
              <section class="form-group">
                <label class="form-control-label sr-only" for="description">{{
                  this.description
                }}</label>
                <input
                  required
                  class="form-control"
                  type="text"
                  placeholder="Редактировать"
                  v-model="description"
                />
              </section>
              <!-- Создание поля для добавления почты -->
              <section class="form-group">
                <label class="form-control-label sr-only" for="email">{{
                  this.email
                }}</label>
                <input
                  required
                  class="form-control"
                  type="email"
                  placeholder="Редактировать"
                  v-model="email"
                />
              </section>
              <!-- Создание кнопки "Добавить" -->
              <div class="form-group text-right mb-0">
                <button class="btn btn-primary" type="submit">Добавить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
// Указание запрашиваемых параметров
export default {
  data: function () {
    return {
      firstName: null,
      lastName: null,
      description: null,
      email: null,
    };
  },
  methods: {
    // Настройка функции добавления описания и почты
    handleEdit: function () {
      this.$emit("info", {
        contactID: this.$route.params.contactID,
        description: this.description,
        email: this.email,
      });
      this.description = null;
      this.email = null;
    },
  },
  // Указание ключевого параметра с контактами
  props: ["contacts"],
};
</script>