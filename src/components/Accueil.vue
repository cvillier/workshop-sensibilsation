<template>
    <v-container>
        <v-row dense>
            
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            >
                <v-card
                    :color="item.color"
                    dark
                >
                    <v-container>
                        
                     
                        <v-card-title
                        class="text-h5"
                        v-text="item.title"
                        ></v-card-title>

                        <v-card-subtitle>{{ item.subtitle}}</v-card-subtitle>
                          
                        <v-card-actions>
                        
                        <v-btn
                            class="ml-2 mt-5"
                            outlined
                            rounded
                            small
                            :href=item.link
                            target="_blank"
                        >
                            Allons-y !
                        </v-btn>
                        </v-card-actions>
                    
                     <v-col align="end">
                    <v-avatar
                        class="ma-3"
                        size="125"
                        tile
                    >
                        <v-img :src="item.src"></v-img>
                    </v-avatar>
                    </v-col>
                    </v-container>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
export default {
  name: "Accueil",

    components: {

    },

    data: () => ({
    items: [
      {
        title: 'Assistance publique – Hôpitaux de Paris',
        subtitle: 'Suite à la fuite de données qui a touché plus de 1,4 millions de comptes en aout 2021, lAP-HP souhaite mettre en place un système de prévention à lintension des personnes qui présenteraient des risques de hameçonnage.',
        color: '#1F7087',
        src: 'https://stellasurgical.com/wp-content/uploads/2019/12/logo-APHP-1.png',
        link: 'https://www.google.fr/',
        
      },
      {
        title: 'Assistance publique – Hôpitaux de Paris',
        subtitle: 'Suite à la fuite de données qui a touché plus de 1,4 millions de comptes en aout 2021, lAP-HP souhaite mettre en place un système de prévention à lintension des personnes qui présenteraient des risques de hameçonnage.',
        color: '#952175',
        src: 'https://cdn2.clc2l.fr/t/l/e/leboncoin-O_ZizH.png',
        link: 'https://www.google.fr/',
        
      },
      {
        title: 'Conseils généraux',
        subtitle: 'Quelques conseils afin de mieux se préparer et prévenir les menaces dinternet',
        color: '#385F73',
        src: 'https://woody.cloudly.space/app/uploads/cdc-villes-soeurs/2020/12/thumbs/logo-cybermalveillance-gouv--fr--640x480.png',
        link: 'https://www.cybermalveillance.gouv.fr/',
        
      },
    ],
  })
  }
</script>
