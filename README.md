# fetch-node-version

This is CLI tool to fetch a normalized Node version given a version range or string as the single command line argument. It uses [node-version-alias](https://github.com/ehmicky/node-version-alias) under the hood.

## Usage


```shell
$ npm install -g @renderinc/fetch-node-version

$ fetch-node-version 12
12.22.1

$ fetch-node-version v13
13.14.0

$ fetch-node-version ">12 <16"
15.14.0

$ fetch-node-version ">12.1"
16.3.0

$ fetch-node-version lts
14.17.0
```
