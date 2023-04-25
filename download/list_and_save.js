(function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)

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
// for (var i=0; i < link_pdfs.length; i++)
//     console.log (link_pdfs[i]);

console.save(link_pdfs, "saved.txt")
