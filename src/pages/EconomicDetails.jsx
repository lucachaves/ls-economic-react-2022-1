import axios from '../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

function EconomicDetails() {

  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const newData = (await axios.get(`/economics/${id}`)).data;

      setData(newData);
    }

    loadData();
  }, []);

  return (
    <>
      <h1 className="text-center my-5">{data.title}</h1>

      <div style={{height: 400}}>        
        <AdvancedRealTimeChart 
          theme="dark" 
          autosize
          symbol={data.symbol}
        />
      </div>
    </>
  )
}

export default EconomicDetails;