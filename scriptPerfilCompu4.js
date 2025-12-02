// sh4d's  
// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
// export const supabase = createClient('https://geeatbnsxnjicdfdcjvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZWF0Ym5zeG5qaWNkZmRjanZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4OTkzNTUsImV4cCI6MjA3NzQ3NTM1NX0.ja-NZq9Ql01n5gF_IN-vl8yCxbELUzLt2zXr1kU77Ok');

 // Fetch is a method that allows us to get external files by searching for them.
//  With this fetch, we obtain the happy phrases from the .json file.
    // fetch('categorias.json')
    //     .then( response => response.json())
    //     .then(json => {
    //         document.getElementById("fraseFeli0").innerHTML = json.Felicidad[0];
    //         document.getElementById("fraseFeli1").innerHTML = json.Felicidad[1];
    //         document.getElementById("fraseFeli2").innerHTML = json.Felicidad[2];
    //         document.getElementById("fraseFeli3").innerHTML = json.Felicidad[3];
    //         document.getElementById("fraseFeli4").innerHTML = json.Felicidad[4];
    //         document.getElementById("fraseFeli5").innerHTML = json.Felicidad[5];
    //         document.getElementById("fraseFeli6").innerHTML = json.Felicidad[6];
    //         document.getElementById("fraseFeli7").innerHTML = json.Felicidad[7];
    //     })

// With this code we call the database from sh4d's supabase
    const namuClient = supabase.createClient('https://geeatbnsxnjicdfdcjvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZWF0Ym5zeG5qaWNkZmRjanZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4OTkzNTUsImV4cCI6MjA3NzQ3NTM1NX0.ja-NZq9Ql01n5gF_IN-vl8yCxbELUzLt2zXr1kU77Ok', {
            db: {schema:"public"}
        });

        (async () => {
            const response = await namuClient.from("finalFrasesPost").select("cap4")
            console.log(response.data[0].cap4)
                
            document.getElementById("fraseFeli0").innerHTML = response.data[0].cap4;
            document.getElementById("fraseFeli1").innerHTML = response.data[1].cap4;
            document.getElementById("fraseFeli2").innerHTML = response.data[2].cap4;
            document.getElementById("fraseFeli3").innerHTML = response.data[3].cap4;
            document.getElementById("fraseFeli4").innerHTML = response.data[4].cap4;

        })()