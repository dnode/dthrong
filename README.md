[![Dependency Status](https://david-dm.org/dnode/dthrong.svg)](https://david-dm.org/dnode/dthrong)
[![devDependency Status](https://david-dm.org/dnode/dthrong/dev-status.svg)](https://david-dm.org/dnode/dthrong#info=devDependencies)

# dthrong
Start as much processes of your application as you need

## Install
```
npm i dthrong --save
```

## Example
- Start as much processes of your application as processors are available
```
dthrong src/app.js
```
- Start as much processes of your application as the value of a given environment variable (e.g. WEB_CONCURRENCY on Heroku)
```
dthrong src/app.js WEB_CONCURRENCY
```
