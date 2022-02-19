import { IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { useParams } from 'react-router';

const ArticleList: React.FC = () => {

  const { categoryId } = useParams();


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

export default ArticleList;
