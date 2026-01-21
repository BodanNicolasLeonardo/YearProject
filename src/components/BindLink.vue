<script setup>
import {ref} from "vue"
const link = ref("")
</script>

<template>
<a :href="link" target="_blank">Link to </a>
</template>