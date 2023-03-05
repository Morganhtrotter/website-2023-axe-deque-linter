<template>
  <div
    @mouseover="itemHover"
    class="item"
  >
    <pre>{{ mlbDataRef }}</pre>
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
      <button @click="loadMLBData()">Load MLB Data (Fetch)</button>
    </div>
  </div>
</template>

<script>
import mlbDataAPI from '../api/resources/mlbData.js';
import { ref } from 'vue';

export default {
  setup() {
    const mlbDataRef = ref({});
    const loadMLBData = async() => {
      mlbDataRef.value = await mlbDataAPI.index('/json/named.team_all_season.bam?sport_code=%27mlb%27&all_star_sw=%27N%27&sort_order=name_asc&season=%272023%27');
    };

    return {
      mlbDataRef,
      loadMLBData
    }
  },

  methods: {
    itemHover(event) {
      console.log("hovered elm");
      event.target.style.backgroundColor = "red";
      setTimeout(function (){
        event.target.style.backgroundColor = "#181818";
        event.target.style.transition = "background-color 1000ms linear";
      }, 50);
      setTimeout(function (){
        event.target.style.transition = "none";
      }, 1000);
    },
  },
}
</script>

<style scoped>
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
