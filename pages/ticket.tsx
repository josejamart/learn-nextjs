import Events from "../components/events"

const Ticket = ({data}) =>{
    return (<>
        <div>{JSON.stringify(data)}</div>
        <Events></Events>
    </>);
};

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3001/api/events`)
    const data = await res.json()

    if (!data) {
        return {
        notFound: true,
        }
    }

    return {
      props: {data}, // will be passed to the page component as props
        // Re-generate the post at most once per second
        // if a request comes in
        revalidate: 20,
    }
  }

export default Ticket;