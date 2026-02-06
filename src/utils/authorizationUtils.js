// Role-Based Access Control (RBAC) definitions and utilities

export const ROLES = {
  ADMIN: 'admin',
  MODERATOR: 'moderator',
  USER: 'user',
  GUEST: 'guest'
};

export const PERMISSIONS = {
  // User permissions
  VIEW_PROFILE: 'view_profile',
  EDIT_PROFILE: 'edit_profile',
  DELETE_PROFILE: 'delete_profile',
  
  // Country permissions
  VIEW_COUNTRIES: 'view_countries',
  EDIT_COUNTRIES: 'edit_countries',
  DELETE_COUNTRIES: 'delete_countries',
  
  // Admin permissions
  MANAGE_USERS: 'manage_users',
  VIEW_ANALYTICS: 'view_analytics',
  MANAGE_CONTENT: 'manage_content'
};

// Define role-to-permissions mapping
export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    PERMISSIONS.VIEW_PROFILE,
    PERMISSIONS.EDIT_PROFILE,
    PERMISSIONS.DELETE_PROFILE,
    PERMISSIONS.VIEW_COUNTRIES,
    PERMISSIONS.EDIT_COUNTRIES,
    PERMISSIONS.DELETE_COUNTRIES,
    PERMISSIONS.MANAGE_USERS,
    PERMISSIONS.VIEW_ANALYTICS,
    PERMISSIONS.MANAGE_CONTENT
  ],
  
  [ROLES.MODERATOR]: [
    PERMISSIONS.VIEW_PROFILE,
    PERMISSIONS.EDIT_PROFILE,
    PERMISSIONS.VIEW_COUNTRIES,
    PERMISSIONS.EDIT_COUNTRIES,
    PERMISSIONS.MANAGE_CONTENT
  ],
  
  [ROLES.USER]: [
    PERMISSIONS.VIEW_PROFILE,
    PERMISSIONS.EDIT_PROFILE,
    PERMISSIONS.VIEW_COUNTRIES
  ],
  
  [ROLES.GUEST]: [
    PERMISSIONS.VIEW_COUNTRIES
  ]
};

/**
 * Check if a user has a specific permission
 * @param {string} userRole - The user's role
 * @param {string} permission - The permission to check
 * @returns {boolean} - True if user has permission
 */
export const hasPermission = (userRole, permission) => {
  const rolePermissions = ROLE_PERMISSIONS[userRole] || [];
  return rolePermissions.includes(permission);
};

/**
 * Check if a user has any of the specified permissions
 * @param {string} userRole - The user's role
 * @param {string[]} permissions - Array of permissions to check
 * @returns {boolean} - True if user has any of the permissions
 */
export const hasAnyPermission = (userRole, permissions) => {
  return permissions.some(permission => hasPermission(userRole, permission));
};

/**
 * Check if a user has all of the specified permissions
 * @param {string} userRole - The user's role
 * @param {string[]} permissions - Array of permissions to check
 * @returns {boolean} - True if user has all the permissions
 */
export const hasAllPermissions = (userRole, permissions) => {
  return permissions.every(permission => hasPermission(userRole, permission));
};

/**
 * Get all permissions for a specific role
 * @param {string} role - The role
 * @returns {string[]} - Array of permissions for the role
 */
export const getPermissionsForRole = (role) => {
  return ROLE_PERMISSIONS[role] || [];
};
