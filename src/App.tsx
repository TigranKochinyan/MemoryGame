import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import ImageBox from "./components/ImageBox";

const pictures = [
  "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1149056/pexels-photo-1149056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

const imagesArrayCreator = (iamagesPaths: string[]) => {
  let arr: any = Array.from(Array(16));
  console.log(arr);
  iamagesPaths.forEach((photo: any, index: number) => {
    const photoObj = {
      id: photo,
      key: index,
      url: photo,
    };
    let firstPosition = Math.round(Math.random() * 15);
    while (arr[firstPosition]) {
      firstPosition = Math.round(Math.random() * 15);
    }
    arr[firstPosition] = photoObj;
    let secondPosition = Math.round(Math.random() * 15);
    while (arr[secondPosition]) {
      secondPosition = Math.round(Math.random() * 15);
    }
    arr[secondPosition] = photoObj;
  });
  return arr;
};
const imagesArray = imagesArrayCreator(pictures);

function App() {
  const [flipedImages, setFlipedImages] = useState<number[]>([]);
  const [firstFlipingKey, setFirstFlipingKey] = useState<number | null>(null);
  // const [secondFlipingKey, setSecondFlipingKey] = useState<number | null>(null);

  

  const handleFlip = (key: number) => {
    console.log(key);
    
    if (!firstFlipingKey) {
      setFirstFlipingKey(key);
    } else if (key === firstFlipingKey) {
      setFlipedImages([...flipedImages, key]);
    } else {
      setFirstFlipingKey(null);
    }
  };

  return (
    <div className="App">
      Memory Game
      <Container>
        {imagesArray.map((photo: any, index: number) => {
          return (
            <ImageBox
              handleFlip={handleFlip}
              key={photo.id + index}
              imageKey={photo.key}
              imageUrl={photo.url}
              fliped={flipedImages.includes(photo.key) || photo.key === firstFlipingKey}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default App;
