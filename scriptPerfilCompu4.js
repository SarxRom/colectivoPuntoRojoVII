// With this code we call the database from sh4d's supabase
    const namuClient = supabase.createClient('https://geeatbnsxnjicdfdcjvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZWF0Ym5zeG5qaWNkZmRjanZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4OTkzNTUsImV4cCI6MjA3NzQ3NTM1NX0.ja-NZq9Ql01n5gF_IN-vl8yCxbELUzLt2zXr1kU77Ok', {
            db: {schema:"public"}
        });

        (async () => {
            const response = await namuClient.from("finalFrasesPost").select("cap4")
            console.log(response.data[0].cap4)
                
            document.getElementById("fraseFeli14").innerHTML = response.data[0].cap4;
            document.getElementById("fraseFeli15").innerHTML = response.data[1].cap4;
            document.getElementById("fraseFeli16").innerHTML = response.data[2].cap4;
            document.getElementById("fraseFeli17").innerHTML = response.data[3].cap4;
            document.getElementById("fraseFeli18").innerHTML = response.data[4].cap4;

        })()
        
// Respuestas de los usuarios que se guardan en la base de datos
        async function respuestaUsuario(res) {
             const respondemewe = await namuClient.from('frasesFinalesUsuarios').insert([
                 {respuestas: res},
             ]).select()
         }
         respuestaUsuario();

// PANTALLAZO AZUL
    function activarPantallazoAzul() {
        const bsod = document.getElementById("blue-screen");

        bsod.style.display = "flex";
    }

// SECUENCIA AUTOMÁTICA — espera → glitch → BSOD
    setTimeout(() => {
        activarPantallazoAzul();
    }, 30000); // tiempo antes del colapso (puedes cambiarlo)