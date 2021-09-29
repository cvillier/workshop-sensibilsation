<template>
  <v-container>
    <v-row>
      <v-col>{{ maDataTest + "test" }}</v-col>
    </v-row>
    <question></question>
  </v-container>
</template>

<script>
export default {
  name: "Accueil",

  components: {},

  data: () => ({
    maDataTest: "Je suis une data test",
  }),
};
</script>
