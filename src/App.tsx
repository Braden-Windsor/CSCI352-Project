import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

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
            <button><span className="spoon"></span>Patient Entry</button>
          </form>
          <form action='/PatientDirectory'>
            <button><span className="spoon"></span>Patient Directory</button>
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
            <h3 className="inputDescription">Patient Date of Admittance</h3>
              <input type='text' name='doa'></input>
            <h3 className="inputDescription">Patient Date of Birth</h3>
              <input type='text' name='dob'></input>
              <button><span className="spoon"></span>Submit</button>
          </form>
      </span>
    </body>
  );
}

function PatientDirectoryPage(){
  return(
    <body id="patientdirectory">
      <div className="container">
        <h2 className="infoText">Patient Directory</h2>
        <input type="text" placeholder="Search patients..." className="searchInput"></input>
        <div className="patientList">
          {/* This is a temp so i can make progress*/}
          <div className="patientItem">
            <h3>Trey Wright</h3>
            <p>DOB: 12/04/2003</p>
            <p>SSN: 123-45-6789</p>
          </div>
          <div className="patientItem">
            <h3>Arden Stanley</h3>
            <p>DOB: 02/31/2003</p>
            <p>SSN: 922-62-2690</p>
          </div>
          <div className="patientItem">
            <h3>Braden Windsor</h3>
            <p>DOB: 09/01/2004</p>
            <p>SSN: 420-65-4481</p>
          </div>
          {/* can copy and paste to add more stuff*/}
        </div>
      </div>
    </body>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/PatientEntry' element={<PatientEntryPage />} />
        <Route path='/PatientDirectory' element={<PatientDirectoryPage />} />
      </Routes>
    </Router>
  );  
}
