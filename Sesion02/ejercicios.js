//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
 
 
 const ul = document.createElement("ul")
 root.append(ul)
 
 for (const prop in pokemons[0]){
     const li = document.createElement("li")
     li.textContent = prop
     li.addEventListener("click", ()=>{
         sortPokemons(prop)
     })
     ul.append(li)
 }
 
//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed
 
const root = document.getElementById("root")
const table = document.createElement("table")
table.classList.add("default")
table.setAttribute("border", "1")
root.append(table)
 
// HEADERS
 
const tr = document.createElement("tr")
 
table.append(tr)
for(const prop in pokemons[0]){
    const th = document.createElement("th")
   
    th.textContent = prop
    th.style.cursor = "pointer"
    th.addEventListener("click", () => {
        sortPokemons(prop)
        table.innerHTML = ""
        table.append(tr)
        createTableBody()
    })
    tr.append(th)
}
 
 
 
// TABLE BODY
function createTableBody(){
    for(const index in pokemons){
        const trb = document.createElement("tr")
        for(const prop in pokemons[index]){
            const td = document.createElement("td")
            td.textContent = pokemons[index][prop]
            trb.append(td)
        }
        table.append(trb)
    }
}
 
 
