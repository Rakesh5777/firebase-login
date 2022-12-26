export interface UserProfile {
    uid: string;
    email?: string | null;
    displayName?: string | null;
    photoURL?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    phone?: string | null;
    address?: string | null;
}