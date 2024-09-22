<template>
    <div class="app-wrapper">
        <AppNavigation />

        <div class="app-container">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import AppNavigation from '@/components/navigations/app-navigation.component.vue'
</script>
