<script lang="ts">
  import { page } from '$app/state';
  const { slug } = page.params;
</script>

<h1>Blog Post: {slug}</h1>

