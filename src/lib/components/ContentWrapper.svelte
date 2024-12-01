<script>
  import { fade } from 'svelte/transition'
  let { children, additionalClasses } = $props()
</script>

<div class="flex flex-col xl:gap-8 lg:gap-6 md:gap-4 gap-6 {additionalClasses}" in:fade={{ duration: 300 }}>
  {@render children()}
</div>