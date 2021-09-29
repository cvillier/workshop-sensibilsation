<template>
  <v-container>
    <v-dialog
      :value="modaleQuestionIsOpen"
      fullscreen
      transition="dialog-bottom-transition"
    >
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "Question",
  props: ["modaleQuestionIsOpen"],

  data() {
    return {};
  },
};
</script>
