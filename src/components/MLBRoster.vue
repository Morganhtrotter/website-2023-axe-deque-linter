<template>
  <div
    class="item"
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
    </div>
  </div>
</template>

<script>
import mlbDataAPI from '../api/resources/mlbData.js';
import { ref, toRefs } from 'vue';

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
    const { teamId } = toRefs(props);
    const loadMLBData = async() => {
      mlbDataRef.value = await mlbDataAPI.index('/teams/' + teamId.value + '/roster/depthChart');
      console.log("Made GET() request: " + mlbDataRef.value);
      document.querySelector(".collapse-" + teamId.value).style.display = "block";
      document.querySelector(".load-" + teamId.value).style.display = "none"; // Hide the load button to not make unnecessary GET requests
    };
    showHideButton.value = "Hide";
    
    return {
      mlbDataRef,
      loadMLBData,
      showHideButton
    }
  },
  methods: {
    loadData() {
      return this.teamId;
    },
    collapse() {
      if (this.showHideButton === "Show") {
        document.querySelector(".team-" + this.teamId).style.display = "block"; // Hide the player names wrapper
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

.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
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
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
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
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
