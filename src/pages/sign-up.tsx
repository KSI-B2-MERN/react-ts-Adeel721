import axios from "axios";
import { useState } from "react";
import{useNavigate} from "react-router-dom";
import Select from "react-select";
import Navbar from "../components/navbar";

const roleOptions = [
  { value: "1", label: "student" },
  { value: "2", label: "teacher" },
];

function SignUp() {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
 const [role, setRole] = useState<string>("");

  
  const navigate=useNavigate();

  const onFNameChange = (fName: string) => {
    setFName(fName);
  };
  const onLNameChange = (lName: string) => {
    setLName(lName);
  };

  const onUsernameChange = (username: string) => {
    setUsername(username);
  };
  const onPasswordChange = (password: string) => {
    setPassword(password);
  };

  const onRoleChange = (role: string) => {
    setRole(role);
  };

  const signUp = async () => {
    const loginRes = await axios.post("http://localhost:3000/auth/signup", {
      fName: fName,
      lName: lName,
      username: username,
      password: password,
      role : role
      
    });
    if (loginRes.data) {
      alert("logged in successfuly");
    } else {
      alert("incorrect username/password");
    }
  };

  return (
    <>
    
   <div className=" flex w-screen h-screen bg-slate-200 flex-col justify-center items-center" >  

   
  <Navbar/> 
  

   <div className=" w-full h-screen bg-slate-100 flex flex-col items-center">

         <div className=" w-4/5 h-4/5 bg-slate-100">
   
            <div className=" flex flex-col items-center mt-20">
                <h1 className=" font-bold text-black font-serif">Sign Up</h1>
                <p className=" text-14px mt-4 text-black font-serif"> Provide your valid Sign Up credentials</p>
            </div>


            <div className="flex flex-row w-full h-4/5 bg-slate-100 mt-8 ">
                <div className="  bg-slate-100 w-1/2 h-full m-3"> 
                
                <img  className =" w-4/5 h-full items-center"    src="src\assets\sign_up.png" alt=" not found" />
                 </div>
                <div className=" bg-white w-1/2 h-full m-3 flex flex-row justify-center rounded-lg">
                    <div className="h-full w-4/5 flex flex-col justify-center">
              <div className="w-full flex flex-col ">
              <label className="text-gray-500">First Name</label>
                <input
                  className="  border-2  mb-2  border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
                  required
                  placeholder="First Name"
                  type="text"
                  onChange={(e) => {
                    void onFNameChange(e.target.value);
                  }}
                />
                 <label className="text-gray-500">Last Name</label>
                <input
                  className="  border-2  mb-2  border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
                  required
                  placeholder="Last Name"
                  type="text"
                  onChange={(e) => {
                    void onLNameChange(e.target.value);
                  }}
                />
                <label className="text-gray-500">Username</label>
                <input
                  className="  border-2  mb-2  border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
                  required
                  placeholder="your username"
                  type="text"
                  onChange={(e) => {
                    void onUsernameChange(e.target.value);
                  }}
                />
                <label className="text-gray-500 ">Password</label>
                <input
                  className=" border-2  mb-2 border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
                  required
                  type="password"
                  onChange={(e) => {
                    void onPasswordChange(e.target.value);
                  }}
                />
                 <label className="text-gray-500 ">Role</label>
                <Select
                  className="rounded-md w-64 text-gray-500  focus:outline-none"
                  isSearchable={true}
                  options={roleOptions}
                  onChange={(e) => {
                    void onRoleChange(e?.value || "");
                  }}
                  placeholder="Select Role"
                />
                <p className="text-gray-500 ">
                  Not register yet?{" "}
                  
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => {
                     navigate("/")
                     
                    }}
                   
                  >
                    
                    {" "}
                    Login
                  </span>
                </p>
              

              {/* <div className="w-full  flex flex-col mt-6 items-center "> */}
                <button
                  disabled={!(username && password && role && fName && lName)}
                  className=" border-2 py-2 px-8 rounded-md  bg-blue-500 text-white disabled:bg-gray-300  focus:outline-none"
                  onClick={() => {
                    void signUp();

                    navigate("/landing");     
                    
                  }}
                >
                  Sign Up
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

export default SignUp;
