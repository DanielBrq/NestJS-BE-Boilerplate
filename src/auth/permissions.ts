import { createAccessControl } from "better-auth/plugins/access";

const statement = {
    // Inherited permissions
    project: ["create", "read", "update", "delete"],
    admin: ["create", "read", "update", "delete"],
    owner: ["create", "read", "update", "delete"],
    superAdmin: ["create", "read", "update", "delete"],
} as const;

export const ac = createAccessControl(statement);

export const member = ac.newRole({
    ...ac.statements,
});

export const admin = ac.newRole({
    project: ["create", "read", "update", "delete"],
    admin: ["create", "read", "update", "delete"],
});

export const owner = ac.newRole({
    project: ["create", "read", "update", "delete"],
    admin: ["create", "read", "update", "delete"],
    owner: ["create", "read", "update", "delete"],
});

export const superAdmin = ac.newRole({
    project: ["create", "read", "update", "delete"],
    admin: ["create", "read", "update", "delete"],
    owner: ["create", "read", "update", "delete"],
    superAdmin: ["create", "read", "update", "delete"],
});