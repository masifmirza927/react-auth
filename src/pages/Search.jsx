import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const q = searchParams.get("q");
  const price = searchParams.get("price");
  const [isLoding, setIsLoading] = useState(false);

  console.log(q);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:3003/search?q=${q}&price=${price}`).then((res) => {
      if (res.data.status == true) {
        setProducts(res.data.products);
        setIsLoading(false);
      }
    }).catch(err => { setIsLoading(false); console.log(err.message) })
  }, [searchParams]);

  return (
    (isLoding) ? <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div> : (products.length > 0) ? <div>
      {products.map((product) => {
        return (<>
          <div style={{ backgroundColor: "#efefef", padding: "20px", margin: "10px" }}>
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
          </div>
        </>)
      })
      }
    </div> : <div class="alert alert-danger" role="alert">0 mobile found</div>
  )
}

export default Search
