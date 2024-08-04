import { useParams } from "react-router-dom"

import { data } from "../Data/Men";


const Detailpage = () => {
  const {_id} = useParams();
  const get = data.find((x) => x._id == _id)



  return (
    <div>
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto flex flex-col-reverse md:flex-row items-center">
      <div className="lg:w-1/2 lg:pr-10 mb-10 md:mb-0 order-2 md:order-1">
        <img alt="ecommerce" className="object-cover object-center rounded w-full h-auto" src={get.image} style={{ maxWidth: '400px', margin: 'auto' }} />
      </div>
      <div className="lg:w-1/2 lg:pl-10 lg:py-6 order-1 md:order-2">
        <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{get.brand}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{get.title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            {/* Review icons SVGs */}
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
            {/* Action icons SVGs */}
          </span>
        </div>
        <p className="leading-relaxed">{get.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          {/* Additional content */}
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">Rs:{get.price}</span>
          <button className="flex ml-auto text-white bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-200 hover:text-black rounded-full ">Add to cart</button>
          
        </div>
      </div>
    </div>
  </section>
  
  
  
  

  
  

    </div>
  )
}

export default Detailpage
