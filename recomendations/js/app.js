var imagenes = ["./res/img-1.jpg","./res/img-2.jpg","./res/img-3.jpg","./res/img-4.jpg","./res/img-5.jpg","./res/img-6.jpg",
"./res/img-7.jpg","./res/img-8.jpg","./res/img-9.jpg","./res/img-10.jpg","./res/img-11.jpg","./res/img-12.jpg","./res/img-13.jpg","./res/img-14.jpg",
"./res/img-15.jpg","./res/img-16.jpg","./res/img-17.jpg","./res/img-19.jpg","./res/img-18.jpg"];
var txt = ["Abbey Road","Time Out","Songs in the key of life","Disrraeli Gears","Discovery","Who's Next","Their Satanic Majesties Request",
"Heroes","Help !","London Calling","Swinging Sessions","Revolver","What´s the story morning glory?","Pet Sounds","Blur","Axis Bold As Love","The Doors","Sgt. Pepper´s Loneley Hearts Club Band","Let´s dance"]; 
var artist = ["The Beatles","Dave Brubeck´s Quartet","Stevie Wonder","Cream","Daft Punk","The Who","Rolling Stones","David Bowie","The Beatles",
"The Clash","Frank Sinatra","The Beatles","Oasis","Beach Boys","Blur","Jimi Hendrix","The Doors","The Beatles","David Bowie"];
var info = ["Uno de los albumes más conocidos de toda la historia, último disco de estudio de THE BEATLES grabado en 1969. En el útimo top de albumes de la revista Rolling Stone fue considerado el mejor dicos de la banda británica.",
"Este disco fue grabado durante 1959, considerado el álbum más influyente del Jazz Contemporaneo, fue incluido en la lista de albumes que debes escuchar al menos una vez en tu vida de la Revista Mojo.",
"Este disco de 1976 lanzó a Stevie Wonder a la punta más alta de su carrera, considerado uno de los mejores albumes de los 70´s, el dsico habla de temas muy vigentes como el racismo o la destrucción del medio ambiente.",
"'Sunshine of your love' el tema más conocido de la banda inglesa Cream esta incluido en este álbum, la psicodelia de los 60's esta totalmente reflejada en esta obra.",
"Grabado durante 2001, Discovery fue la obra que catapulta a Daft Punk a niveles insospechables, alcanzando el puesto 1° en hot billboard, Discovery esta dentro de los mejores albumes de toda la Hisoria según la Rolling Stone, la obra cumbre del duo frances.",
"Después del gran exito de la Rock Opera Tommy en 1969, la banda inglesa The Who se aventura en 1972 a grabar este álbum concepual, considerado una de las obras maestras del hard Rock, contine temas como Baba O´Riley o Behind Blue Eyes.",
"Odiado por muchos amado por otros, en 1967 los Rolling Stones graban uno de sus albumes más experimentales alejandose del tradicional sonido del Blues en un intento de alcanzar a su competencia , razón por la que es criticado.",
"Segunda entrega de la trilogía de Berlín de Bowie, lanzado en 1977 y considerado como uno de los mejores trabajos del artista, muchas revistas y criticos lo posicinan como otro de los mejores albumes de la historia.",
"Gran álbum que se ve opacado por estar entre obras maestras, HELP! de 1965 contiene grandes obras ocultas como 'I´ve Just Seen a Face' o 'It´s Only Love' y porsupesto el exito 'HELP! '.",
"Sin duda la obra maestra de The Clash, el disco doble de 1979 muestra la mejor cara del Ragga Rock y del Punk, una critica bien consumada al imperialismo británico y uno de los mejores ablumes de la historia.",
"El último trabajo de Sinatra para Capitol producido en 1961 contine muchos de los grandes clásicos del artista como 'Blue Moon' o 'When you´re smiling' (NO, no contine la quemadísima New York, New York).",
"El último álbum de la banda antes de grabar 'La obra maestra', de 1966 Revolver es un gran salto para la madurez músical de The Beatles y representa la punta de lanza para el Sgt. Pepper´s, considerado como uno de los mejores albumes de la Historia.",
"Uno de los albumes más conocidos de Oasis,grabado en 1995 esta dentro de varias listas de los mejores albumes, contiene sus canciones más conocidas cómo 'Wonderwall' o 'Don´t look back in anger'.",
"Sin duda el mejor álbum de la banda americana Beach Boys, Pet Sounds representa un precedente para la música contemporanea, considerado por muchos como el segundo mejor álbum de la historia, solo por detras del Sgt. Peppers, e inspurado en Rubber Soul.",
"El álbum que rompió con el esquema del Brit Pop, revolucionario y experimetal, un nuevo respiro para la banda britanica Blur y principal respuesta a la feroz rivalidad con Oasis.",
"Censurado en México y de portada controversial, en 1968 Hendrix presenta 'Axis Bold As Love' que contiene la esencia más fresca de los 60´s, politcamente incorrecto pero tan feroz como la frenética 'Bold As Love'.",
"¿El mejor álbum debut de una banda?, es la tipica discución entre los fans de Jimi Hendrix y The Doors, pero algo cierto es que en 1967 los Doors hicieron historia y presentaron su álbum más conocido, considerado como su mejor álbum y dentro de los mejores de la historia.",
"La obra maestra, considearo por muchos como el mejor y más influyente álbum de la hitoria de la música moderna, en 1967 The Batles cambiaría para siempre el rumbo de la música popular, arrebatandole el titulo a Bach Boys.",
"'Thriller','Hot Space' y 'Let´s Dance' compitiendo por ser el álbum inmortal de 1980, el triunfo fue para Michael Jackson, pero este disco no se queda atras con la nueva propuesta de Bowie e innovadores sonidos y maravillos producción para la epoca, precursor del Dance de los 80´s."]; 

var links = ["https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN?si=kPA0tcCZSayFFKJbS8E43w","https://open.spotify.com/album/0nTTEAhCZsbbeplyDMIFuA?si=dQnrFzZETK2HN5jLfmXqjg","https://open.spotify.com/album/6YUCc2RiXcEKS9ibuZxjt0?si=oV9p8WfGQxqb1_nJ0lKq2w",
"https://open.spotify.com/album/3W6CI0Lw7lElAPID2Fd3B4?si=GQITJIY8QSSPMQv4WqIrQw","https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc?si=7yTLHIG-ROqi57U_oN5_mA","https://open.spotify.com/album/5MqyhhHbT13zsloD3uHhlQ?si=R1U4AivgTvCGdbdip4AJyw","https://open.spotify.com/album/2SE7fs002NlNc3cw3SQLRC?si=M08HslycTk2VE8FbqfBZ2Q",
"https://open.spotify.com/album/4I5zzKYd2SKDgZ9DRf5LVk?si=DXI1PXMIQy-P1ZqGOBsaPA","https://open.spotify.com/album/0PT5m6hwPRrpBwIHVnvbFX?si=EFiSZsWcSMK4SYxJQ1-Okg","https://open.spotify.com/album/6FCzvataOZh68j8OKzOt9a?si=DIHW_1DjT26b83ZTLP_HcQ","https://open.spotify.com/album/0rnnzYSJbxKoxcp9U5I2zF?si=oo_r0S-hS0CW5M8YeH_2dA",
"https://open.spotify.com/album/3PRoXYsngSwjEQWR5PsHWR?si=Rty0VOsuT0iAHUf5PUOUHw","https://open.spotify.com/album/1VW1MFNstaJuygaoTPkdCk?si=O4N4-AAdT_-hs76e_un5dQ","https://open.spotify.com/album/6GphKx2QAPRoVGWE9D7ou8?si=bnaTWjE4T9iycic5TlQbqw","https://open.spotify.com/album/3VyHgnHE4cp7YuU7skzuJ2?si=vEBALxq4SBitq-Xoo5eInA",
"https://open.spotify.com/album/3uFZf8rykoHo7XMIQVYW6r?si=FfS8jRTMRT-yEbOvnx6Spw","https://open.spotify.com/album/1jWmEhn3ggaL6isoyLfwBn?si=42DwbXIpTK6OeluyYD0NTQ","https://open.spotify.com/album/6QaVfG1pHYl1z15ZxkvVDW?si=Hg30x1HSTveSbJETqGRB0Q","https://open.spotify.com/album/4NwG11AsDJluT732lSjMrV?si=GTqPjafrRuCmjTpg8s-gdg"]; 

var value = 1;
var total = 19; 
var i;  

function adelante(){

    verify(0);
    document.getElementById('img-l1').src = imagenes[i]; 
    verify(1); 
    document.getElementById('img-l2').src = imagenes[i]; 
    verify(2);
    document.getElementById('img-main').src = imagenes[i];
    setinfo(i);
    verify(3);
    document.getElementById('img-r1').src = imagenes[i]; 
    verify(4);
    document.getElementById('img-r2').src = imagenes[i]; 

    value++; 
    if(value > total){
        value=0; 
    }

console.log("///////////////"); 

    return;  
}


function verify(valor){
    if((valor + value) < (total)){
        i=valor + value;
        console.log(i); 
        return;  
    }else{
        i=(valor + value)% total;
        console.log(i); 
        return; 
    }
}
function setinfo(ban){
    document.getElementById('album-name').textContent=txt[ban]; 
    document.getElementById('artist-name').textContent=artist[ban]; 
    document.getElementById('infotext').textContent=info[ban];
    document.getElementById('linkis').href=links[ban];
    return; 
}

/*function atras(){

    verifya(0);
    document.getElementById('img-l1').src = imagenes[i]; 
    verifya(1); 
    document.getElementById('img-l2').src = imagenes[i]; 
    verifya(2);
    document.getElementById('img-main').src = imagenes[i];
    verifya(3);
    document.getElementById('img-r1').src = imagenes[i]; 
    verifya(4);
    document.getElementById('img-r2').src = imagenes[i]; 

    value--; 
    if(value < 0){
        value=total; 
    }

console.log("///////////////"); 

    return;  
}
function verifya(valor){
    if((value - 1) > 0){
        i=value - 1;
        console.log(i); 
        return;  
    }else{
        i= total;
        console.log(i); 
        return; 
    }
}*/



