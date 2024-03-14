import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



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
          <form action='/PatientEntry'>
            <button type='submit'><span className="spoon"></span>Patient Entry</button>
          </form>
          <form action='/PatientDirectory'>
            <button type='submit'><span className="spoon"></span>Patient Directory</button>
          </form>
        </div>
      </div>
    </body>
  );
}

function PatientEntryPage() {
  return (
    <body id="patiententry">
      <h1 className="companyTitle">InfirmAssist</h1>
      <h2 className="infoText">Patient Entry</h2>
      <span>
          <form id="patientEntryInputs" action='/' method="post">
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

export default function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/PatientEntry' element={<PatientEntryPage />} />
      </Routes>
    </Router>
  );  
}
