// Export padrão
export default function log(msg: string) {
    console.log("[LOG]:", msg);
}

// Só pode haver um export default
// export default function errorLog(msg: string) {
//     console.log("[ERROR]",msg);
// }

export function errorLog(msg: string) {
    console.log("[ERROR]",msg);
}