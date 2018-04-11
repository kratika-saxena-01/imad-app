var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;

var config = {
  user : 'kratikathesaxena',
  database : 'kratikathesaxena',
  host : 'db.imad.hasura-app.io',
  port : '5432',
  password : process.env.DB_PASSWORD
};

var app = express();

var articles={
'article-one':{
    title : 'Article-One | Kratika Saxena',
    heading : 'Article-One',
    date : 'March 6, 2018',
    content : `<p>this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.
            </p>
            <p>
                this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.
            </p>`
},
'article-two':{ title : 'Article-Two | Kratika Saxena',
    heading : 'Article-Two',
    date : 'March 6, 2018',
    content : `<p>this is second article
            </p>`},
'article-three':{
    title : 'Article-Three | Kratika Saxena',
    heading : 'Article-Three',
    date : 'March 6, 2018',
    content : `<p>this is third article
            </p>`
}
};
function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var template=`
<html>
    
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
    
    return template;
}


app.use(morgan('combined'));

var pool = new Pool(config);

app.get('/test-db',function(req,res){
    
    //make a select request
    //return response with result
    pool.query('select * from test',function(err,result){
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            res.send(JSON.stringify(rseult.rows));
        }
    });
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var names=[];
app.get('/submit-name',function(req,res){//url : /submit-name?name=jsakj
  //get the name from the request
  var name=req.query.name;
  names.push(name);
  //JSON
  
  res.send(JSON.stringify(names));
});

app.get('/:articleName',function (req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));});
//articleName==article-One



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
