# bug repro

https://github.com/sveltejs/kit/issues/14513

```bash
pnpm i --frozen-lockfile
pnpm run build
```

error

```log
node:internal/event_target:1101
  process.nextTick(() => { throw err; });
                           ^
Error: 404 /blog/about (linked from /blog/hello)

```

it worked fine in version 2.43.4
