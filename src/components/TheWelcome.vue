<script setup>
import PlayerSearch from './PlayerSearch.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <PlayerSearch>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Player Finder</template>
    Enter a players name.
  </PlayerSearch>
</template>
