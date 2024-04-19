import React, { useState, useEffect } from "react";
import { createClient } from 'pexels';

function App() {
  const [images, setImages] = useState([]);
  const client = createClient(process.env.REACT_APP_KEY);
  const [term,setTerm] = useState('')
  const [page,setPage] = useState(1)
  const [query,setQuery] = useState("cosmos");
  var pages = useState(12);
  useEffect(() => {
    if (!query) return;
    client.photos.search({ query, per_page: pages, page:page })
      .then(photos => {
        if (photos.photos) {
          setImages(photos.photos);  
          
        }
      });
      
  }, [query,term]);  
 
  const imageElements = [];
  images.forEach((image, index) => {
    const element = (
      <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg hover:drop-shadow-2xl">
        <img src={image.src.portrait} alt="" className="w-full"/>
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
          {image.alt}
          </div>
          <ul>
            <li>
              <strong>Photo by </strong>
              <a href={image.photographer_url} target="_blank" className="text-purple-500 hover:bg-primary hover:text-orange-600">{image.photographer} 
              
              </a> 
            </li>
          </ul>
        </div>
      </div>
    );
    imageElements.push(element);
  });

  
  
  return (
    
    <div className="container mx-auto">
      
      <div className=' max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={()=>setTerm(query)} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-purple-500 py-2">
        <input onChange={e => setQuery(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
        <button className="flex-shrink-0 bg-purple-500 hover:bg-purple-800 border-purple-500 hover:text-white hover:border-purple-800 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
      Search
      </button>
      </div>
      </form>
		</div>
    
    <div className="flex justify-center container mb-12">
      
      <div className="flex justify-center grid gap-4 grid-cols-3">
        {imageElements} 
        {console.log(images)} 
      </div>
    </div>
        
    </div>
  );
}

export default App;