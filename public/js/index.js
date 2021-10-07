var url =window.location.href;

switch (url) {
    case 'http://localhost:3000/':
        changePage(1);
        $('body').css('background',' #8066a4 url(/img/background1.png) no-repeat');
     break;
     case 'http://localhost:3000/services':
         changePage(2);
         $('body').css('background',' #8066a4 url(/img/background2.png) no-repeat ');
     break;   
     case 'http://localhost:3000/contact':
        changePage(3);
        $('body').css('background',' #8066a4 url(/img/background3.png) no-repeat ');
     break;

}

function changePage ( pageNum ){
    var nbPages= $(".page").length; //la taille du tableau des services 
    
    for ( var i=1;i<=nbPages; i++) //parcourir les tableau des services 
    { 
       var photo="#photo"+i; 
        var page="#page"+i;
       if (i == pageNum){
           $(photo).attr('src','img/Rectangle1.png');
           $(page).css('text-decoration','line-through');
       }else 
       $(photo).attr('src','img/Rectangle2.png');
      
    }

    
}


//