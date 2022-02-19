import {
  IonCardContent,
  IonImg,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

//import ExploreContainer from '../components/ExploreContainer';
import "./Tab1.css";

interface Category {
  id: number,
  name: String;
  imageUrl: String;
  tagline: String;
}

function CategoryTitle({ category}) {
  return (
    <IonCol size="6">
      <IonCard routerLink={ `/category/${category.id }` } >
        <IonImg src={category.imageUrl} alt="category" />
        <IonCardContent>
          <h1>{category.name}</h1>
          <p>{category.tagline}</p>
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
}

const Tab1: React.FC = () => {
  const publicCategories: Category[] = [
    {
      id: 1,
      name: "Home Decor",
      imageUrl:
        "https://www.google.co.nz/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      tagline: "A place of beauty",
    },
    {
      id: 2,
      name: "Fashion",
      imageUrl:
        "https://www.google.co.nz/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      tagline: "Dress like a dream",
    },
    {
      id: 3,
      name: "Sports",
      imageUrl:
        "https://www.google.co.nz/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      tagline: "Winning is everything",
    },
    {
      id: 4,
      name: "Movies",
      imageUrl:
        "https://www.google.co.nz/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      tagline: "Filmy entertainment",
    },
    {
      id: 5,
      name: "Fashion",
      imageUrl:
        "https://www.google.co.nz/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      tagline: "Dress like a dream",
    },
    {
      id: 6,
      name: "Home Decor",
      imageUrl:
        "https://www.google.co.nz/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      tagline: "A place of beauty",
    },
    {
      id: 7,
      name: "Sports",
      imageUrl:
        "https://www.google.co.nz/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      tagline: "Winning is everything",
    },
    {
      id: 8,
      name: "Movies",
      imageUrl:
        "https://www.google.co.nz/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      tagline: "Filmy entertainment",
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Public Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            {publicCategories.map((category, index) => {
              return <CategoryTitle category={category} key={category.id} />;
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
