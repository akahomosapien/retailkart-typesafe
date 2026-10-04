class CustomError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = "CustomError";
    }
}
export default CustomError;
//# sourceMappingURL=CustomError.js.map