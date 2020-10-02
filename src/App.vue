<!-- Включение шаблона с указанием ключевых функциями -->
<template>
  <div id="app">
    <router-view
      @addContact="addContact"
      :firstName="firstName"
      :lastName="lastName"
      @deleteContact="deleteContact"
      :contacts="contacts"
    />
  </div>
</template>

<script>
// Добавление модуля Firebase и индексация документа с параметрами
import Firebase from "firebase";
import db from "./db.js";

// Указание запрашиваемых параметров
export default {
  name: "App",
  data: function () {
    return {
      contacts: [],
      firstName: null,
      lastName: null,
      description: null,
      email: null,
    };
  },
  // Добавление методов добавления и уладения контактов
  methods: {
    addContact: function (firstName, lastName) {
      if (firstName !== null && lastName !== null) {
        db.collection("contacts").add({
          firstName: firstName,
          lastName: lastName,
          createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
    },
    deleteContact: function (firstName) {
      db.collection("contacts").doc(firstName).delete();
    },
  },
  mounted() {
    // Сортировка контактов по фамилии
    var contactsRef = db.collection("contacts").orderBy("lastName");
    // Указание и выведение параметров
    contactsRef.onSnapshot((snapshot) => {
      const snapData = [];
      snapshot.forEach((doc) => {
        snapData.push({
          id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          description: doc.data().description,
          email: doc.data().email,
        });
        this.contacts = snapData;
      });
    });
  },
};
</script>

<!-- Имплементация модуля Bootstrap -->
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
</style>