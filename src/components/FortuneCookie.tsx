import {IonButton, IonCard, IonCardContent} from '@ionic/react';
import {useState} from 'react';


export default function FortuneCookie() {

  const [fortune, setFortune] = useState('');

  function handleClick() {
    setFortune("Nice one");
  }


  let content = '';

  if(fortune) {
    content =      
      <IonCard>
        <IonCardContent>
          {fortune}
        </IonCardContent>
      </IonCard>
  }

  return (
    <>
    <IonButton onClick={handleClick}>
      Hello
    </IonButton>
    {content}

    </>
  );
}