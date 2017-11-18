const https = require('https');
const json2csv = require('json2csv');
const fs = require('fs');
const flatten = require('flat')

const secretKey = 'Basic dGVhbTk6YlJ6NVFZSm13dlNUR0gyaA==';
let writer = fs.createWriteStream('oneliner1.json');
let articles = 0;
let writes = 0;
let len = 0;
let ids;
let nameid = 1;
let breakAmount = 5000;

writer.write('[');


const options = {
  hostname: 'ultrahack.hs.fi',
  port: 443,
  path: '/articles.json',
  method: 'GET',
  headers: {
    'Authorization': secretKey 
  }
};
const req = https.request(options, (res) => {
  let body = '';
  res.on('data', function(chunk){
    body += chunk;
  });
  res.on('end', function(){
    ids = JSON.parse(body).articleIds;
    len = JSON.parse(body).articleIds.length;
    callStuff(breakAmount);
  });
});
req.on('error', (e) => {
  console.error(e);
});
req.end();

function callStuff(limit) {
  for (i in ids) {
    articles++;
    getStuff(ids[i]);
    if (articles === limit) {
      break;
    }
  }
}

async function getStuff(id) {
  const pathid = '/articles/' + id; 
  const options = {
    hostname: 'ultrahack.hs.fi',
    port: 443,
    path: pathid,
    method: 'GET',
    headers: {
      'Authorization': secretKey 
    }
  };
  const req = await https.request(options, (res) => {
    let body = '';
    res.on('data', function(chunk){
      body += chunk;
    });
    res.on('end', function(){
      let article = JSON.stringify(flatten(JSON.parse(body)));
      writer.write(article);
      writes = writes + 1;
      console.log(writes + ' / ' + len)
      if (writes === articles) {
        writer.write(']');
        writer.end();
        if (writes !== len) {
          nameid++;
          const name = 'oneliner' + (nameid) + '.json';
          writer = fs.createWriteStream(name);
          writer.write('[');
          callStuff(articles + breakAmount);
          console.log(articles);
        } else {
          console('gj');
        }
      } else {
        writer.write(',');
      }
    });
  });
  req.on('error', (e) => {
    console.error(e);
    console.log(pathid);
  });
  req.end();
}

console.log('Running...');

/*const options = {
  hostname: 'ultrahack.hs.fi',
  port: 443,
  path: '/articles/2000005345471',
  method: 'GET',
  headers: {
    'Authorization': secretKey 
  }
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
  
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end(); */