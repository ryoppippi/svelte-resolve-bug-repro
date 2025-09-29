<script>
import { resolve } from '$app/paths';
  const {children} = $props()
</script>

<a href={resolve('/about')}>about</a>

{@render children()}
