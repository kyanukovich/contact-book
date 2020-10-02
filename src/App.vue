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
import Firebase from "firebase";
import db from "./db.js";

export default {
  name: "App",
  data: function () {
    return {
      contacts: [],
      firstName: null,
      lastName: null,
    };
  },
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
    var contactsRef = db.collection("contacts").orderBy("lastName");
    contactsRef.onSnapshot((snapshot) => {
      const snapData = [];
      snapshot.forEach((doc) => {
        snapData.push({
          id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
        });
        this.contacts = snapData;
      });
    });
  },
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
</style>