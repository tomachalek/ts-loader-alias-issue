A minimal working example for https://github.com/TypeStrong/ts-loader/issues/1294

How to test the failing example:

1. make sure ts-loader 9.1.2 is installed (review and edit package.json)
2. npm install
3. npm run build

This shoudl produce the following error:

```
ERROR in /path/to/project/ts-loader-alias-issue/public/js/query.ts
1:31-54
[tsl] ERROR in /path/to/project/ts-loader-alias-issue/public/js/query.ts(1,32)
      TS2307: Cannot find module 'plugins/corparch/init' or its corresponding type declarations.
```


1. make sure ts-loader 8.0.18 is installed (review and edit package.json)
2. npm install
3. npm run build

- no error

