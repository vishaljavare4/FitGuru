import SearchBox from "./SearchBox";
import { Dumbbell } from "lucide-react";
import Loader from "./Loader";
import { useEffect, useState } from "react";


const Exercise = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchExercise, setSearchExercise] = useState([]);
    const [filterExercise, setFilterExercise] = useState([]);
    // const [loading, setLoading] = useState(false);

    const workouts = [
        'BACK',
        'CARDIO',
        'CHEST',
        'LOWER ARMS',
        'LOWER LEGS',
        'NECK',
        'SHOULDERS',
        'UPPER ARMS',
        'UPPER LEGS',
        'WAIST'
      ];

      const fetchData = async () => {
        const url = "https://exercisedb.p.rapidapi.com/exercises?";
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "c6b77b25a9msh4fe51e21727aad3p171430jsn50b8fc836df7",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        };
    
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result);
          setSearchExercise(result);
          setFilterExercise(result);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(()=>{
        // setLoading(true);
        setTimeout(()=>{
          fetchData();
        // setLoading(false);
        },2000000)
      },[])

    return (
        <div className="flex flex-col items-center bg-[rgb(240,240,240)] text-black py-16 ">
            <h2 className="text-3xl font-bold">Awesome Exercises You Should Know</h2>
            <SearchBox onchange={(e) => setSearchInput(e.target.value)} onsearch={() => {if(searchInput.trim() == ""){alert("Please Enter Valid Input"); return}  ;console.log(searchInput)}} setSearchInput={setSearchInput} />
            <div className="w-[900px] flex flex-wrap justify-center gap-10">
                {workouts.map((workout,index) => (
                    <div onClick={(e) => {console.log(e.target.title)
                        setSearchInput(e.target.title);
                        
                    }}  title={workout.toLowerCase()} key={index} className="w-[150px] h-[150px] rounded-md flex flex-col justify-center items-center bg-white text-3xl font-bold hover:border-t-[3px] hover:border-red-500 hover:shadow-md hover:cursor-pointer">
                            <Dumbbell className="text-red-500" />
                            <p className="text-xl font-bold">{workout}</p>
                    </div>
                ))}
                {/* <Loader /> */}
            </div>

            <div className="w-[100%] p-8 flex flex-wrap h-fit py-8 justify-center h-[500px] gap-4">
                {
                filterExercise.length == 0 ? <Loader /> :
                    filterExercise.map((exercise) => (
                        // console.log(exercise)
                        <div onClick={() => {setSearchInput(exercise.name)}} title={exercise.id} key={exercise.id} className="w-[328px] min-w-[326px]: h-[400px] border-white border-[1px] hover:shadow-xl hover:cursor-pointer hover:border-black bg-white rounded-lg flex flex-col justify-center items-center gap-4">
                            <img src={exercise.gifUrl} width={280} alt="animated GIF url" />
                            <span className="flex gap-4">
                                <p className="text-md flex justify-center items-center font-semibold text-white bg-red-500 rounded-full px-2">{exercise.bodyPart}</p>
                                <p className="text-md flex justify-center items-center font-semibold text-white bg-green-500 rounded-full px-2">{exercise.target}</p>
                                <p className="text-md flex justify-center items-center font-semibold text-white bg-blue-500 rounded-full px-2">{exercise.equipment}</p>
                            </span>
                            <p className="text-xl font-bold uppercase text-center">{exercise.name}</p>
                        </div>
                    ))            
                }
            </div>
        </div>
    )
}

export default Exercise;