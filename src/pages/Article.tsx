import { IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

const Article: React.FC = () => {
  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Article List</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Article;
