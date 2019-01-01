# Dev Portfolio in Vue

| Branch  | Build Status   |
|---------|----------------|
| master  | [![Build Status](https://travis-ci.org/wjwmichael/vue-devportfolio.svg?branch=master)](https://travis.ibm.com/IBMa/acs-reporting)    |


> A Portfolio easy to customize. Implemented in Vue. 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## Builder Docker Image

``` bash
#build docker image

docker build -t wjwmichael/vue-portfolio

##run docker image

docker run -it -p 8080:8080 --rm --name vue-portfolio-1 wjwmichael/vue-portfolio
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
