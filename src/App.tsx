import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Index, { Lista } from './pages/Index';
import ActivitiesContextProvider from './data/ContactoContextProvider';
import { bodyOutline, newspaperOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React from 'react';
import Agregar from './pages/Agregar';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId='scheduleAppM1'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Schedule App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink="/Index" routerDirection="none" lines="none">
                <IonIcon color="medium" slot="start" icon={bodyOutline} />
                <IonLabel>Todas las actividades</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/Agregar" routerDirection="none" lines="none">
                <IonIcon color="medium" slot="start" icon={newspaperOutline} />
                <IonLabel>Agregar actividad</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <ActivitiesContextProvider>
        <IonRouterOutlet id="scheduleAppM1">
          <Route path='/Index' component={Lista} exact/>
          <Route path='/Agregar' component={Agregar} exact/>
          <Redirect to='/Index' />
        </IonRouterOutlet>
      </ActivitiesContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
