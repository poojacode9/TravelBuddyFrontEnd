import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./AddTourPackage.css";


function EditTourPackage(){

    const { id } = useParams();

    const navigate = useNavigate();


    const [packageData,setPackageData] = useState({

        packageName:"",
        destination:"",
        description:"",
        duration:"",
        price:"",
        hotelName:"",
        transportType:"",
        activities:"",
        availableSeats:"",
        imageUrl:""

    });



    useEffect(()=>{

        fetchPackage();

    },[]);



    const fetchPackage = async()=>{

        try{

            const token = localStorage.getItem("token");

            const response = await axios.get(
            `http://localhost:8080/packages/${id}`,
            {
            headers: {
            Authorization: `Bearer ${token}`
        }
        }
);


            setPackageData(response.data);


        }
        catch(error){

            console.log(error);

        }

    };



    const handleChange=(e)=>{

        setPackageData({

            ...packageData,

            [e.target.name]:e.target.value

        });

    };



    const handleSubmit=async(e)=>{

        e.preventDefault();


        try{


            const token = localStorage.getItem("token");


            await axios.put(

                `http://localhost:8080/packages/${id}`,

                packageData,

                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }

            );


            alert("Package Updated Successfully");


            navigate("/guide/my-packages");


        }
        catch(error){

            console.log(error);

            alert("Update failed");

        }

    };



    return(

        <div className="package-container">


            <div className="package-card">


                <h1>Edit Tour Package</h1>


                <form onSubmit={handleSubmit}>


                    {
                    Object.keys(packageData)
                    .filter(key=>key!=="id" && key!=="status")
                    .map((key)=>(


                        <input

                        key={key}

                        name={key}

                        value={packageData[key] || ""}

                        onChange={handleChange}

                        placeholder={key}

                        required

                        />


                    ))
                    }



                    <button>
                        Update Package
                    </button>


                </form>


            </div>


        </div>

    );

}


export default EditTourPackage;