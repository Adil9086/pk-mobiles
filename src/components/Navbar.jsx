import { Link } from "react-router-dom"





const Navbar = () => {
    return (
      <div>
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <Link  to="/"  >Pk Mobiles</Link>
       
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link  to="/" className="mr-5 hover:text-gray-900">Home</Link>
        <Link to="men" className="mr-5 hover:text-gray-900">iphone</Link>
        <Link to="women" className="mr-5 hover:text-gray-900">sumsung</Link>
        <Link to="kids" className="mr-5 hover:text-gray-900">oppo</Link>
      </nav>
   
  
    </div>
  </header>
  
      </div>
    )
  }
  
  export default Navbar
  