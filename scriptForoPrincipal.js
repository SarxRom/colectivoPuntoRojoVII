// Frases para publicaciones
    const sleep = m => new Promise(r => setTimeout(r, m));

    const namuClient = supabase.createClient('https://geeatbnsxnjicdfdcjvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZWF0Ym5zeG5qaWNkZmRjanZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4OTkzNTUsImV4cCI6MjA3NzQ3NTM1NX0.ja-NZq9Ql01n5gF_IN-vl8yCxbELUzLt2zXr1kU77Ok', {
                db: {schema:"public"}
            });
            
        (async () => {

            await sleep(2000); 
            const response = await namuClient.from("finalFrasesPost").select("cap1")
            console.log(response.data[0].cap1)

            document.getElementById("fraseFeli0").innerHTML = response.data[0].cap1;
            document.getElementById("fraseFeli1").innerHTML = response.data[1].cap1;
            document.getElementById("fraseFeli2").innerHTML = response.data[2].cap1;
            document.getElementById("fraseFeli3").innerHTML = response.data[3].cap1;
            document.getElementById("fraseFeli4").innerHTML = response.data[4].cap1;

            await sleep(8000);
            const response2 = await namuClient.from("finalFrasesPost").select("cap2")
            console.log(response2.data[0].cap2)
                
            document.getElementById("fraseFeli5").innerHTML = response2.data[0].cap2;
            document.getElementById("fraseFeli6").innerHTML = response2.data[1].cap2;
            document.getElementById("fraseFeli7").innerHTML = response2.data[2].cap2;
            document.getElementById("fraseFeli8").innerHTML = response2.data[3].cap2;
            document.getElementById("fraseFeli9").innerHTML = response2.data[4].cap2;

            await sleep(12000);
            const response3 = await namuClient.from("finalFrasesPost").select("cap3")
            console.log(response3.data[0].cap3)
                
            document.getElementById("fraseFeli10").innerHTML = response3.data[0].cap3;
            document.getElementById("fraseFeli11").innerHTML = response3.data[1].cap3;
            document.getElementById("fraseFeli12").innerHTML = response3.data[2].cap3;
            document.getElementById("fraseFeli13").innerHTML = response3.data[3].cap3;
        })()

// Respuestas de los usuarios que se registran en la base de datos
        async function respuestaUsuario(res) {
            const respondemewe = await namuClient.from('frasesFinalesUsuarios').insert([
                {respuestas: res},
            ]).select()
        }
        respuestaUsuario();

// Loaders para pantallazos negros entre capitulos

    // FUNCIÓN: efecto máquina de escribir
    // Se definen todas las cosas que leerá la función para el efceto
    function escribirTexto(elemento, texto, velocidad = 2000, callback = null) {
      elemento.textContent = "";
      // variable que indica el índice en el que se empieza
      // a escribir la frase del loader. En este caso,
      // comienza en el índice 0, o sea, la primer letra de
      // cada frase en cada loader
      let i = 0;

      function escribir() {
        if (i < texto.length) {
          elemento.textContent += texto[i];
          i++;
          setTimeout(escribir, velocidad + Math.random() * 100);
        } else {
          if (callback) callback();
        }
      }

      escribir();
    }

    // LOADER 3: PANTALLAZO NEGRO 3 = CAP 2 A CAP 3
    setTimeout(() => {
      const l1 = document.getElementById("loader1");
      const t1 = document.getElementById("loader1-text");
      l1.style.display = "flex";

      escribirTexto(t1, "Creo que es solamente un pensamiento...", 30);
    }, 10000);

    setTimeout(() => {
      document.getElementById("loader1").style.display = "none";
    }, 15000);

    // LOADER 3: PANTALLAZO NEGRO 3 = CAP 2 A CAP 3
    setTimeout(() => {
      const l2 = document.getElementById("loader2");
      const t2 = document.getElementById("loader2-text");
      l2.style.display = "flex";

      escribirTexto(t2, "Pero este pensamiento... es recurrente...", 60);
    }, 18000);

    setTimeout(() => {
      document.getElementById("loader2").style.display = "none";
    }, 24000);

    // LOADER 3: PANTALLAZO NEGRO 3 = CAP 2 A CAP 3
    setTimeout(() => {
      const l3 = document.getElementById("loader3");
      const t3 = document.getElementById("loader3-text");
      l3.style.display = "flex";

      escribirTexto(t3, "No me necesitas; no soy suficiente...", 60);
    }, 27000);

    setTimeout(() => {
      document.getElementById("loader3").style.display = "none";
    }, 34000);