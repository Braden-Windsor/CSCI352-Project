function WelcomePage() {
  return (
    <body style={{width: screen.width, height: screen.height}}>
      <h1 className="companyTitle" style={
        {fontSize: (screen.width/20)}
      }>InfirmAssist</h1>
      <h2 className="infoText" style={
        {fontSize: (screen.width/75)}
      }>Receptionist and Hospital Administration Software</h2>
      <button style= {
        {height: screen.height/10, width: screen.width/10}
      }>How to use</button>
      <button style = {
        {height: screen.height/10, width: screen.width/10}
      }>Receptionist</button>
      <button style={
        {height: screen.height/10, width: screen.width/10}
      }>Analytics</button>
    </body>
  );
}

export default function App() {
  return (
    <WelcomePage/>
  );
}
