import useSWR from "swr";

const fetcher =  url => fetch(url).then(r => r.json())

const Events = () => {
  
  const { data, error } = useSWR('http://localhost:3001/api/location-events', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (<>
    {data.events.map(e => (<div>{e.name}</div>))}
  </>)
};

export default Events;