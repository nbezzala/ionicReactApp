import {IonIcon, IonButton, IonCard, IonCardContent} from '@ionic/react';
import {useState} from 'react';
import { walk } from 'ionicons/icons';


export default function FortuneCookie() {

  const [fortune, setFortune] = useState('');

  function handleClick() {
    setFortune("Nice one");
  }


  let content = '';

  if(fortune) {
    content =      
      <IonCard>
      <IonIcon icon={walk} slot="start" />
        <IonCardContent>
          {fortune}
        </IonCardContent>
      </IonCard>
  }

  return (
    <div class="ion-text-center">
      <br />
      <IonButton onClick={handleClick}>
        Open Fortune Cookie
      </IonButton>
    {content}

    </div>
  );
}