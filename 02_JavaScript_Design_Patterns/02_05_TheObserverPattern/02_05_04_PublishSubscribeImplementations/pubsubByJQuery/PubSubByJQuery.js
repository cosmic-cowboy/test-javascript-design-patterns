var newsweek = $("#newsweek");

// 購読
// jQuery: $(obj).on( "channel", [data], fn );
newsweek.on( "/login", function( event , data){
	alert("hello " + data.username +  "! This is " + data.userData  + "!" );
} );

// 発行
// jQuery: $(obj).trigger("channel", [arg1, arg2, arg3]);
newsweek.trigger( "/login", [{username:"test", userData:"test"}] );

// 購読中止
// jQuery: $(obj).off( "channel" );
newsweek.off( "/login" );

// 発行
// jQuery: $(obj).trigger("channel", [arg1, arg2, arg3]);
newsweek.trigger( "/login", [{username:"test", userData:"test"}] );
