<template>
    <v-app>
        <v-main>
            <v-container>

                <v-card>
                    <v-card-title class="text-h5">AP-HP</v-card-title>
                    <v-card-subtitle>Suite au vol de données d'1,4 millions de comptes, l'AP-HP souhaite sensibiliser les personnes qui pourraient se retrouver victime d'hameçonnage.</v-card-subtitle>
                    <v-img
                        :src="require('../assets/logo_APHP.png')"
                        height="200"
                        contain
                        ></v-img>
                    <v-card-actions>
                        <v-btn text>Commencer le test</v-btn>
                    </v-card-actions>
                </v-card>

                <v-card>
                    <v-card-title class="text-h5">LeBonCoin</v-card-title>
                    <v-card-subtitle>Le nombre de fausses annonces ayant explosé ces derniers mois, le site de vente d'articles d'occasion "LeBonCoin" espère avertir ses utilisateurs afin de prévenir des risques frauduleux.</v-card-subtitle>
                    <v-img
                        :src="require('../assets/logo_LBC.jpg')"
                        height="200"
                        contain
                        ></v-img>
                    <v-card-actions>
                        <v-btn text>Commencer le test</v-btn>
                    </v-card-actions>
                </v-card>

                <v-card>
                    <v-card-title class="text-h5">Conseils généraux</v-card-title>
                    <v-card-subtitle>Quelques conseils afin de rester vigilant face aux dangers du web.</v-card-subtitle>
                    <v-img
                        :src="require('../assets/logo_CM.gouv.png')"
                        height="200"
                        contain
                        ></v-img>
                    <v-card-actions>
                        <v-btn text>Allons voir</v-btn>
                    </v-card-actions>
                </v-card>

            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
  name: 'Accueil',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>