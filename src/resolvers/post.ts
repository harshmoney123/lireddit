//import { Post } from "src/entities/Post";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver {
    @Query(() => String)
    posts() {
        return "hello";
    }
}