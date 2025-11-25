// Sobrescrevendo o namespace do NodeJS
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: "development" | "production";
        API_KEY: "string";
    }
}