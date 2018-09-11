It gets movie's title from url on zalukaj.com and searchs it on alltube.tv

---

Bookmarklet code in `bookmarklet.js`

```javascript
javascript:(function(){var t=document.location.href.split('/').pop().replace('.html','').replace(/-/g,' ');var f=document.createElement('form');f.setAttribute('method','post');f.setAttribute('action','https://alltube.tv/szukaj');var i=document.createElement('input');i.setAttribute('name','search');i.setAttribute('type','hidden');i.setAttribute('value',t);f.appendChild(i);var w=window.open('','_blank');w.document.body.appendChild(f);f.submit();})()
```

Readable code in `bookmarklet-source.js`

```javascript
//---------------------------------------------------------------------
// it is (more readable) souce code used in bookmarklet.js
//---------------------------------------------------------------------

(function(){
        
    // get title from HTML tag 
    //var t = document.getElementById('pw_title').innerText.split('/')[0];

    // get title from URL
    var t = document.location.href.split('/').pop().replace('.html','').replace(/-/g,' ');
    // or similar method 
    //var t = document.location.href.split('/').slice(-1).replace('.html','').replace(/-/g,' ');

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

})()
```

Based on function `post()` from: [https://stackoverflow.com/a/133997](https://stackoverflow.com/a/133997)
