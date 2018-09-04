Bookmarklet [zalukaj -> alltube](javascript:t=document.location.href.split\('/'\).pop\(\).replace\('.html',''\).replace\(/_/g,' '\);var f=document.createElement\('form'\);f.setAttribute\('method','post'\);f.setAttribute\('action','https://alltube.tv/szukaj'\);var i=document.createElement\('input'\);i.setAttribute\('name','search'\);i.setAttribute\('type','hidden'\);i.setAttribute\('value',t\);f.appendChild\(i\);w=window.open\('','_blank'\);w.document.body.appendChild\(f\);f.submit\(\);
)

Bookmarklet code in `bookmarklet.js`

```javascript
javascript:t=document.location.href.split('/').pop().replace('.html','').replace(/_/g,' ');var f=document.createElement('form');f.setAttribute('method','post');f.setAttribute('action','https://alltube.tv/szukaj');var i=document.createElement('input');i.setAttribute('name','search');i.setAttribute('type','hidden');i.setAttribute('value',t);f.appendChild(i);w=window.open('','_blank');w.document.body.appendChild(f);f.submit();
```

More readable code in `bookmarklet-source.js`

```javascript
//---------------------------------------------------------------------
// it is (more readable) souce code used in bookmarklet.js
//---------------------------------------------------------------------

// get title from HTML tag 
//t = document.getElementById('pw_title').innerText.split('/')[0];

// get title from URL
t = document.location.href.split('/').pop().replace('.html','').replace(/_/g,' ')
// or similar method 
//t = document.location.href.split('/').slice(-1).replace('.html','').replace(/_/g,' ')

// create SEARCH form with POST method 
var f = document.createElement("form");
f.setAttribute("method", "post");
f.setAttribute("action", "https://alltube.tv/szukaj");

// create field with title
var i = document.createElement("input");
i.setAttribute("name", "search");
i.setAttribute("type", "hidden");
i.setAttribute("value", t);

// add field to form
f.appendChild(i);

// open new window/tab 
w = window.open('', '_blank'); // browser blocks popup windows

// add form to new window/tab 
w.document.body.appendChild(f);

// send SEARCH form using POST method
f.submit();
```

Based on function `post()` from: [https://stackoverflow.com/a/133997](https://stackoverflow.com/a/133997)
