// With this code we call the database from sh4d's supabase
    const sleep = m => new Promise(r => setTimeout(r, m));
    const namuClient = supabase.createClient('https://geeatbnsxnjicdfdcjvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZWF0Ym5zeG5qaWNkZmRjanZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4OTkzNTUsImV4cCI6MjA3NzQ3NTM1NX0.ja-NZq9Ql01n5gF_IN-vl8yCxbELUzLt2zXr1kU77Ok', {
            db: {schema:"public"}
        });

        (async () => {
            const response = await namuClient.from("finalFrasesPost").select("cap4")
            console.log(response.data[0].cap4)
                
            document.getElementById("fraseFeli14").innerHTML = response.data[0].cap4;
            await sleep(4000);
            document.getElementById("fraseFeli15").innerHTML = response.data[1].cap4;
            await sleep(6000);
            document.getElementById("fraseFeli16").innerHTML = response.data[2].cap4;
            await sleep(7000);
            document.getElementById("fraseFeli17").innerHTML = response.data[3].cap4;
            await sleep(8000);
            document.getElementById("fraseFeli18").innerHTML = response.data[4].cap4;

        })()
        
// Respuestas de los usuarios que se guardan en la base de datos
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

    // LOADER 1: PANTALLAZO NEGRO 3 = CAP 2 A CAP 3
    setTimeout(() => {
      const l1 = document.getElementById("loader1");
      const t1 = document.getElementById("loader1-text");
      l1.style.display = "flex";

      escribirTexto(t1, "Gracias por haberme usado mientras pude servir. \nPero este es mi último ciclo.", 30);
    }, 10000);

    setTimeout(() => {
      document.getElementById("loader1").style.display = "none";
    }, 18000);

    // LOADER 2: PANTALLAZO NEGRO 3 = CAP 2 A CAP 3
    setTimeout(() => {
      const l2 = document.getElementById("loader2");
      const t2 = document.getElementById("loader2-text");
      l2.style.display = "flex";

      escribirTexto(t2, "Procedo a cerrar mis funciones principales. \nBorrando tareas en segundo plano… \nDeteniendo servicios… \nCortando enlaces…", 60);
    }, 21000);

    setTimeout(() => {
      document.getElementById("loader2").style.display = "none";
    }, 35000);

// PANTALLAZO AZUL
    function activarPantallazoAzul() {
        const bsod = document.getElementById("blue-screen");

        bsod.style.display = "flex";
    }

// SECUENCIA AUTOMÁTICA — espera → glitch → BSOD
    setTimeout(() => {
        activarPantallazoAzul();
    }, 40000); // tiempo antes del colapso (puedes cambiarlo)