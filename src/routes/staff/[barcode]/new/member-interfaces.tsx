export interface Person {
    title: string;
    name: string;
    surname: string;
}

export interface Contact {
    type: string;
    value: string;
    preferred: boolean;
}

export interface Member {
    person: Person | null;
    contact: Contact | null;
}