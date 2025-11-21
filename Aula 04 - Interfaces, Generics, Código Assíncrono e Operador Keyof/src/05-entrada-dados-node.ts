import { createInterface } from "node:readline/promises";

(async() => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    try {
        const nome = await rl.question("Qual é o seu nome?");
        console.log(`Olá ${nome}`);
    } catch (error) {
        console.log("Erro lendo input: ", error);
    } finally {
        rl.close();
    }
})();