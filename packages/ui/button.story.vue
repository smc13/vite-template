<script setup>
  import UiButton from './button.vue'
  import { hstEvent } from 'histoire/client'

  function initState() {
    return {
      disabled: false,
      label: 'UI Button',
    }
  }
</script>

<template>
  <Story title="Button">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <UiButton
          :disabled="state.disabled"
          :label="state.label"
          @clicked="hstEvent('clicked', $event)" />
      </template>

      <template #controls="{ state }">
        <HstCheckbox v-model="state.disabled" title="Disabled" />
      </template>
    </Variant>
  </Story>
</template>
