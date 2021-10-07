const express=require('express');
const path=require('path');
//init app 
const app = express();
// load view engin 
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');
app.use(express.static('public'));
//home route

//  app.get('/',function(req,res){
//      res.render('home_page');
//  });

// our services  route
app.get('/services',function(req,res){
     res.render('our_services');
 })

// contact us route
app.get('/contact',function(req,res){
     res.render('contact_us');
 })

 //middleware 

 app.use( function(req, res){
  //console.log("hello");
  let date= new Date();
  let day=date.getDay();
  let hours=date.getHours();
  console.log(day);
  console.log(hours);
  let  a = ((day ==0 ) || (day == 6));
  let  b = ((hours<9) || (hours>17)) ;
  console.log(a);
  console.log(b);
  
   if (a)  {
       console.log("not available !!")
       res.send("not available !")
    }
     else{ 
           if (b) {
               res.send("not available !")
            }
          else {
              console.log("availbale !!")      
              res.render('home_page');
        } 
          }
  

        // next();
} )

//start sever 
app.listen(3000,function(){
    console.log("server started on port 3000 ...");
})
