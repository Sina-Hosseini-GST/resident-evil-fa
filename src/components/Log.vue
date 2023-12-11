<template>
  <li>
    <span class="text-c-blue-2">{{ text }} <span class="italic">{{ action }}</span></span> - <span class="text-c-blue-2 font-bold">{{ game }}</span> | <span class="text-c-blue-3">{{ date }}</span>
  </li>
</template>

<script>
export default {
  props: ['text', 'action', 'game', 'date']
}
</script>