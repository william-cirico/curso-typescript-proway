type Usuario = {
    nome: string;
    papel: string;
};

// 1ª forma - 2 passagens no vetor
// function listarAdmins(usuarios: Usuario[]): string[] {
//     return usuarios
//         .filter(usuario => usuario.papel === "admin")
//         .map(usuario => usuario.nome);
// }

// 2ª forma - usando for - 1 passagem
// function listarAdmins(usuarios: Usuario[]): string[] {
//     const resultado: string[] = [];
    
//     for (const usuario of usuarios) {
//         if (usuario.papel === "admin") resultado.push(usuario.nome);
//     }

//     return resultado;
// }

// 3ª forma - usando reduce - 1 passagem (Avançado)
function listarAdmins(usuarios: Usuario[]): string[] {
    return usuarios.reduce<string[]>((acumulador, usuario) => {
        if (usuario.papel === "admin") acumulador.push(usuario.nome);
        return acumulador;
    }, []);
}

const usuarios: Usuario[] = [
    { nome: "William", papel: "admin" },
    { nome: "Ana", papel: "usuario" },
];

console.log(listarAdmins(usuarios));