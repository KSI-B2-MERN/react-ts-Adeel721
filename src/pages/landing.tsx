import axios from "axios";
import { useEffect } from "react";



function Landing()
{
    const getuser = async () => {
        const loginRes = await axios.post("http://localhost:3000/user/userdata")
        if (loginRes.data) {
          alert("logged in successfuly");
        } else {
          alert("incorrect username/password");
        }
      };

        useEffect(()=>{
  

            getuser;
       },[])
return(
<>

 {getuser};

<h1 className=" flex justify-center text-black"> Landing Page </h1>


</>


);


}

export default Landing;