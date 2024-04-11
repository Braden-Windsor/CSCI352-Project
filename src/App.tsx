import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css'; // Assuming styles.css is in the same directory

import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// Existing code...

function WelcomePage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLoginClick = () => {
    navigate('/Login'); // Navigate to the Login page when clicked
  };

  return (
    <body id="welcome">
      <div className="banner">
        <div className="navbar">
          <h1 className="companyTitle">InfirmAssist</h1>
          <img src="" className="logo" alt="logo"></img>
          <p>Receptionist and Hospital Administration Software</p>
          {/* Add the clickable word to login here */}
          <p className="login-link" onClick={handleLoginClick}>Login</p>
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
            <form action='/PatientDirectory'>
              <button type='submit'><span className="spoon"></span>Submit</button>
            </form>
          </form>
      </span>
    </body>
  );
}

function PatientDirectoryPage(){
  //let data = fetch("/patientData").then((res) => {return res.json()})
  return(
    <body id="patientdirectory">
      <div className="container">
        <h2 className="infoText">Patient Directory</h2>
        <input type="text" placeholder="Search patients..." className="searchInput"></input>
        <div className="patientList">
          <div className="patientItem">
            <h3>Trey Wright</h3>
            <p>DOB: 2003-12-04</p>
            <p>SSN: 123-45-6789</p>
          </div>
          <div className="patientItem">
            <h3>Arden Stanley</h3>
            <p>DOB: 2003-02-31</p>
            <p>SSN: 922-62-2690</p>
          </div>
          <div className="patientItem">
            <h3>Braden Windsor</h3>
            <p>DOB: 2004-09-01</p>
            <p>SSN: 420-65-4481</p>
          </div>
        </div>
      </div>
    </body>
  );
}

function LoginForm(){
  
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember Me</label>
          <a href="#">Forgot Password</a>
        </div>
        <form action='/WelcomePage'>
          <button type='submit'><span className="spoon"></span>Login</button>
        </form>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/WelcomePage' element={<WelcomePage />} />
        <Route path='/PatientEntry' element={<PatientEntryPage />} />
        <Route path='/PatientDirectory' element={<PatientDirectoryPage/>} />
        <Route path='/Login' element={<LoginForm />} /> {/* Added Route for Login */}
      </Routes>
    </Router>
  );  
}