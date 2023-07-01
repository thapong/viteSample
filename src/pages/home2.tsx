import axios from 'axios';
import { useEffect, useState } from 'react';

    
  export default function Home2() {
    const [post, setPost] = useState([]);
    useEffect(() => {
      axios.get("http://cobalt.npsystems.net/items/eqtype").then((data) => {
        console.log(data);
        setPost(data?.data);
      });
    }, []);
    

    return (
     <div> HEOOLLL</div> 

    );
  }