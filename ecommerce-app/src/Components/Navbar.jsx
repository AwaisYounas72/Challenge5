import useCartStore from "../Store/CartStore"

 

const Navbar = () => {
    const {Cart}=useCartStore((state)=>({
        Cart:state.Cart
    }))
    return (
      <div> 
          
  
  <nav className="bg-white   dark:bg-gray-900  ">
    <div className="  flex flex-row   justify-between   py-4 px-2">
      <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/products/navbar/logo.png"className="h-8" alt="Logo" />
          <span className="  text-2xl font-semibold  dark:text-white">Ecommerce App</span>
      </a>
      
      <div className="    md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-row  md:p-0 mt-4  rounded-lg   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li className="hidden md:block">
            <button className="bg-black rounded-full text-white p-2">Contact us</button>
          </li>
          <li className="hidden md:block">
             <button className="bg-black rounded-full text-white flex flex-row py-2 px-4"> 
             <div className="flex flex-row justify-center items-center gap-1">
             <div>
             <img src="/products/navbar/cart.png" alt="" />
             </div>
             <div>
             <span className=" ">({Cart.length})</span>
             </div>
             </div>
             </button>
          </li>
          <li className="">
            <button> <img src="/products/navbar/drop.png" alt="" /></button>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  
      </div>
    )
  }
  
  export default Navbar
