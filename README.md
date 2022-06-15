# fakes-auth

Node.js app which authorize user via `Authorization: Bearer XXX` HTTP header.

## Demo 🎉

* <https://fakes-auth.herokuapp.com/>

## Example

```bash
curl -H "Authorization: Bearer YWRtaW46YWRtaW4=" https://fakes-auth.herokuapp.com/
# base64( `login:pass` )
# base64( `admin:admin` ) = `YWRtaW46YWRtaW4=`
```

* Decode/encode online https://www.base64decode.org/
* Decode/encode with npm packages https://www.npmjs.com/package/js-base64

[Example in JavaScript](/auth.js)
