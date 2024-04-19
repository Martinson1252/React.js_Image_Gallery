import React,{useState,useEffect} from "react";
import SetImages from "./SetImages.js";
import { createClient } from 'pexels';
function App() {
  var [images] = useState([]);
  const client = createClient(process.env.REACT_APP_KEY);
  const query = "cosmos";
  
  
  useEffect(() => {
    client.photos.search({ query, per_page: 6 })
      .then(photos => {
        if (photos.photos) {
          SetImages(photos.photos); 
          let i =0; 
          while(i<photos.photos.length){
                images[i] = photos.photos[i]
                i++ 
              }
        }
      });
  }, []);  
  
// //setInterval
// setTimeout(function () {
//   client.photos.search({query, per_page:6})
// .then(photos => {
//   let i = 0
//   while(i<photos.photos.length){
//     images[i] = photos.photos[i]
//     i++ 
//   }
// })
  
  
// },500);
// let prom1 = new Promise((resolve, reject)=>{

//     setTimeout(function () {

      

// },2000);
// })


const imageElements = [];
images.forEach((image, index) => {
  const element = (
    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.photographer}
        </div>
        <ul>
          <li>
            <strong>Title: </strong>
            {image.alt}
          </li>
        </ul>
      </div>
    </div>
  );
  imageElements.push(element);  
});

return (
  <div className="container mx-auto">
    <div className="grid grid-cols-3 gap-4">
      {imageElements}  
    </div>
  </div>
);

  



}

export default App;
