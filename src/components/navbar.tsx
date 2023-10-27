
import {useNavigate}from "react-router-dom" ;

function Navbar() {


const navigate=useNavigate();
  return (
    <>
    <div className=" flex w-full h-16 bg-white flex-row justify-between top-0 fixed" >
    <div>

     <img src="src\assets\logo_ks.png" alt=" Not found"  className=" h-11 w-52 m-3"/>

     </div>

    <div className="w-full  flex flex-col mt-3 items-end mr-6">
     <button
                 // disabled={!(username && password && role && fName && lName)}
                  className=" border-2 p-0 rounded-md w-20 h-10 bg-blue-500 text-white  disabled:bg-gray-300  focus:outline-none"
                  onClick={() => {
                    navigate("signup");
                  }}
                >
                  Sign Up
                </button>
                </div>
   </div>

    </>
  );
}



export default Navbar;
