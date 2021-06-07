import React, { useContext } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonImg, IonText, IonButton } from '@ionic/react';
import ActivitiesContext, { Contacto } from '../data/Contacto-Context';

interface CompleteModalContactoProps {
    contactos: Contacto;
    dismissModal: () => void;
}

const CompleteConatctoModel: React.FC<CompleteModalContactoProps> = (props) => {

    const activitiesCtxt = useContext(ActivitiesContext);

    const confirmCompletion = (contactoId: string) => {
        props.dismissModal();
    };

    return (
        <IonContent>
            <IonGrid className='ion-no-padding'>
                <IonRow>
                    <IonCol className='ion-no-padding'>
                        
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonText>
                            
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center ion-no-padding'>
                        <IonText color='medium'>
                            <p>
                                Esta seguro que desea completar esta actividad?
                            </p>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonButton color='danger' fill='clear' onClick={props.dismissModal}>
                            Cancelar
                        </IonButton>
                    </IonCol>
                    <IonCol className='ion-text-center'>
                        <IonButton color='primary' fill='clear' onClick={() => confirmCompletion(props.contactos.id)}>
                            Completar
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CompleteConatctoModel;
