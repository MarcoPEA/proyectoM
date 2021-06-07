import React from 'react';

export interface Contacto {
    id: string;
    nombre: string;
    direccion: string;
    sexo: string;
    isCompleted: boolean;
};
export interface ContactoContextModel {
    contactos: Contacto[];
    addContacto: (nombre: string, direccion: string, sexo:string,isCompleted: boolean) => void;
}
const ContactosContext = React.createContext<ContactoContextModel>({
    contactos: [],
    addContacto: () => {}
});

export default ContactosContext;