import {useState} from 'react';



export default function App() {
  const [page, setPage] = useState("Welcome");
  const onButtonClick = (page:string) => {
    if (page === "Welcome") {
      setPage("Welcome");
    }
    else if (page === "Receptionist") {
      setPage("Receptionist");
    }
  }
  function WelcomePage() {
    return (
      <body id="welcome">
        <h1 className="companyTitle">InfirmAssist</h1>
        <h2 className="infoText">Receptionist and Hospital Administration Software</h2>
        <button onClick={()=>{onButtonClick("How to use")}}>How to use</button>
        <button onClick={()=>{onButtonClick("Receptionist")}}>Receptionist</button>
        <button onClick={()=>{onButtonClick("Analytics")}}>Analytics</button>
      </body>
    );
  }
  function ReceptionPage() {
    return (
      <body id="reception">
        <h1 className="companyTitle">InfirmAssist</h1>
        <h2 className="infoText">Receptionist Mode</h2>
        <span>
          <div>
            <h3>Patient First Name</h3>
            <form>
              <input></input>
            </form>
          </div>
          <div>
            <h3>Patient Last Name</h3>
            <form>
              <input></input>
            </form>
          </div>
        </span>
      </body>
    );
  }
  if (page === "Welcome") {
    return(
      <WelcomePage />
    );
  }
  else if (page === "How to use") {

  }
  else if (page === "Receptionist") {
    return(
      <ReceptionPage />
    );
  }
  else if (page === "Analytics") {

  }
}
