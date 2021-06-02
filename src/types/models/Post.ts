import { objectType } from 'nexus';

export const Post = objectType({
    name: 'Post',
    definition(t) {
        t.model.id();
        t.model.title();
        t.model.content();
        t.model.published();
        t.model.authorId();
        t.model.author({
            type: 'User',
        });
        t.field('createdAt', {
            type: 'DateTime',
        });
        t.field('updatedAt', {
            type: 'DateTime',
        });
    },
});
