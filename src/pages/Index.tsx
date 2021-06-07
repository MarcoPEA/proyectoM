import React, { useState, useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonSearchbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonButton, IonCardSubtitle, IonCardTitle, IonButtons, IonMenuButton, IonCheckbox } from '@ionic/react';
import ContactoContext, { Contacto } from '../../src/data/Contacto-Context';
import ContactoProvider from '../data/ContactoContextProvider';
import ContactosContext from '../../src/data/Contacto-Context';
//import ContactosContext from '../../data/Contacto-Context';
export const Lista: React.FC = () => {

    const [Nombre, setText] = useState<string>();
    const [number, setNumber] = useState<number>();
    const ContactoCtxt = useContext(ContactoContext);

    return (
        <React.Fragment>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Lista de contactos</IonTitle>
                      
                    </IonToolbar>
                </IonHeader>
                
                <IonGrid>
                      <IonRow>
                          <IonCol>Nombre</IonCol>
                          <IonCol>direccion</IonCol>
                          <IonCol>sexo</IonCol>
                          <IonCol>Estudiante</IonCol>
                      </IonRow>
                    {ContactoCtxt.contactos.map(contacto => (
                        <IonRow key={contacto.id}>    
                                <IonCol className="ion-text-center">
                                    <IonLabel>{contacto.nombre}</IonLabel>
                                </IonCol>
                                <IonCol className="ion-text-center">
                                    <IonLabel>{contacto.direccion}</IonLabel>
                                </IonCol>
                                <IonCol className="ion-text-center">
                                    <IonLabel>{contacto.sexo}</IonLabel>
                                </IonCol>
                                <IonCol className="ion-text-center">
                                    <IonCheckbox checked={contacto.isCompleted}/>
                                </IonCol>
                        </IonRow>
                    ))}
                      
                </IonGrid>
            </IonPage>
        </React.Fragment>
    );
};
export default Lista;