export default {
    input: "src/phone-validator.js",
    output: [
        {
            file: "dist/phone-validator.esm.js",
            format: "esm"
        },
        {
            file: "dist/phone-validator.umd.js",
            format: "umd",
            name: "Phone Validator"
        }
    ]
}
