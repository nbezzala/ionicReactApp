import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { useParams } from 'react-router-dom';

const ArticleList: React.FC = () => {

 const { categoryId } = useParams<{ categoryId: string}>();

  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Article List</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        categoryId
      </IonContent>
    </IonPage>
  );
};

export default ArticleList;
