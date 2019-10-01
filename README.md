# fakes-auth

Node.js app which authorize user via `Authorization: Barear XXX` HTTP header.

## Demo 🎉

* <https://fakes-auth.herokuapp.com/>

## Example

```bash
curl -H "Authorization: Barear YWRtaW46YWRtaW4=" https://fakes-auth.herokuapp.com/
# base64( `login:pass` )
# base64( `admin:admin` ) = `YWRtaW46YWRtaW4=`
```
