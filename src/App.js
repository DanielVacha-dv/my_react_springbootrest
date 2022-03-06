import React, {useEffect, useState} from "react";
import "./css/App.css";
import {getAllEmployeer} from "./module/Employeer";
import Card from "./module/Card";

function App() {
    const [employerData, setEmployerData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [nextUrl, setNextUrl] = useState("");
    // const [prevUrl, setPrevUrl] = useState("");
    const initialURL = "http://localhost:8090/h2/v1/getemployeeresparray";

    useEffect(() => {
        async function fetchData() {
            let response = await getAllEmployeer(initialURL);
            setLoading(false);
            // setNextUrl(response.next);
            // setPrevUrl(response.previous);
            console.log(response);
            // await loadEmployeer(response.results);
            setEmployerData(response.result);
        }

        fetchData();
    }, []);

    // const loadEmployeer = async (data) => {
    //     let _employeerData = await Promise.all(
    //         data.map(async (pokemon) => {
    //             let pokemonRecord = await getEmployee(pokemon.url);
    //             return pokemonRecord;
    //         }),
    //     );
    //     setEmployeerData(_employeerData);
    // };

    return (
        <div className="App">
            {/*<header className="App-header"></header>*/}

            {loading ? (
                <h1>Stránka se načítá</h1>
            ) : (
                <div className="mainFlexContainer">
                    {employerData.map((employer, i) => {
                        console.log("employer" + employer);
                        console.log("employer name:" + employer.name);
                        console.log("employer id: " + employer.id);
                        return <Card key={i} employer={employer}/>;
                    })}
                </div>
            )}
        </div>
    );
}

export default App;
