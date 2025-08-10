<script setup lang="ts">
import ContentCard from '@/components/sectionsAbout/ContentCard.vue';
import HeroSection from '@/components/sectionsAbout/HeroSection.vue';
import StatsSection from '@/components/sectionsAbout/StatsSection.vue';
import TeamProfileSection from '@/components/sectionsAbout/TeamProfileSection.vue';
import TechStack from '@/components/sectionsAbout/TechStack.vue';
import { heroData, founder, contentData, technologies, stats } from '@/data/dataAbout';

</script>

<template>
  <TeamProfileSection :founder="founder"/>
            <TechStack :technologies="technologies"/>
</template>

