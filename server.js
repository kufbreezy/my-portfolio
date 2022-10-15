const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/public"));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.listen(4000, () => console.log("Visit http://127.0.0.1:4000"));


app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    app.render('portfolio', function (err, html) {
        if (err) console.log(err);
        res.send(html)
    });
  })
  



// app.render('email', function (err, html) {
//     return(
//         <html>here</html>
//     )
//   })


// app.get('/viewdirectory', require('./mymiddleware.js'))

// app.get('/me', (req, res) => {
//     res.redirect('')
//   })

//   router.get('/me',function(req,res){
//     res.sendFile(path.join(__dirname+'/index.html'));
//     //__dirname : It will resolve to your project folder.
//   });