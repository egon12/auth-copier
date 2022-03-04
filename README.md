# auth-copier

This is firefox extension that will create button
when we call ajax with Authorization Header.
Although it's still need to whitelist the url that we
need.


## How to use

To use it first you need to add your url (that you know 
have Authorization Header in `manifest.json` and `background.json`


### For Android

You can try to install this extension by using 

```
web-ext run -t firefox-android --adb-device XXX --firefox-apk org.mozilla.fenix
```

Dont forget to install `web-ext` from https://github.com/mozilla/web-ext

### For Firefox Desktop

You need to go to `about:debugging#/runtime/this-firefox` 
Then you need to `Load Temporary Add-on...` and specify where this folder on

