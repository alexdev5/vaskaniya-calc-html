<template>
    <div class="app-menu">
        <ul class="app-menu-links">
            <AppNavLink :to="{ name: RouteName.Dimensions }">
                {{ content.menu.dimensions }}
            </AppNavLink>
            <AppNavLink :to="{ name: RouteName.Edges }">
                {{ content.menu.edges }}
            </AppNavLink>
            <AppNavLink :to="{ name: RouteName.Palette }">
                {{ content.menu.palette }}
            </AppNavLink>
            <AppNavLink :to="{ name: RouteName.Sinks }">
                {{ content.menu.sinks }}
            </AppNavLink>
            <AppNavLink :to="{ name: RouteName.Addons }">
                {{ content.menu.addons }}
            </AppNavLink>
            <AppNavLink :to="{ name: RouteName.Result }">
                {{ content.menu.result }}
            </AppNavLink>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import AppNavLink from './components/app-navigation-link.component.vue'

import { content } from '@/content'

import { RouteName } from '@/router'
</script>

<style lang="scss"></style>
