<script setup>
import { ref } from 'vue';

import AppMenuItem from '@/layout/AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard' }]
    },

    {
        label: 'Get Started',
        items: [
            {
                label: 'Documentation',
                icon: 'pi pi-fw pi-question',
                

                items: [
                    {
                        label: 'word',
                        icon: 'pi pi-fw pi-sign-in',
                        to: '/doc'
                    },
                    {
                        label: 'ppt',
                        icon: 'pi pi-fw pi-times-circle',
                        to: '/ppt'
                    },
                    {
                        label: 'excel',
                        icon: 'pi pi-fw pi-lock',
                        to: '/excel'
                    },
                    {
                        label: 'pdf',
                        icon: 'pi pi-fw pi-times-circle',
                        to: '/pdf'
                    },
                    {
                        label: 'mindmap',
                        icon: 'pi pi-fw pi-times-circle',
                        to: '/mindmap'
                    },
                    {
                        label: 'flowchart',
                        icon: 'pi pi-fw pi-times-circle',
                        to: '/flowchart'
                    },
                    {
                        label: 'paint',
                        icon: 'pi pi-fw pi-times-circle',
                        to: '/drawing'
                    },
                ]
            },
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>