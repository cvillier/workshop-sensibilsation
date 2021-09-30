<template>
    <v-container>
        <v-dialog
            :value="modaleQuestion3IsOpen"
            transition="dialog-bottom-transition"
        >

            <v-card >
                <v-card-title class="text-h4">Conseils généraux</v-card-title>
                <v-card-subtitle class="text-h5">Ici nous allons vous donner quelques astuces afin de repérer une annonce ou un email frauduleux.</v-card-subtitle>
            </v-card>
            
            <v-card>
                <v-card-title class="text-h4">Commençons par une annonce de type "LeBonCoin".</v-card-title>
                <v-img
                src="../assets/img/fraude01.png"
                height="600"
                contain
                class="grey darken-4"
                ></v-img>
                <v-card-subtitle class="text-h5">Voici la page principale de l'annonce.</v-card-subtitle>
            </v-card>

            <v-card>
                <v-card-title class="text-h4">Cliquons sur "Voir le numéro".</v-card-title>
                <v-img
                src="../assets/img/fraude02.png"
                height="250"
                contain
                class="grey darken-4"
                ></v-img>
            </v-card>

            <v-card>
                <v-card-title class="text-h4">Puis sur le profil du loueur.</v-card-title>
                <v-img
                src="../assets/img/fraude03.png"
                height="250"
                contain
                class="grey darken-4"
                ></v-img>
            </v-card>

            <v-card>
                <v-card-title class="text-h4">Voyons ensemble les éléments qui devraient nous alerter.</v-card-title>
            </v-card>

            <v-card>
                <v-card-title class="text-h4">Nous avons marqué les éléments suspects.</v-card-title>
                <v-img
                src="../assets/img/fraude01b.png"
                height="600"
                contain
                class="grey darken-4"
                ></v-img>
                <v-card-subtitle class="text-h5"> </v-card-subtitle>
                <v-card-subtitle class="text-h5">Le nom de l'utilisateur parraît suspect : xai ne correspond à rien... en général en pseudo en inspiré du nom et/ou du prénom de l'utilisateur.</v-card-subtitle>
                <v-card-subtitle class="text-h5">La photo a l'air trop propre : souvent les photos des annonces sont prises avec les téléphones portables, rarement avec des appareils de professionnels.</v-card-subtitle>
                <v-card-subtitle class="text-h5">L'utilisateur laisse son email : ce qui n'est pas recommandé par LeBonCoin, qui préfère que l'on communique via sa plateforme.</v-card-subtitle>
                <v-card-subtitle class="text-h5">Retenons que l'annonce est de fin septembre, nous reviendrons sur cet élément plus tard.</v-card-subtitle>
            </v-card>

            <v-card>
                <v-card-title class="text-h4">Retournons sur "Voir le numéro".</v-card-title>
                <v-img
                src="../assets/img/fraude02b.png"
                height="250"
                contain
                class="grey darken-4"
                ></v-img>
                <v-card-subtitle class="text-h5">Il s'agit d'un 09 certes non surtaxé mais de type "non géographique".</v-card-subtitle>
            </v-card>

            <v-card>
                <v-card-title class="text-h4">Retour sur le profil du loueur.</v-card-title>
                <v-img
                src="../assets/img/fraude03b.png"
                height="250"
                contain
                class="grey darken-4"
                ></v-img>
                <v-card-subtitle class="text-h5">Le profil a été créé en septembre 2021, comme l'annonce. Il y a fort à parier qu'un programme pirate ait créé et gère ce compte, ainsi que l'annonce dans le même laps de temps.</v-card-subtitle>
                <v-card-subtitle class="text-h5"><v-icon color="warning">mdi-alert-outline</v-icon>Attention, ce n'est pas parce qu'un compte et son annonce datent du même mois qu'il s'agit nécesairrement d'une fraude, mais restez vigilant ! </v-card-subtitle>
            </v-card>

            <v-card >
                <v-card-title class="text-h4">Attardons-nous sur la photo</v-card-title>
                <v-card-subtitle class="text-h5">Nous allons utiliser un outil de Google afin de vérifier si la photo utilisée dans l'annonce est issue d'Internet.</v-card-subtitle>
            </v-card>

            <v-card>
                <v-card-title class="text-h4">Allons sur Google Images.</v-card-title>
                <v-img
                src="../assets/img/solutionGoogle01.png"
                height="600"
                contain
                class="grey darken-4"
                ></v-img>
                <v-card-subtitle class="text-h5">Cliquons sur "Recherche par image"</v-card-subtitle>
            </v-card>

            <v-card>
                <v-card-title class="text-h4">Deux options s'offrent à nous.</v-card-title>
                <v-img
                src="../assets/img/solutionGoogle02.png"
                height="600"
                contain
                class="grey darken-4"
                ></v-img>
                <v-card-subtitle class="text-h5"></v-card-subtitle>
                <v-card-subtitle class="text-h5">En copiant l'URL de ladite image</v-card-subtitle>
                <v-card-subtitle class="text-h5">En uploadant l'image (qu'il faut au préalable enregistrer sur son appareil).</v-card-subtitle>
            </v-card>

            <v-card>
                <v-card-title class="text-h4">Dans cet exemple, nous allons copier l'URL de l'image.</v-card-title>
                <v-img
                src="../assets/img/solutionGoogle03.png"
                height="600"
                contain
                class="grey darken-4"
                ></v-img>
                <v-card-subtitle class="text-h5"></v-card-subtitle>
                <v-card-subtitle class="text-h5">Retour à l'annonce.</v-card-subtitle>
                <v-card-subtitle class="text-h5">Clique-droit sur la photo.</v-card-subtitle>
                <v-card-subtitle class="text-h5">Copier l'adresse de l'image.</v-card-subtitle>
                <v-card-subtitle class="text-h5">Le coller dans Google Images</v-card-subtitle>
            </v-card>

            <v-card>
                <v-card-title class="text-h4">Observons le résultat de la recherche.</v-card-title>
                <v-img
                src="../assets/img/solutionGoogle04.png"
                height="600"
                contain
                class="grey darken-4"
                ></v-img>
                
                <v-card-subtitle class="text-h5">Nous remarquons que les résultats font références à plusieurs sites de design, mobilier et décoration d'intérieur. Il y a donc fort à parier que l'image de l'annonce ait été copiée sur ce genre de sites.</v-card-subtitle>
            </v-card>
            
        </v-dialog>
    </v-container>
</template>

<script>
export default {
  name: "conseil",
  props: ["modaleQuestion3IsOpen"],

  data() {
    return {};
  },
};
</script>