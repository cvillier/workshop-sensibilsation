<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="1" align-self="center" block>
                <h1 align-center="true">    
                    La fuite de données de l'AP-HP
                </h1>
                <br>
                <v-img
                    :src="require('../assets/logo.svg')"
                    class="my-3"
                    contain
                    height="200"
                />
                <br>
                <v-textarea>
                    Salut salut
                </v-textarea>
                <br>
                <v-btn>      
                    {{question1}}
                </v-btn>
                <v-btn rounded>      
                    {{question2}}
                </v-btn>
                <br>
                <v-btn>      
                    {{question3}}
                </v-btn>
                <v-btn>      
                    {{question4}}
                </v-btn>
            </v-col>

        </v-row>
    </v-container>    
</template>

<script>

    export default {
      name: 'Question',
      data (){
          return {
              question1 : 'texte de la question',
              question2 : 'texte de la question',
              question3 : 'texte de la question',
              question4 : 'texte de la question',
          }
      }
    }

</script>
