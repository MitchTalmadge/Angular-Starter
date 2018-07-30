const uuidV4 = require("uuid/v4");

export class UUIDGenerator {

    public static generateUUID(): string {
        return uuidV4();
    }

}
