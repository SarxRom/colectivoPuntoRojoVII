// Frases para publicaciones

    const namuClient = supabase.createClient('https://geeatbnsxnjicdfdcjvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZWF0Ym5zeG5qaWNkZmRjanZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4OTkzNTUsImV4cCI6MjA3NzQ3NTM1NX0.ja-NZq9Ql01n5gF_IN-vl8yCxbELUzLt2zXr1kU77Ok', {
                db: {schema:"public"}
            });
            
        (async () => {
            const response = await namuClient.from("finalFrasesPost").select("cap1")
            console.log(response.data[0].cap1)

            document.getElementById("fraseFeli0").innerHTML = response.data[0].cap1;
            document.getElementById("fraseFeli1").innerHTML = response.data[1].cap1;
            document.getElementById("fraseFeli2").innerHTML = response.data[2].cap1;
            document.getElementById("fraseFeli3").innerHTML = response.data[3].cap1;
            document.getElementById("fraseFeli4").innerHTML = response.data[4].cap1;

            const response2 = await namuClient.from("finalFrasesPost").select("cap2")
            console.log(response2.data[0].cap2)
                
            document.getElementById("fraseFeli5").innerHTML = response2.data[0].cap2;
            document.getElementById("fraseFeli6").innerHTML = response2.data[1].cap2;
            document.getElementById("fraseFeli7").innerHTML = response2.data[2].cap2;
            document.getElementById("fraseFeli8").innerHTML = response2.data[3].cap2;
            document.getElementById("fraseFeli9").innerHTML = response2.data[4].cap2;

            const response3 = await namuClient.from("finalFrasesPost").select("cap3")
            console.log(response3.data[0].cap3)
                
            document.getElementById("fraseFeli10").innerHTML = response3.data[0].cap3;
            document.getElementById("fraseFeli11").innerHTML = response3.data[1].cap3;
            document.getElementById("fraseFeli12").innerHTML = response3.data[2].cap3;
            document.getElementById("fraseFeli13").innerHTML = response3.data[3].cap3;
        })()

// Loader de entrada
// NO IDENTAR; EL FORMATO YA ESTÁ BIEN
// INVESTIGAR CÓMO HACER QUE EL CURSOR INICIE CADA FRASE DESDE EL INICIO DE LA LÍNEA

document.addEventListener("DOMContentLoaded", () => {

            const text = 
`Recopilando...
Accediendo a los fragmentos...
Iniciando...`;

            let index = 0;
            const screen = document.getElementById("typewriter-screen");
            const typewriter = document.getElementById("typewriter-text");

            // Espera a que termine el loader (2.5s)
            setTimeout(() => {

                // Ocultar loader
                document.getElementById("loader").style.display = "none";

                // Mostrar pantalla de máquina de escribir
                screen.style.display = "flex";
                setTimeout(() => screen.style.opacity = 1, 50);

                function type() {
                    if (index < text.length) {
                        typewriter.textContent += text[index];
                        index++;

                        const speed = 40 + Math.random() * 80; // Velocidad variable
                        setTimeout(type, speed);

                    } else {
                        // DESVANECER Y MOSTRAR CONTENIDO REAL
                        setTimeout(() => {
                            screen.style.opacity = 0;

                            setTimeout(() => {
                                screen.style.display = "none";
                                document.querySelector(".container").style.display = "flex";
                                document.body.style.overflow = "auto";
                            }, 600);

                        }, 900);
                    }
                }

                type();

            }, 2500);
        });

// Respuestas de los usuarios
        async function respuestaUsuario(res) {
            const respondemewe = await namuClient.from('frasesFinalesUsuarios').insert([
                {respuestas: res},
            ]).select()
        }
        respuestaUsuario();
