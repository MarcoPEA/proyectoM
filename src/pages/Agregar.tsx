import React, { useState, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonMenu, IonRouterOutlet, IonButton, IonGrid, IonRow, IonButtons, IonRadio, IonRadioGroup, IonListHeader, IonCheckbox, IonToast } from '@ionic/react';
import ContactosContext from '../data/Contacto-Context';
import { Toast } from '@capacitor/toast';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Keyboard } from '@capacitor/keyboard';
import { Share } from '@capacitor/share';
import { ScreenReader } from '@capacitor/screen-reader';

export const Agregar: React.FC = () => {
    const history = useHistory();
    const ContactosCtxt = useContext(ContactosContext);
    const nombreInput = useRef<HTMLIonInputElement>(null);
    const direcionInput = useRef<HTMLIonInputElement>(null);
    const sexoInput = useRef<HTMLIonSegmentElement>(null);
    const [checked, setChecked] = useState(false);
    const [toastMsg, setToastMsg] = useState<string>('');
    const showHelloToast = async () => {
        await Toast.show({
            text: 'Debes llenar todos los campos',
        });
    };
    const hapticsVibrate = async () => {
        await Haptics.vibrate();
    };
    const addContacto = () => {
        const nombre = nombreInput.current?.value as string;
        const direccion = direcionInput.current?.value as string;
        const sexo = sexoInput.current?.value as string;
        const estudiane = checked;
        if (nombre && direccion && sexo) {
            ContactosCtxt.addContacto(nombre, direccion, sexo, true);
            setToastMsg('La actividad ha sido guardada');
            history.replace('/Index');
        }
        else {
            showHelloToast();
        }
        hapticsVibrate();
    }
    const abrir=()=>{
        Keyboard.addListener('keyboardWillShow', info => {
            console.log('keyboard will show with height:', info.keyboardHeight);
          });
    };
    const Sharee = async () => {
        await Share.share({
            title: 'Ve cosas interesantes',
            text: 'Cosas realmente interesantes aqui',
            url: 'http://ionicframework.com/',
            dialogTitle: 'Compartir con buddies',
        });
    };
    const sayHello = async () => {
        await ScreenReader.speak({ value: 'Hello World!' });
      };
    const captura=()=>{
        sayHello();
    };

    // [Nombre, setNombre] = useState<string>();
    //const [Direc, setDirec] = useState<string>();
    const [selected, setSelected] = useState<number>();

    return (
        <React.Fragment>
            <IonToast isOpen={!!toastMsg} message={toastMsg} duration={4000} color="medium" onDidDismiss={() => setToastMsg('')} />
            <IonPage>
                <IonHeader>
                    <IonToolbar>

                        <IonTitle>Agregar Contactos</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItemDivider>Contactos</IonItemDivider>
                        <IonItem>
                            <IonLabel position="floating">Nombre: </IonLabel>
                            <IonInput ref={nombreInput}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Direccion: </IonLabel>
                            <IonInput ref={direcionInput}></IonInput>
                        </IonItem>
                        <IonRadioGroup value={sexoInput} >
                            <IonListHeader>
                                <IonLabel>Sexo</IonLabel>
                                <IonItem>
                                    <IonLabel>Hombre</IonLabel>
                                    <IonRadio slot="start" value="Hombre" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Mujer</IonLabel>
                                    <IonRadio slot="start" value="Mujer" />
                                </IonItem>
                            </IonListHeader>
                        </IonRadioGroup>
                        <IonItem>
                            <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
                            <IonCheckbox checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
                            <IonItemDivider>Estudiante</IonItemDivider>
                        </IonItem>
                        <IonGrid>
                            <IonRow>
                                <IonButton color="success" onClick={addContacto}>Agregar</IonButton>
                                <IonButton color="danger" onClick={abrir}>teclado</IonButton>
                                <IonButton color="warning" onClick={Sharee}>Ver</IonButton>
                                <IonButton color="light" onClick={captura}>Screen</IonButton>
                            </IonRow>
                        </IonGrid>
                    </IonList>
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};
export default Agregar;