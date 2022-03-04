import {IonIcon, IonButton, IonCard, IonCardContent} from '@ionic/react';
import {useState} from 'react';
import { walk } from 'ionicons/icons';


export default function FortuneCookie() {

  const [fortune, setFortune] = useState('');

  async function handleClick() {
    setFortune('');
    try {
      const response = await fetch('https://ajnabee.azurewebsites.net/fortune');
      const data  = await response.json();
      setFortune(data[0].text);
    } catch(e) {
      setFortune('You will visit a new place and have fun!')
      console.log("Caught error: " + e)
    }
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