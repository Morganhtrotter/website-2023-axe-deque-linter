<script setup>
import MLBRoster from './MLBRoster.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div id="nlWest">
    <MLBRoster
      id="lad"
      teamId="119"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Los Angeles Dodgers</template>
    </MLBRoster>

    <MLBRoster
      id="sf"
      teamId="137"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>San Francisco Giants</template>
    </MLBRoster>

    <MLBRoster
      id="sd"
      teamId="135"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>San Diego Padres</template>
    </MLBRoster>

    <MLBRoster
      id="ari"
      teamId="109"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Arizona D-backs</template>
    </MLBRoster>

    <MLBRoster
      id="col"
      teamId="115"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Colorado Rockies</template>
    </MLBRoster>
  </div>
  <div id="nlCentral">
    <MLBRoster
      id="stl"
      teamId="138"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>St. Louis Cardinals</template>
    </MLBRoster>

    <MLBRoster
      id="mil"
      teamId="158"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Milwakee Brewers</template>
    </MLBRoster>

    <MLBRoster
      id="chc"
      teamId="112"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Chicago Cubs</template>
    </MLBRoster>

    <MLBRoster
      id="pit"
      teamId="134"
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Pittsburg Pirates</template>
    </MLBRoster>

    <MLBRoster
      id="cin"
      teamId="113"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Cincinnati Reds</template>
    </MLBRoster>
  </div>
  <div id="nlEast">
    <MLBRoster
      id="wsh"
      teamId="120"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Washington Nationals</template>
    </MLBRoster>

    <MLBRoster
      id="nym"
      teamId="121"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>New York Mets</template>
    </MLBRoster>

    <MLBRoster
      id="phi"
      teamId="143"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Philadelphia Phillies</template>
    </MLBRoster>

    <MLBRoster
      id="atl"
      teamId="144"
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Atlanta Braves</template>
    </MLBRoster>

    <MLBRoster
      id="mia"
      teamId="146"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Miami Marlins</template>
    </MLBRoster>
  </div>
  <div id="alWest">
    <MLBRoster
      id="sea"
      teamId="136"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Seattle Mariners</template>
    </MLBRoster>

    <MLBRoster
      id="hou"
      teamId="117"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Houston Astros</template>
    </MLBRoster>

    <MLBRoster
      id="oak"
      teamId="133"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Oakland Athletics</template>
    </MLBRoster>

    <MLBRoster
      id="laa"
      teamId="108"
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Los Angeles Angels</template>
    </MLBRoster>

    <MLBRoster
      id="tex"
      teamId="140"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Texas Rangers</template>
    </MLBRoster>
  </div>
  <div id="alCentral">
    <MLBRoster
      id="min"
      teamId="142"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Minnesota Twins</template>
    </MLBRoster>

    <MLBRoster
      id="det"
      teamId="116"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Detroit Tigers</template>
    </MLBRoster>

    <MLBRoster
      id="cws"
      teamId="145"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Chicago White Sox</template>
    </MLBRoster>

    <MLBRoster
      id="kc"
      teamId="118"
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Kansas City Royals</template>
    </MLBRoster>

    <MLBRoster
      id="cle"
      teamId="114"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Cleveland Guardians</template>
    </MLBRoster>
  </div>
  <div id="alEast">
    <MLBRoster
      id="tor"
      teamId="141"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Toronto Blue Jays</template>
    </MLBRoster>

    <MLBRoster
      id="nyy"
      teamId="147"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>New York Yankees</template>
    </MLBRoster>

    <MLBRoster
      id="bos"
      teamId="111"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Boston Red Sox</template>
    </MLBRoster>

    <MLBRoster
      id="tb"
      teamId="139"
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Tampa Bay Rays</template>
    </MLBRoster>

    <MLBRoster
      id="bal"
      teamId="110"  
    >
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Baltimore Orioles</template>
    </MLBRoster>
  </div>
</template>

<style scoped>
#sf {
  border-color: orange;
}
</style>