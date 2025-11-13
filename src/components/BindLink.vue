<script setup>
import {ref} from "vue"
const link = ref("")
const target = ref("_blank")
</script>

<template>
<a :href="link" target="_blank">Link to </a>
</template>