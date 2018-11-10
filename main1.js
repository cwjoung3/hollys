var http = require('http');
var fs = require('fs');
var template = require('./template.js');
var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'hollysmain'
});
db.connect();

var app = http.createServer(function(request,response){
    var url = request.url;
    var queryData = '1'
    if(url === '/'){
    db.query(`select * from site_info where SI_Id=?`,`2`, function (error,results){
      if(error){
        throw error;
      }
      var title = results[0].SI_Name;
      var shipcost = results[0].SI_Min_ShipCost;
      var html = template.HTML(
        `<h2>${title}</h2>${shipcost}`
      )

      response.writeHead(200);
      response.end(html);
    });
    }

});
/*
db.query(`SELECT * FROM topic WHERE id=?`,[queryData.id], function(error2, topic){
           if(error2){
             throw error2;
           }
          var title = topic[0].title;
          var description = topic[0].description;
          var list = template.list(topics);
          var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            ` <a href="/create">create</a>
                <a href="/update?id=${queryData.id}">update</a>
                <form action="delete_process" method="post">
                  <input type="hidden" name="id" value="${queryData.id}">
                  <input type="submit" value="delete">
                </form>`
          );
*/

app.listen(3000);
