import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entity/user.entity";

@Injectable()
export class UserService
{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User> 
    ) {

    }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    // find(userId: number) {
    //     return this.userRepository.findOne({
    //         where: {
    //             id: userId
    //         }
    //     });
    // }

    find(id: number) {
        return this.userRepository.findOne({
            where: {id}
        });
    }

    findByEmail(email: string) {
        return this.userRepository.findOne({
            where: {email}
        });
    }

    create(req: CreateUserDto) {
        return this.userRepository.save(req);
    }

    // update(id: number, req: CreateUserDto) {
    //     return {
    //         id,
    //         ...{body: req}
    //     }
    // }

    update(id: number, req: CreateUserDto) {
        return this.userRepository.update(id, req);
    }

    delete(id: number) {
        return this.userRepository.delete(id);
    }
}