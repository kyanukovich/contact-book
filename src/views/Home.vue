<!-- Включение шаблона с разметной гипертекста -->
<template>
  <!-- Разбитие тэгов по классам Bootstrap -->
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-7">
        <h1 class="font-weight-light text-center">Контактная Книга</h1>
        <div class="card bg-light">
          <div class="card-body text-center">
            <!-- Создание формы для добавления имен и фамилий -->
            <form class="formgroup">
              <div class="input-group input-group-lg">
                <!-- Создание поля для имени -->
                <input
                  type="text"
                  class="form-control"
                  name="firstName"
                  placeholder="Имя"
                  aria-describedby="buttonAdd"
                  v-model="firstName"
                  ref="firstName"
                />
                <!-- Создание поля для фамилии -->
                <input
                  type="text"
                  class="form-control"
                  name="lastName"
                  placeholder="Фамилия"
                  aria-describedby="buttonAdd"
                  v-model="lastName"
                  ref="lastName"
                />
                <!-- Создание кнопки "добавить" -->
                <div class="input-group-append">
                  <button
                    type="submit"
                    class="btn btn-sm btn-primary"
                    id="buttonAdd"
                    @click.prevent="handleAdd"
                  >
                    <!-- Добавление иконки плюса из библиотеки FontAwesome -->
                    <font-awesome-icon icon="plus"></font-awesome-icon>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Создание раздела с переченью контактов -->
    <div class="row justify-content-center">
      <div class="col-11 col-md-8 col-lg-6">
        <div class="card border-top-0 rounded-0">
          <div class="list-group list-group-flush">
            <!-- Создание полей с контактами -->
            <div
              class="list-group-item d-flex"
              v-for="item in contacts"
              :key="item.id"
            >
              <!-- Создание раздела с опциями -->
              <section
                class="btn-group align-self-center"
                role="group"
                aria-label="Contact Options"
              >
                <!-- Создание кнопки для перехода в раздел информации -->
                <router-link
                  class="btn btn-sm btn-outline-secondary"
                  title="Информация"
                  :to="'/info/' + item.id"
                >
                  <font-awesome-icon icon="list-ul"></font-awesome-icon>
                </router-link>
                <!-- Создание кнопки для удаления контакта -->
                <button
                  class="btn btn-sm btn-outline-secondary"
                  title="Удалить"
                  @click="$emit('deleteContact', item.id)"
                >
                  <font-awesome-icon icon="trash"></font-awesome-icon>
                </button>
              </section>
              <!-- Выведение имен и фамилий в зависимости от ID контакта -->
              <section class="pl-3 text-left align-self-center">
                {{ item.firstName }} {{ item.lastName }}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Включение библиотеки FontAwesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Указание запрашиваемых параметров
export default {
  name: "home",
  data: function () {
    return {
      firstName: null,
      lastName: null,
    };
  },
  // Указание запрашиваемых компонентов
  components: {
    FontAwesomeIcon,
  },
  methods: {
    // Настройка функции добавления контактов
    handleAdd: function () {
      this.$emit("addContact", this.firstName, this.lastName);
      this.firstName = null;
      this.$refs.firstName.focus();
      this.lastName = null;
      this.$refs.lastName.focus();
    },
  },
  // Указание ключевого параметра с контактами
  props: ["contacts"],
};
</script>