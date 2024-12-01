<script>
  let { children, type = 'default' } = $props()
</script>
<div class="text-center bg-white sticky bottom-0 text-black xl:leading-9 leading-8 {type === 'special' ? 'xl:-mx-4' : ''}">
  {@render children()}
</div>