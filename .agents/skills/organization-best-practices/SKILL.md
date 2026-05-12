---
name: organization-best-practices
description: Multi-tenant orgs, members, invites, roles, teams, RBAC via Better Auth org plugin.
---

## Setup

1. Add `organization()` to server config.
2. Add `organizationClient()` to client config.
3. `npx @better-auth/cli migrate`
4. Verify tables (organization, member, invitation).

```ts
import { betterAuth } from "better-auth";
import { organization } from "better-auth/plugins";

export const auth = betterAuth({
  plugins: [
    organization({
      allowUserToCreateOrganization: true,
      organizationLimit: 5,
      membershipLimit: 100,
    }),
  ],
});
```

Client setup:
```ts
import { createAuthClient } from "better-auth/client";
import { organizationClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [organizationClient()],
});
```

## Orgs

Creator = `owner`.

```ts
const { data, error } = await authClient.organization.create({
  name: "My Org", slug: "my-org"
});
```

Restrict create via `allowUserToCreateOrganization`, `organizationLimit` callbacks.
Server-side create for other user: `auth.api.createOrganization({ body: { userId: "..." } })`. No session headers allowed.

## Active Org

Stored in session. Scopes API calls.
Set: `authClient.organization.setActive({ organizationId })`.
Get full org: `getFullOrganization()`.

## Members

Server-side add: `auth.api.addMember({ body: { userId, role, organizationId } })`.
Client-side: use invites.
Multi-role: `role: ["admin", "moderator"]`.
Remove: `removeMember({ memberIdOrEmail })`. (Cannot remove last owner).
Update role: `updateMemberRole({ memberId, role })`.

## Invites

Setup email: `sendInvitationEmail` in plugin config.
Send: `authClient.organization.inviteMember({ email, role })`.
URL only: `getInvitationURL` (does not send email).
Config: `invitationExpiresIn` (default 48h), `invitationLimit`, `cancelPendingInvitationsOnReInvite`.

## Roles & Permissions

Default: `owner`, `admin`, `member`.
Check: `authClient.organization.hasPermission({ permission: "member:write" })`.
UI render: `checkRolePermission()`.

## Teams

Enable: `teams: { enabled: true }`.
Create: `authClient.organization.createTeam({ name })`.
Manage: `addTeamMember`, `removeTeamMember`.
Active: `setActiveTeam`.

## Custom Roles (Dynamic Access Control)

Enable: `dynamicAccessControl: { enabled: true }`.
Create: `authClient.organization.createRole({ role, permission })`.
Update: `updateRole`. Delete: `deleteRole` (default/assigned roles no delete).

## Hooks

`beforeCreate`, `afterCreate`, `beforeDelete` for orgs, members, invites.
E.g., cleanup before org delete, notify on new member.

## Schema Customization

`modelName` to rename tables. `fields` to rename cols. `additionalFields` for custom schema.

## Security

Owner protect: Last owner cannot leave/be removed/demoted. Transfer ownership first.
Delete protect: `disableOrganizationDeletion: true`. Or hook to soft delete.
Invites: 48h expire, restricted to email, cancellable.
