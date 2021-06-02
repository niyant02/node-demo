import { objectType } from 'nexus';

export const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id();
        t.model.email();
        t.model.name();
        t.model.profile({
            type: 'Profile',
        });
        t.model.posts({
            type: 'Post',
            ordering: true,
            filtering: true,
            pagination: false,
        });
    },
});

export const Profile = objectType({
    name: 'Profile',
    definition(t) {
        t.model.id();
        t.model.bio();
        t.model.userId();
        t.model.user({
            type: 'User',
        });
    },
});
