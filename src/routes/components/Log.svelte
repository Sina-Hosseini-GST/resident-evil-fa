<script>
  export let text;
  export let action;
  export let game;
  export let date;
</script>

<li>
  <span class="text-c-blue-2">{text} <span class="italic">{action}</span></span> - <span class="text-c-blue-2 font-bold">{game}</span> | <time class="text-c-blue-3">{date}</time>
</li>