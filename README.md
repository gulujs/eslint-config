# @lunjs/eslint-config

## Install and Usage

### @lunjs/eslint-config/js

```sh
npm install --save-dev eslint @lunjs/eslint-config
```

**.eslintrc**

```json
{
  "extends": "@lunjs/eslint-config/js"
}
```

### @lunjs/eslint-config/js/node

```sh
npm install --save-dev eslint eslint-plugin-node @lunjs/eslint-config
```

**.eslintrc**

```json
{
  "extends": "@lunjs/eslint-config/js/node"
}
```

### @lunjs/eslint-config/ts

```sh
npm install --save-dev eslint\
    @typescript-eslint/parser\
    @typescript-eslint/eslint-plugin\
    @lunjs/eslint-config
```

**.eslintrc**

```json
{
  "extends": "@lunjs/eslint-config/ts"
}
```


### @lunjs/eslint-config/ts/node

```sh
npm install --save-dev eslint\
    @typescript-eslint/parser\
    @typescript-eslint/eslint-plugin\
    eslint-plugin-node\
    @lunjs/eslint-config
```

**.eslintrc**

```json
{
  "extends": "@lunjs/eslint-config/ts/node"
}
```

## License

- [MIT](LICENSE)
