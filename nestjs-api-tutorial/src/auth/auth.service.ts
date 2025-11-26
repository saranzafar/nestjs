import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup() {
        return { msg: "i have signup" }
    }
    signin() {
        return { msg: "i have signin" }
    }
}