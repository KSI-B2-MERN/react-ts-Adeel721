import {useNavigate}from "react-router-dom" ;
//import Navbar from "../components/navbar";


function LogIn(){

  const navigate = useNavigate();
return (

    <>

   <div className=" flex w-screen h-screen flex-col justify-center items-center" >  
   
   {/* <Navbar/>  */}
   <div className=" w-full h-full bg-slate-100 flex flex-col items-center">

         <div className=" w-full h-fulls bg-slate-100">
   
            <div className=" flex flex-col items-center ">
                <h1 className=" font-bold text-black font-serif">Login</h1>
                <p className=" text-14px mt-4 text-black font-serif"> Provide your valid login credentials</p>
            </div>


            <div className="flex flex-row w-full h-2/3 mt-8 ">
                <div className="  bg-slate-100 w-1/2 h-full "> 
                
                <img  className =" w-4/5 h-full items-center"    src="src\assets\sign_up.png" alt=" not found" />
                 </div>
                <div className=" bg-white w-1/2 h-full  flex flex-row justify-center rounded-lg">
                    <div className="h-full w-1/2 flex flex-col justify-center">
              <div className="w-full flex flex-col ">
                <label className="text-gray-500">Username</label>
                <input
                  className="  border-2  mb-2  border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
                  required
                  placeholder="your username"
                  type="text"
                //   onChange={(e) => {
                //     void onUsernameChange(e.target.value);
                //   }}
                />
                <label className="text-gray-500 ">Password</label>
                <input
                  className=" border-2  mb-2 border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
                  required
                  type="password"
                //   onChange={(e) => {
                //     void onPasswordChange(e.target.value);
                //   }}
                />
                <p className="text-gray-500 ">
                  Not register yet?{" "}
                  
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => {
                      navigate("signup");
                    }}
                   
                  >
                    
                    {" "}
                    SignUp
                  </span>
                </p>
              </div>
              <div className="w-full  flex flex-col mt-6 items-center ">
                <button
                 // disabled={!(username && password && role && fName && lName)}
                  className=" border-2 py-2 px-8 rounded-md w-32 bg-blue-500 text-white disabled:bg-gray-300  focus:outline-none"
                //   onClick={() => {
                //     void signUp();
                //   }}
                >
                  Login
                </button>
              </div>
            </div>
                </div>

            </div>

         </div>

    </div>

   
   
   
   
    </div>




    </>
);

}

export default LogIn;


