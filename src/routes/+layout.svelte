<script>
import { resolve } from '$app/paths';
  const {children} = $props()
</script>

<!-- This causes an error on prerendering but it worked in version 2.43.4 -->
<a href={resolve('/about')}>about</a>

<!-- This works actually -->
<!-- <a href='/about'>about</a> -->

{@render children()}
