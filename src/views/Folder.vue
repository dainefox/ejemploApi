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
    
      <div id="container">
        <strong class="capitalize">Pokemones</strong>
        <p>Cantidad: {{ pokemones.length }} </p>

        <ion-list>
          <ion-item v-for="(pokemon, index) in pokemones" :key="`${index}-${pokemon.id_pokemon}`">
            <ion-label>
              <h2>{{ pokemon.nombre }}</h2>
              <h3>Tipo: {{ pokemon.tipo }}</h3>
              <p>Ataque: {{ pokemon.ataque }}</p>
              <p>Defensa: {{ pokemon.defensa}}</p>
              <p>Velocidad: {{ pokemon.velocidad}}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { onBeforeMount, ref } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { PokemonService } from '@/services';

export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  },
  
  setup() {
    const pokemones = ref({});
    const getPokemones = async () => {
      const { pokemones: monsters } = await PokemonService.getPokemones();
      pokemones.value = monsters;
    };

    onBeforeMount(() => getPokemones());

    return { pokemones };
  },
}

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