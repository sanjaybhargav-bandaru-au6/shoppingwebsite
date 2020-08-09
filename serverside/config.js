export default {
    MONGODB_URI:process.env.DB_URI,
    JWT_SECRET_KEY:process.env.JWT_KEY ||'@#$thisisaSecratekey'
}
