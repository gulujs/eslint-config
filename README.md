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

### @lunjs/eslint-config/node

```sh
npm install --save-dev eslint @lunjs/eslint-config eslint-plugin-node
```

**.eslintrc**

```json
{
    "extends": "@lunjs/eslint-config/node"
}
```

### @lunjs/eslint-config/ts

```sh
npm install --save-dev eslint\
    @lunjs/eslint-config\
    eslint-plugin-node\
    @typescript-eslint/parser\
    @typescript-eslint/eslint-plugin
```

**.eslintrc**

```json
{
    "extends": "@lunjs/eslint-config/ts"
}
```

## License

- [MIT](https://github.com/lunjs/eslint-config/blob/master/LICENSE)
