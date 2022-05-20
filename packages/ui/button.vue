<script lang="ts" setup>
  import { computed } from 'vue'

  const props = defineProps({
    to: { type: String, required: false },
    type: { type: String, default: 'button' },
    label: { type: String, required: false },
    disabled: { type: Boolean, default: false },
  })

  const attrs = computed(() => {
    const attrs = {
      type: props.type,
      disabled: props.disabled,
      to: props.to,
      onClick: undefined,
    }

    if (!props.to && !props.disabled) {
      attrs.onClick = clicked
    }

    return attrs
  })

  const comp = computed(() => (props.to ? 'RouterLink' : 'button'))

  const emit = defineEmits(['clicked'])
  const clicked = () => emit('clicked')
</script>

<template>
  <component :is="comp" v-bind="attrs">{{ label }}</component>
</template>
