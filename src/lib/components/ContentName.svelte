<script>
  let { children, type = 'default' } = $props()
</script>
<div class="text-center bg-white sticky bottom-0 text-black xl:leading-10 leading-9 {type === 'special' ? 'xl:-mx-4' : ''}">
  {@render children()}
</div>