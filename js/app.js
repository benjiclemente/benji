

var msg = {};


msg[1]="Hola.";
msg[2]=["Permíteme que me presente, soy Benji Clemente, un estudiante de publicidad que no acaba de sentirse correctamente explicado por esa definición. Y tú:",
		"¿Quién eres?"];
menu=[
		"Un amigo.",
		"Un compañero de clase.",
		"Un profesor.",
		"Quieres colaborar conmigo.",
		"Mi madre.",
		"Toni Segarra.",
		"Buscas información sobre mis principales socios.",
		"Isaïes Andrés.",
		"Has llegado aquí sin saber muy bien cómo, ni por qué."]

msg["portfolio"] = "https://benjicb.wordpress.com/";




finalMsg = [1,2,3,4,5,6,7,8,9,0];	
console.log(menu.length+"---"+finalMsg.length);


finalMsg= [	

		"UN AMIGO <br>Lo siento mucho, pero aquí no te puedo explicar tan perfectamente como me gustaría a qué me dedico, por eso seguramente no sé si vas a encontrar lo que andabas buscando."+
		"<br>Si quieres saber algo sobre mí, ¿por qué no me llamas? Es más rápido, más fácil y además puedes invitarme a una cerveza."+
		"<br>De todas formas, aquí tienes mi portfolio por si te aburres y quieres echarle un vistazo.",

		"COMPAÑERO DE CLASE<br>	Hola, bienvenido, me encanta tener colegas cerca. Espero que puedas disfrutar de mi trabajo e incluso darme feedback si lo consideras necesario.",
		
		"UN PROFESOR<br>Bienvenido a esta web que no puede informarte de nada, o casi nada, relacionado directamente con tu asignatura. <br>"+
		"Aunque haya aprendido contigo, a continuación encontrarás un portfolio creativo en el que, por mucho que me esfuerce, nunca conseguiré trasladar todas las cosas que has visto y has sentido en tu relación conmigo y con mi manera de trabajar."+
		"De cualquier modo, y aprovechando que has llegado hasta aquí, quiero agradecerte infinitamente la confianza que has depositado en mí."+
		"Gracias y disfruta.",
		
		"QUIERES COLABORAR CONMIGO<br>"+
		"Una de las razones por la que me gusta tanto lo que hago es porque me permite colaborar con gente diversa, de diverso y notable talento. Si tú eres uno de ellos me gustaría conocerte. Aquí encontrarás mi portfolio y en él la manera de ponerte en contacto conmigo."+
		"Creo que el futuro, para una creativo que se exige el máximo nivel de excelencia, pasa por la colaboración.",
		
		"MI MADRE<br>"+
		"Hola querida mamá. Ya sé que no resulta muy creíble que lo diga uno mismo, pero puedes estar tranquila y sentirte orgullosa del oficio que ejerce tu hijo.<br>"+
		"Y para que no tengas que fiarte sólo de mi palabra, aquí te ofrezco mis trabajos para que veas que muchas de esas locuras que me ves hacer a veces tienen cierto sentido (o al menos eso me gusta creer a mí).",


		"TONI SEGARRA<br>"+
		"Hola, Toni. Si has llegado hasta aquí supongo que es porque estarás buscando a ese loco estudiante de Publicidad y RR.PP. de la UJI que hizo todo lo posible para llamar tu atención."+
		"Sé que este es un oficio cruel para el que no lo ama, pero ese no es mi caso.<br>"+
		"No quiero añadir ninguna presión a la que ya debes soportar, pero debo decirte que tengo mucha confianza en poder aprender grandes cosas de ti. Esta profesión, como tantas otras, está viviendo un profundo proceso de transformación que va a necesitar de gente con mucho talento y con capacidad para inventar, para imaginar. Capacidades que podría aportar en tu agencia."+
		"Ahora vayamos a lo práctico. Si has llegado hasta aquí supongo que es porque quieres saber algo más sobre mí.  A ver si he acertado."
		,
		"BUSCAS INFORMACIÓN SOBRE MIS PRINCIPALES SOCIOS<br>"+
		"A lo largo de esta carrera he tenido el placer de formar parte de una mini-agencia a la que decidimos llamar BrainTime. formada por Adrián Arjona, Alejandro Gomis y Celia Pérez, además de mí.<br>"+
		"Además de ello, con Celia Pérez llevé a cabo varios trabajos como dupla bajo el nombre de Dr.Coy&Mr.Art.<br>"+
		"También he tenido la suerte de trabajar en alguna que otra campaña creativa últimamente con Almudena Bueno bajo el nombre de dupla Fantástica Catástrofe.",
		"ISAÏES ANDRÉS<br>"+
		"Si no eres Isaïes pero has entrado aquí de todos modos, ya sea porque te gusta el riesgo o porque te va eso de suplantar identidades, te cuento: Isaïes fue el informático que creó y configuró esta página web.<br>"+
		"Y si de verdad eres él, no hay palabras para agradecer el favor que me has hecho al acceder a ayudarme con esta página web. Gracias.",

		"HAS LLEGADO HASTA AQUÍ SIN SABER MUY BIEN CÓMO, NI POR QUÉ<br>"+
		"¡Ah, la red, la infinita, inabarcable y divertida Worldwide Web!<br>"+
		"No tienes nada que ver conmigo y sin saber cómo has llegado aquí. Quizá por error, o por destino, o porque en algún momento de tu navegación, y por alguna extraña razón, te he interesado. Incluso es posible que ni siquiera sea la primera vez."+
		"La cuestión es que has llegado a una web muy poco, cómo decirlo, muy poco web. Esto en realidad solo es un portal de bienvenida a mi portfolio, donde puedes seguir investigando, que seguro que encuentras algo que te parezca curioso."
	];	







function app_start(){
	
	$("#content").html("<a href=\"javascript:ask();\">"+msg[1]+"</a> ");
	
	$("#content").fadeIn(200);
}

function ask () {
	$("#content").html("<p>"+msg[2][0]+"<a href=\"javascript:dataStart();\">"+msg[2][1]+"</a> </p>");
	
	$("#content").fadeIn(200);
	
}
function dataStart(){

	text="<p>";
	for (var i=0; i<menu.length; i++){
		 text += "<a href='javascript:final_text("+i+",true)'>" + menu[i] + "</a> ";	
	}
	text += "</p>";
	$("#content").html(text);
}

function final_text(i){
	$("#content").html("<p>"+finalMsg[i]+"</p>");
	
	$("#content").fadeIn(200);
}