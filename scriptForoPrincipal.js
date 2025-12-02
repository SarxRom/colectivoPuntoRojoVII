// Solicitud de amistad
    setTimeout(() => {
        document.getElementById("notificacion").classList.remove("oculto");
    }, 10000);

    document.getElementById("aceptar").addEventListener("click", () => {
        window.location.href = "inPerfilCompu.html"; 
    });

    document.getElementById("ver").addEventListener("click", () => {
        window.location.href = "inPerfilCompu.html"; 
    });

    document.getElementById("rechazar").addEventListener("click", () => {
        document.getElementById("notificacion").classList.add("oculto");
    });

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
        })()

// Respuestas de los usuarios
        async function respuestaUsuario(contesta) {
            const useranswer = await namuClient.from('frasesFinalesUsuarios').insert([
                {respuesta: contesta},
            ]).select()
        }
        respuestaUsuario();