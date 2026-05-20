export enum AuthRole {
    MEMBER = 'member',
    ADMIN = 'admin',
    OWNER = 'owner',
    SUPER_ADMIN = 'superAdmin',
}

export enum ChatRole {
    DRIVER = 'driver',
    PASSENGER = 'passenger',
}

// Mapping
export const AuthRoleMap: Record<AuthRole, string> = {
    [AuthRole.MEMBER]: AuthRole.MEMBER,
    [AuthRole.ADMIN]: AuthRole.ADMIN,
    [AuthRole.OWNER]: AuthRole.OWNER,
    [AuthRole.SUPER_ADMIN]: AuthRole.SUPER_ADMIN
}

export const ChatRoleMap: Record<ChatRole, string> = {
    [ChatRole.DRIVER]: ChatRole.DRIVER,
    [ChatRole.PASSENGER]: ChatRole.PASSENGER
}