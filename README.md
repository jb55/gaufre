# Gaufre

Gopher Browser for the Web Browser

![🧇 Waffle Emoji](./waffle_1f9c7.png)

**gaufre** *[noun **goh**-fer]*

1. French word for waffle, a sweet dessert from 🇧🇪 Belgium.
1. Homophone of [Gopher](https://en.wikipedia.org/wiki/Gopher_(protocol)), an early Internet protocol.

## Demo

https://gopher.commons.host

## Video

Presented by [Sebastiaan Deckers](https://twitter.com/sebdeckers) at [WFHConf](gopher://wfhconf.commons.host) on 2020-03-26.

[![Talk about Gopher at WFHConf 2020](./wfhconf-talk.jpg)](https://www.youtube.com/watch?v=4OphAbBnZSs)

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

Gaufre defaults to using the public Gopher over HTTP (GoH) proxy service offered by the [Commons Host](https://commons.host) open source CDN project.

To use your own local GoH proxy, install [Node.js](https://nodejs.org) and run:

```shell
$ npx goh
Listening on http://localhost:7080
```

Enter this url in the Gaufre settings menu. See the [goh](https://gitlab.com/commonshost/goh) project for CLI options and documentation.

Note: The Safari browser does not allow cross-origin access from Internet web sites to `localhost`.
