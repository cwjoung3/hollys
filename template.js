module.exports = {
  HTML:function(body){
    return `
    <!doctype html>
    <html>
    <head>
      <title>Price Comparison</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">Main</a></h1>
      ${body}
    </body>
    </html>
    `;
  }

  /*,list:function(topics){
    var list = '<ul>';
    var i = 0;
    while(i < topics.length){
      list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }*/
}
