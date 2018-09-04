
//---------------------------------------------------------------------
// function from: https://stackoverflow.com/a/133997
//---------------------------------------------------------------------

function post(path, params, method) {
    
    method = method || "POST"; // Set method to POST by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

//---------------------------------------------------------------------
// example of use with zalukaj.com and alltube.tv
//---------------------------------------------------------------------

// get title from HTML tag (zalukaj.com)
t = document.getElementById('pw_title').innerText.split('/')[0];

// get title from URL (zalukaj.com)
t = document.location.href.split('/').pop().replace('.html','').replace(/_/g,' ')
// or similar method (zalukaj.com) 
t = document.location.href.split('/').slice(-1).replace('.html','').replace(/_/g,' ')

// post to alltube.tv
post('https://alltube.tv/szukaj', {search: title})
