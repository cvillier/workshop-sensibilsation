<template>
  <v-container>
    <v-row>
      <v-col>{{ maDataTest + "test" }}</v-col>
    </v-row>
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
