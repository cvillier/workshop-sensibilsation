<template>
  <v-container>
    <v-dialog
      :value="modaleQuestionIsOpen"
      fullscreen
      transition="dialog-bottom-transition"
    >
      <v-card>
      <v-row>
        <v-col order="1">
          <v-img 
            src="@/assets/fraude01LBC.png"
            height="auto"
            width="auto"
          ></v-img>
        </v-col>
        <v-col order="2">
          <br>
          <v-card-title>Dans ce cas, quel détail vous fait douter de la véracité de ce message ?<br />
          (Une seule réponse possible)</v-card-title>
            <v-btn
              class="ml-2 mt-5"
              outlined
              rounded
              small
              @click="choix(1)"
              width="650"
            >
              Un appartement hyper meublé n'existe pas
            </v-btn>
            <br>
            <v-btn
              class="ml-2 mt-5"
              outlined
              rounded
              small
              @click="choix(2)"
              width="650"
            >
              Le parking privatif n'apparaît pas dans les photos de la chambre
            </v-btn>
            <br>
            <v-btn
              class="ml-2 mt-5"
              outlined
              rounded
              small
              @click="choix(3)"
              width="650"
            >
              Il n'existe pas 941 Philippe.B en France, il s'agit d'un imposteur
            </v-btn>
            <br>
            <v-btn
              class="ml-2 mt-5"
              outlined
              rounded
              small
              @click="choix(4)"
              width="650"
            >
              L'appartement ressemble plus à un hôtel qu'à un véritable studio
            </v-btn>          
          </v-col>
         </v-row> 
        <br>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "Question",
  props: ["modaleQuestionIsOpen"],

  methods :{
    choix(userchoice2){
      this.userchoice=userchoice2
    },
  },

  data() {
    return {
      userchoice:null
    };
  },
};
</script>
