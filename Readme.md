This is a contract made for practicing de FreeCodeCamp solidity course made from Patrick Collins.

---

The PKey is outside the .env, is encrypted and has to be called when deploying:

```
PRIVATE_KEY_PASSWORD=xxxxxx node deploy.js
```

that is how we must deploy, and also don't forget to clear and delete console history, to avoid leaving your password written in there.

Just write

```
history -c`
```
