# @gulujs/eslint-config

## Install and Usage

### @gulujs/eslint-config/js

```sh
npm install --save-dev eslint @gulujs/eslint-config
```

**.eslintrc**

```json
{
  "extends": "@gulujs/eslint-config/js"
}
```

### @gulujs/eslint-config/js/node

```sh
npm install --save-dev eslint eslint-plugin-node @gulujs/eslint-config
```

**.eslintrc**

```json
{
  "extends": "@gulujs/eslint-config/js/node"
}
```

### @gulujs/eslint-config/ts

```sh
npm install --save-dev eslint\
    @typescript-eslint/parser\
    @typescript-eslint/eslint-plugin\
    @gulujs/eslint-config
```

**.eslintrc**

```json
{
  "extends": "@gulujs/eslint-config/ts"
}
```


### @gulujs/eslint-config/ts/node

```sh
npm install --save-dev eslint\
    @typescript-eslint/parser\
    @typescript-eslint/eslint-plugin\
    eslint-plugin-node\
    @gulujs/eslint-config
```

**.eslintrc**

```json
{
  "extends": "@gulujs/eslint-config/ts/node"
}
```

## License

- [MIT](LICENSE)
