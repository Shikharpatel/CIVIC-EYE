/**
 * Admin & Role Configuration
 */

export const CONFIGURED_ADMIN_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '')
  .split(',')
  .map((email) => email.trim())
  .filter(Boolean);

/**
 * Checks if a given email has administrative clearance.
 */
export function isAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  const normalized = email.trim().toLowerCase();

  return CONFIGURED_ADMIN_EMAILS.some((adminEmail) => adminEmail.toLowerCase() === normalized);
}
