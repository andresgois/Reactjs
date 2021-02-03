import React from 'react'


const set = new Set();

const UseFetch = () => {

  const [data, setData ] = React.useState(null);
  const [error, setError ] = React.useState(null);
  const [loading, setLoading ] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try{
      setError(null)
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      
    }catch(err){
      json = null;
      setError('Error:     '+err)
    }finally{
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  set.add(request);
  console.log(set)

  return {data, error, loading, request };
}

export default UseFetch
