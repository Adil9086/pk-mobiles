import { Link } from "react-router-dom"
import { data } from "../Data/Men"



const Men = () => {
  return (
   <section className="text-gray-600 body-font md:mb-2">
   <img src="./image/1.jpg" className="text-gray-600 body-font md:mb-2" />
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
   {data.map((x)=>{
    return(
     
      <div className="p-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 mt-4" key={x._id}>
  <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group mx-auto my-10 lg:h-48" style={{ height: "550px", width: "18rem" }}>
    <Link to={`/men/${x._id}`}>
      <img className="transition transform group-hover:scale-110 duration-200" src={x.image} alt="blog" />
    </Link>
    <div className="p-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{x.category}</h2>
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{x.title}</h1>
      
      <div className="flex items-center flex-wrap">
        <a className="text-indigo-500 inline-flex items-center mb-2 lg:mb-0">Learn More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
       
      </div>
    </div>
  </div>
</div>

    )
   })}
    </div>
  </div>
</section>

  )
}

export default Men;


