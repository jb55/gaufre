# Gaufre

Gopher over HTTP (GoH) web client

![🧇 Waffle Emoji](./waffle_1f9c7.png)

**gaufre** *[noun **goh**-fer]*

1. French word for waffle, a sweet dessert from 🇧🇪 Belgium.
1. Homophone of [Gopher](https://en.wikipedia.org/wiki/Gopher_(protocol)), an early Internet protocol.

## Demo

https://gopher.commons.host

## CLI

Runs a local webserver that serves Gaufre.

```shell
gaufre [port]
```

`port` defaults to `3000`

```shell
$ npx gaufre
Listening on http://localhost:3000
```

## GoH Proxy

Gaufre defaults to using the public GoH proxy service offered by the [Commons Host CDN](https://commons.host).

To use your own local GoH proxy, install [Node.js](https://nodejs.org) and run:

```shell
$ npx goh
Listening on http://localhost:7080
```

Enter this url in the Gaufre settings menu. See the [goh](https://gitlab.com/commonshost/goh) project for CLI options and documentation.

Note: The Safari browser does not allow cross-origin access from Internet web sites to `localhost`.
