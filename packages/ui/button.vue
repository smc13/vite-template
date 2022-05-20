<script lang="ts" setup>
  import { computed } from 'vue'

  const props = defineProps({
    label: { type: String, required: false },
    disabled: { type: Boolean, default: false },
    to: { type: String, required: false },
  })

  const comp = computed(() => (props.to ? 'a' : 'button'))
</script>

<template>
  <component :is="comp" :disabled="disabled">
    <slot>{{ label }}</slot>
  </component>
</template>
