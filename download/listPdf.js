// https://askubuntu.com/questions/395150/how-can-i-extract-all-pdf-links-on-a-website
//
//get all link elements
var link_elements = document.querySelectorAll(":link");

//extract out all uris.
var link_uris = [];
for (var i=0; i < link_elements.length; i++)
{
    //remove duplicated links
    if (link_elements[i].href in link_uris)
        continue;

    link_uris.push (link_elements[i].href);
}

//filter out all links containing ".pdf" string
var link_pdfs = link_uris.filter (function (lu) { return lu.indexOf (".pdf") != -1});

//print all pdf links
for (var i=0; i < link_pdfs.length; i++)
    console.log (link_pdfs[i]);
