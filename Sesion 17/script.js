function getUsers(){
    fetch('http://localhost:9000/api/users')
    .then(response => response.json())
    .then(data => console.log(data))

}


// obtener un cliente por id
function getUser(id){
    fetch(`http://localhost:9000/api/users/${id}`)
    .then(response => response.json())
    .then(data => console.log(data));
}
getUsers()
getUser("639fe34f39fa57be2ddcf02b")