<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container"> <!--@click="postPokemones()-->
        <form>
          <strong class="capitalize">Crear Pokemon</strong>
          <br />
          <br />
          <br />
          <!-- Input with placeholder -->
          <ion-item>
            <ion-label position="fixed">Nombre</ion-label>
            <ion-input placeholder="Enter Input" :value="nombre" />
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Tipo</ion-label>
            <ion-input placeholder="Enter Input" :value="tipo" />
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Ataque</ion-label>
            <ion-input placeholder="Enter Input" :value="ataque" />
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Defensa</ion-label>
            <ion-input placeholder="Enter Input" :value="defensa" />
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Velocidad</ion-label>
            <ion-input placeholder="Enter Input" :value="velocidad" />
          </ion-item>
          <ion-button 
            expand="block" 
            color="dark" 
            size="large" 
            @click="postPokemones({nombre, tipo, ataque, defensa, velocidad})"
          >
            Nuevo
          </ion-button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { PokemonService } from "@/services";

export default {
  name: "Folder",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },

  data: () => ({
      nombre: "",
      tipo: "",
      ataque: "",
      defensa: "",
      velocidad: "",
  }),

  setup() {
    const postPokemones = async (pokemon: any) => {
      const nuevoPokemon = await PokemonService.postPokemones({
        imgs: [
          "https://static.wikia.nocookie.net/espokemon/images/3/34/Raichu.png, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_Nmv0OS-VOjKn2gmZNhVPxxdTRWPry5r5A&usqp=CAU",
        ],
        ...pokemon
      });
      console.log(nuevoPokemon);
    };
    return { postPokemones};
  },
};


</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>