export enum OrganizationType {
    FREE_ZONE = 'free_zone',
    COMPANY = 'company'
}

// Mapping
export const OrganizationTypeMap: Record<OrganizationType, string> = {
    [OrganizationType.FREE_ZONE]: OrganizationType.FREE_ZONE,
    [OrganizationType.COMPANY]: OrganizationType.COMPANY
}