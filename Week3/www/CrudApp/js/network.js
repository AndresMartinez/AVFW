$( document ).bind('device ready', function(){
     connection();
     $('#btnCheck').bind('touch start', connection);
} );


function connection ()
{
     switch(navigator.network.connection.type)
     {
      case Connection.UNKNOWN:
         $('#imgConnection').attr('src','img/unknown.png');
         break;
       case Connection.WIFI:
         $('#imgConnection').attr('src','img/wifi.png');
         break;
       case Connection.CELL_2:
         $('#imgConnection').attr('src','img/2g.png');
         break;
       case Connection.CELL_3:
         $('#imgConnection').attr('src','img/3g.png');
         break;
       case Connection.CELL_4:
         $('#imgConnection').attr('src','img/4.png');
         break;
        case Connection.NONE:
         $('#imgConnection').attr('src','img/none.png');
         break;
 
     }

}


 function connection ()
{
   switch(navigator.network.connection.type)
   {
   case Connection.UNKNOWN:
   $('#imgConnection').attr('src','img/unknown.png');
   break;
   case Connection.WIFI:
   $('#imgConnection').attr('src','img/wifi.png');
   break;
   case Connection.CELL_2:
   $('#imgConnection').attr('src','img/2g.png');
   break;
   case Connection.CELL_3:
   $('#imgConnection').attr('src','img/3g.png');
   break;
   case Connection.CELL_4:
   $('#imgConnection').attr('src','img/4.png');
   break;
   case Connection.NONE:
   $('#imgConnection').attr('src','img/none.png');
   break;
   
   }
   
}
