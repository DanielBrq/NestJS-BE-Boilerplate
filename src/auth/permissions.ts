import { createAccessControl } from "better-auth/plugins/access";

const statement = {
    project: ["create", "read", "update", "delete"],
    admin: ["create", "read", "update", "delete"],
    owner: ["create", "read", "update", "delete"],
    superAdmin: ["create", "read", "update", "delete"],
} as const;

export const ac = createAccessControl(statement);

export const member = ac.newRole({
    ...ac.statements.project.values,               // base permissions in the core features
});

export const admin = ac.newRole({
    ...ac.statements.project.values,
    ...ac.statements.admin.values,
});

export const owner = ac.newRole({
    ...ac.statements.project.values,
    ...ac.statements.admin.values,
    ...ac.statements.owner.values,
});

export const superAdmin = ac.newRole({
    ...ac.statements.project.values,
    ...ac.statements.admin.values,
    ...ac.statements.owner.values,
    ...ac.statements.superAdmin.values,
});