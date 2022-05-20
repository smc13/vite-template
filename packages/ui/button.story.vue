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
          @click="hstEvent('click', $event)" />
      </template>

      <template #controls="{ state }">
        <HstCheckbox v-model="state.disabled" title="Disabled" />
        <HstText v-model="state.label" title="Label" />
      </template>
    </Variant>
  </Story>
</template>
