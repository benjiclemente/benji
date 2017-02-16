

var msg = {};


msg[1]="hola";
msg[2]="hola2"
msg[3]="tercera";
msg[4]="cuarta";
console.log(msg);


function app_start(){
	$("#content").html("<a href=\"javascript:scpf('esp');\">"+msg[1]+"</a>. ");
	
	$("#content").fadeIn(200);
}