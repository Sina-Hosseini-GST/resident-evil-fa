<script>
  let { children, additionalClasses } = $props()
</script>

<div class="flex flex-col xl:gap-4 lg:gap-3 md:gap-1.5 gap-3 {additionalClasses}">
  {@render children()}
</div>