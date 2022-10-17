import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import Loader from '../components/Loader';


function CoinPage() {
    const [searchParams] = useSearchParams();
    console.log(searchParams);

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(searchParams){
            const API_URL = `https://api.coingecko.com/api/v3/coins/${searchParams}`;
            setInterval( axios.get(API_URL.slice(0,-1)).then((response) => {
                if(response.data) {
                    console.log(response.data);
                    setData(response.data)
                    setLoading(false)
                } else {
                    console.log("Could not get data");
                }
            }),4000)
           
        }
    }, [searchParams]);



  return (
    <div>
        <Header />
        {loading ? <Loader />:<p>Got the data</p>}
    </div>
  )
}

export default CoinPage