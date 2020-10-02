<template>
  <form class="mt-3" @submit.prevent="handleCheckIn">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="card bg-light">
            <div class="card-body">
              <h3 class="font-weight-light mb-3">
                {{ item.firstName }} {{ item.lastName }}
              </h3>
              <section class="form-group">
                <label class="form-control-label sr-only" for="description"
                  >Описание</label
                >
                <input
                  required
                  class="form-control"
                  type="text"
                  placeholder="description"
                  v-model="description"
                />
              </section>
              <section class="form-group">
                <label class="form-control-label sr-only" for="email"
                  >Почта</label
                >
                <input
                  required
                  class="form-control"
                  type="email"
                  placeholder="email"
                  v-model="email"
                />
              </section>
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
export default {
  data: function () {
    return {
      description: null,
      email: null,
    };
  },
  props: ["contacts"],
  methods: {
    handleCheckIn: function () {
      this.$emit("info", {
        contactID: this.$route.params.contactID,
        description: this.description,
        email: this.email,
      });
      this.description = null;
      this.email = null;
    },
  },
};
</script>