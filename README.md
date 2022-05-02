## Showcase for Percy/Jest-puppeteer/Typescript not working

### Run `npm run test`

### Failing test result
``` 
FAIL  
  Google
    ✕ should display "google" text on page (1086 ms)

  ● Google › should display "google" text on page

    Cannot find module '#logger' from 'node_modules/@percy/logger/dist/index.js'

      at Resolver.resolveModule (node_modules/jest-resolve/build/resolver.js:324:11)
```

### Passing test result
```
 PASS  
  Google
    ✓ should display "google" text on page (946 ms)
```
