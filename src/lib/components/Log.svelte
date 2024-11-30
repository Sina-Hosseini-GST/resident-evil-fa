<script>
  let { text, action, game, date } = $props();
</script>

<li>
  <span class="text-cyan-400">{text} <span class="italic">{action}</span></span> - <span class="font-bold text-cyan-400">{game}</span> | <time class="text-blue-600">{date}</time>
</li>