import { queryType } from 'nexus';

export const Query = queryType({
    definition(t) {
        t.crud.post();
        t.crud.posts();
        t.crud.user();
        t.crud.users();
    },
});
