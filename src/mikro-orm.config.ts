import path from "path";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";

export default {
    migrations: {
        path: path.join(__dirname, './migrations'), 
        glob: '!(*.d).{js,ts}',
        emit: 'ts',
    },
    entities: [Post],
    type: "postgresql",
    dbName: 'lireddit',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];