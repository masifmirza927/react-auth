import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const q = searchParams.get("q");

console.log(q);

useEffect( () => {
  axios.get("http://localhost:3003/search?title="+q).then( (res) => {
      if(res.data.status == true) {
        setProducts(res.data.products);
      }
  })
}, [searchParams]);

  return (
    <div>
      {
        products.map( (product) => {
          return (<>
              <h1>{product.title}</h1>
          </>)
        })
      }
    </div>
  )
}

export default Search
