<template>
  <div
    class="MLBRoster"
  >
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3 @click="loadData()">
        <slot name="heading"></slot>
      </h3>
      {{ teamId }}
      <div 
        :class="[{'team': true}, teamId ? 'team-' + teamId : '']"
        v-if="mlbDataRef" 
      >
        <div 
          v-for="(player, index) in mlbDataRef.roster"
          class="player"  
        >
          {{ player.person.fullName }}
        </div>
      </div>
      <button
        @click="loadMLBData()"
        :class="[{'load': true}, teamId ? 'load-' + teamId : '']"
      >
        Load
      </button>
      <button 
        @click="collapse()"
        :class="[{'collapse': true}, teamId ? 'collapse-' + teamId : '']"
      >
        {{ showHideButton }}
      </button>
      <button
        @click="loadPlayerData()"
      >
        Load Aaron Judge 2022
      </button>
    </div>
  </div>
</template>

<script>
import mlbDataAPI from '../api/resources/mlbData.js';
import { ref, toRefs } from 'vue';
import * as d3 from 'd3';

export default {
  props: {
    teamId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const showHideButton = ref({});
    const mlbDataRef = ref({});
    const playerData = ref({});
    const { teamId } = toRefs(props);
    const loadMLBData = async() => {
      mlbDataRef.value = await mlbDataAPI.index('/api/v1/teams/' + teamId.value + '/roster');
      console.log("Made GET() request: " + mlbDataRef.value);
      document.querySelector(".collapse-" + teamId.value).style.display = "block";
      document.querySelector(".load-" + teamId.value).style.display = "none"; // Hide the load button to not make unnecessary GET requests
      const width = 800;
      const height = 500;
      const svg = d3.selectAll(".MLBRoster").attr("class", "charles").attr("class", "caitlin");
    };
    const loadPlayerData = async() => {
      playerData.value = await mlbDataAPI.player_stats('592450', '2022', 'hitting');
      console.log("playerData.value: " + JSON.stringify(playerData.value));
    };
    showHideButton.value = "Hide";
    
    return {
      mlbDataRef,
      loadMLBData,
      showHideButton,
      loadPlayerData
    }
  },
  methods: {
    loadData() {
      return this.teamId;
    },
    collapse() {
      if (this.showHideButton === "Show") {
        document.querySelector(".team-" + this.teamId).style.display = "block"; // Show the player names wrapper
        this.showHideButton = "Hide";
      } else {
        document.querySelector(".team-" + this.teamId).style.display = "none"; // Hide the player names wrapper
        this.showHideButton = "Show";
      }
      return;
    }
  },
}
</script>

<style scoped>
.player {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid transparent;
}

.collapse {
  display: none;
}

.player:hover {
  border: 1px solid white;
}

.MLBRoster {
  display: flex;
  border-radius: 0.5rem;
}

.details {
  flex: 1;
  padding: 0.5rem 0 0.5rem calc(var(--section-gap) / 2);
  border: 1px solid blue;
  border-radius: 0.5rem;
  margin: 1rem 0;
}

#lad .details {
  border-color: var(--dodger-blue);
}

#sf .details {
  border-color: var(--giant-orange);
}

#sd .details {
  border-color: var(--padres-brown);
}

#ari .details {
  border-color: var(--dbacks-red);
}

#col .details {
  border-color: var(--rockies-purple);
}

#stl .details {
  border-color: var(--cardinals-red);
}

#mil .details {
  border-color: var(--brewers-blue);
}

#chc .details {
  border-color: var(--cubs-blue);
}

#pit .details {
  border-color: var(--pirates-yellow);
}

#cin .details {
  border-color: var(--reds-red);
}

#wsh .details {
  border-color: var(--nationals-red);
}

#nym .details {
  border-color: var(--mets-blue);
}

#phi .details {
  border-color: var(--phillies-red);
}

#atl .details {
  border-color: var(--braves-blue);
}

#mia .details {
  border-color: var(--marlins-blue);
}

#sea .details {
  border-color: var(--mariners-blue);
}

#hou .details {
  border-color: var(--astros-orange);
}

#oak .details {
  border-color: var(--athletics-green);
}

#laa .details {
  border-color: var(--angels-red);
}

#tex .details {
  border-color: var(--rangers-blue);
}

#min .details {
  border-color: var(--twins-blue);
}

#det .details {
  border-color: var(--tigers-blue);
}

#cws .details {
  border-color: var(--white-sox-black);
}

#kc .details {
  border-color: var(--royals-blue);
}

#cle .details {
  border-color: var(--guardians-red);
}

#tor .details {
  border-color: var(--blue-jays-blue);
}

#nyy .details {
  border-color: var(--yankees-blue);
}

#bos .details {
  border-color: var(--red-sox-red);
}

#tb .details {
  border-color: var(--rays-blue);
}

#bal .details {
  border-color: var(--orioles-orange);
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .MLBRoster {
    margin-top: 0;
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
    z-index: 2;
  }

  .MLBRoster:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .MLBRoster:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .MLBRoster:first-of-type:before {
    display: none;
  }

  .MLBRoster:last-of-type:after {
    display: none;
  }
}
</style>
