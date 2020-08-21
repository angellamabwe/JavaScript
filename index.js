const fs = require('fs'); //file system
const http = require('http'); //core module 4 creating web servers
const url = require('url'); //for routing


//loading the file by passing the absolute path to data.json
// _dirname varible is basically the home folder
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
// console.log(__dirname);
const laptopData = JSON.parse(json); //Converts a JavaScript Object Notation (JSON) string into an object
// console.log(laptopData);

// CREATING THE SERVER: part 1
// the callback fnx in createServer method gets fired up each times a person accesses the website
const server = http.createServer((req, res) => {
    //routing
    // 1st analyse the URL.But where is the URL? In the req parameter
    // console.log(req.url);
    const pathName = url.parse(req.url, true).pathname; //true: so that the query is parsed into an object
    console.log(pathName);
    const id = url.parse(req.url, true).query.id;
    // console.log(query); //http://127.0.0.1:1337/laptop?id=3     [Object: null prototype] { id: '3' }
                        //http://127.0.0.1:1337/laptop?id=3&name=apple&date=today 
                        //[Object: null prototype] { id: '3', name: 'apple', date: 'today' }
    // console.log(pathName);
    // console.log(id);

    // ROUTING: PRODUCTS OVERVIEW
    if(pathName === '/products' || pathName === '/'){
        res.writeHead(200, { 'Content-type': 'text/html'});

        // 1st providing the general overview & then e dynamic # of laptops
        fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (err, readData) => {
            // rendering {%CARDS%}
            let overviewOutput = readData;

            fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (err, readData) => {
                // loop through all of our different laptops & create the template for each of them
                const cardsOutput = laptopData.map(el => replaceTemplate(readData, el)).join('');
                overviewOutput = overviewOutput.replace('{%CARDS%}', cardsOutput);
                res.end(overviewOutput);
            });

        });

    }

    // LAPTOP DETAIL: ROUTING FOR /laptop pathname
    else if(pathName === '/laptop' && id <  laptopData.length){
        res.writeHead(200, { 'Content-type': 'text/html'});     //type of data and then the file extension
        // res.end(`This is the LAPTOP page for page ${id}`);

        //reading the laptop.html
        fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (err, readData) => {
            //readData will be holding the html data that we read from template-laptop.html
            // now we want to use the replace method to replace our placeholders
            const laptop = laptopData[id];
            const output = replaceTemplate(readData, laptop);
            // sending the response to the browser
            res.end(output);
        });
    }
    // ROUTING FOR ALL IMAGES PATHNAMES .jpg, .png, 
    else if((/\.(jpg|jpeg|png|gif)$/i).test(pathName)){ //a true false value indicating if the resource that we're requesting is an image
                /*test if our path name contains this regular expression. We will test if the pathName contains .jpg or .jpeg or .png or .gif. 
                If it does, well then we're going to read that image and save it or basically send it back as the response */
        fs.readFile(`${__dirname}/data/img${pathName}`,(err, data) => {
            res.writeHead(200, { 'Content-type': 'image/jpg'});
            res.end(data);
        });
    }

    // URL NOT FOUND
    else {
        res.writeHead(404, { 'Content-type': 'text/html'});
        res.end('URL not found');
    }

});

// Creating the server part 2: we have to listen on a certaing PORT & IP Address
server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for incoming request');
});

function replaceTemplate(originalHtml, laptop) {
    // Replace replaces the first occurence, hence the need to use regular expression
    let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
    output = output.replace(/{%IMAGE%}/g, laptop.image);
    output = output.replace(/{%CPU%}/g, laptop.cpu);
    output = output.replace(/{%RAM%}/g, laptop.ram);
    output = output.replace(/{%STORAGE%}/g, laptop.storage);
    output = output.replace(/{%SCREEN%}/g, laptop.screen);
    output = output.replace(/{%PRICE%}/g, laptop.price);
    output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
    output = output.replace(/{%ID%}/g, laptop.id);
    return output;
}



// The duplicate can be achieved by CTRL+C and CTRL+V 
// with cursor in the line without nothing selected.

// multi-selection: alt + click