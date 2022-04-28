const { default: axios } = require("axios");
const { useState, useEffect } = require("react")



const useFetchData = url => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const getData = async () => { 
            const response = await axios.get(url)
            const data = response.data;
            setData(data);
        }
        getData();
    },[url])
    
    return [data];
}

export default useFetchData;