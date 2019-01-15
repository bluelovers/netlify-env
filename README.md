# README

    Easily access netlify environment information

## install

```bash
npm i netlify-env2
```

## demo

[API](index.d.ts)

```typescript
import { parseNetlifyEnv, getNetlifyEnv } from 'netlify-env2';

console.log(getNetlifyEnv);
console.log(getNetlifyEnv(process.env));
console.log(parseNetlifyEnv);

console.log(parseNetlifyEnv(getNetlifyEnv()));
```
