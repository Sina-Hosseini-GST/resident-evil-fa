<script>
  let { imageSourceUrl, imageSource } = $props()
</script>

<div class="overflow-auto text-sm leading-9 text-center text-yellow-200 border-t border-zinc-700 whitespace-nowrap xl:leading-10 xl:text-base">
  Credit Goes to <a target="_blank" href={imageSourceUrl} class="text-orange-400 underline hover:font-bold">{imageSource}</a>
</div>