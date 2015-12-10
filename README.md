[![Dependency Status](https://david-dm.org/dnode/dthrong.svg)](https://david-dm.org/dnode/dthrong)
[![devDependency Status](https://david-dm.org/dnode/dthrong/dev-status.svg)](https://david-dm.org/dnode/dthrong#info=devDependencies)

# dthrong
Start processes depending on the environment variable ```WEB_CONCURRENCY``` or the available processors

## Install
```
npm i dthrong --save
```

## Example
```json
{
  "main": "src/app.js",
  "scripts": {
    "start": "dthrong"
  }
}
```
