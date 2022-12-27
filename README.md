# fakes-auth

Node.js app which authorize user via `Authorization: Bearer XXX` HTTP header.

## Demo 🎉

<https://fakes-auth.piecioshka.io/>

## Example

```bash
curl -H "Authorization: Bearer YWRtaW46YWRtaW4=" https://fakes-auth.piecioshka.io/
# base64( `login:pass` )
# base64( `admin:admin` ) = `YWRtaW46YWRtaW4=`
```

* Decode/encode online https://www.base64decode.org/
* Decode/encode with npm packages https://www.npmjs.com/package/js-base64

[Example in JavaScript](/demo/auth.demo.js)

## How to run with `PM2`?

```bash
pm2 start ecosystem.config.js
```

## How to run on local?

```bash
PORT=4000 npm start
```
