import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "src/user/user.service";

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService) {}

    @Post('/login')
     async login(@Body() loginDto: any) {
        let user = await this.userService.findByEmail(loginDto.email);
        if (user) {
            if (user.password == loginDto.password) {
                return user;
            }

            return "password not match!";
        }

        return "unauthentic";
    }    
}