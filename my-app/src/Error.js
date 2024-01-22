import './style.css'
import ReturnButton from './components/ReturnButton'
function Error() {
  return (
    <div className="Home">
      <header>
        <div className="Main-header">
          <ReturnButton></ReturnButton>
          <h1 className="Page-header">Page Not Found</h1>
        </div>
      </header>
      <body className="Main-body Main-info" style={{padding:'0',flexDirection:'column',alignItems:'center'}}>
      <img className="Cat-cycle" src="../assets/catsleep.gif">
      </img>
        <h3 style={{color:'darkgray',textAlign:'center', bottom:'20px', position:'absolute',padding:'20px'}}>Please select from the available options shown in the search box</h3>
      </body>
    </div>
  )
}

export default Error