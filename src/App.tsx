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
        <div className="banner">
          <div className="navbar">
            <h1 className="companyTitle">InfirmAssist</h1>
            <img src="" className="logo"></img>
            <p>Receptionist and Hospital Administration Software</p>
          </div>
          <div className="content">
            <h2 className="infoTextHome">WELCOME</h2>
            <p>CLICK ANYWHERE BELOW TO GET STARTED</p>
            <button onClick={()=>{onButtonClick("How to use")}}><span className="spoon"></span>About</button>
            <button onClick={()=>{onButtonClick("Receptionist")}}><span className="spoon"></span>Receptionist</button>
            <button onClick={()=>{onButtonClick("Analytics")}}><span className="spoon"></span>Analytics</button>
          </div>
        </div>
      </body>
    );
  }
  function ReceptionPage() {
    return (
      <body id="reception">
        <h1 className="companyTitle1">InfirmAssist</h1>
        <h2 className="infoText">Receptionist Mode</h2>
        <span>
            <form action='/' method="post">
              <h3 className="inputDescription">Patient First Name</h3>
                <input type='text' name='firstname'></input>
              <h3 className="inputDescription">Patient Last Name</h3>
                <input type='text' name='lastname'></input>
              <h3 className="inputDescription">Patient SSN</h3>
                <input type='text' name='ssn'></input>
              <h3 className="inputDescription">Patient Date of admittance</h3>
                <input type='text' name='doa'></input>
              <h3 className="inputDescription">Patient Date of Birth</h3>
                <input type='text' name='dob'></input>
              <button id="submit" type='submit'>submit</button>
            </form>
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
