// usuario admin
let usuarioAdmin = {
    nombre: "Admin",
    password: "1234admin",
    adminStatus: false
}

localStorage.setItem('usuarioKey', JSON.stringify(usuarioAdmin));