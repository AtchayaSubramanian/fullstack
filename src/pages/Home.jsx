import { Panel } from 'rsuite';
import "../assets/css/home.css";
import NavigationBar from "../components/navbar";
import { Link, useNavigate } from 'react-router-dom';


const footerStyle = {
  backgroundColor: '#D8BFD8',
  color: 'black',
  padding: '2rem 0',
  textAlign: 'center',
};

export default function home(){
    const Navigate =useNavigate();
    const handleChange=()=>{
        Navigate("/wedding");
    }
    return(
        <>
        <div>
        <div className='home'>
        <NavigationBar/>
        <div className="contain">
            {/* <img className="homepic" src={homeback} alt="pic1" /> */}
            <div className="text-block">
                <p className="text1"></p>
             
            </div>
            </div>
            </div>
            <div style={{display:'flex'}}>
    
    <div>
        {/* <h1 className="AC">Namaste!</h1> */}
     <br></br>
     <br></br>
     <img className="tow" style={{width:600,height:600}} src="https://img.freepik.com/free-vector/party-silhouettes_1048-5161.jpg?size=626&ext=jpg&ga=GA1.1.407889468.1684387029&semt=ais"></img>
     </div> 
     <div>
       <br></br>
       <br></br>
       
     <section className="about-section">
     <div className="cntainer">
       <div className="about-content">
         <h2 style={{textAlign:'center',fontSize:40,fontFamily:'cursive',marginTop:'60px',marginBottom:'40px'}}className="af">Welcome to party pros </h2>
         <h2 style={{textAlign:'center'}}></h2>
       <p style={{textAlign:'center',fontStyle:'letter-spacing:0.08em',marginTop:40,fontSize:'20px',justifyContent:'space-between',
       fontFamily:'cursive',lineHeight:'2.5',marginRight:100,marginLeft:120}}>
       Create moments that become memories. Let every party be an unforgettable chapter in your story.
       Life's a party, let's make every moment count.
Celebrate the moments that make life sparkle.<br></br>
       <img  style={{height:'30px',width:'200px',justifyContent:'right',marginleft:'200px',marginTop:'50px' }} src="https://www.v3events.in/images/title-icon.png"></img>
       </p>

       </div>
       {/* <div><img className="ry" src="https://pngimg.com/d/yoga_PNG119.png"></img></div> */}
     </div>
   </section>
   </div> 
   </div>
      
            <div style={{ marginTop:40,marginBottom:40,flexDirection: 'row', display: 'flex', backgroundColor: "#dedede" }}>
  <div>
    <h1 style={{
      marginLeft: 630,
      fontFamily: 'Courier New, monospace', // Change the font to your preference
      textTransform: 'capitalize',
      fontWeight: 'bolder',
      animation: 'fadeInLeft 1s ease-in-out', // Add a fadeInLeft animation
      // marginBottom:'50px'
    }}>Making Memories</h1>
  </div>


 
</div>
            <div >
              
             <h1 style={{textAlign:'center',marginTop:80,marginBottom:10}}>Events</h1>
             
                <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',paddingleft:'900px',overflow: 'hidden'}}>
                <button onClick={handleChange}>
                 
           {/* <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px',overflow: 'hidden' }}>
             <img style={{width:400,display:'flex'}}src="https://img.freepik.com/premium-photo/happy-married-couple-kissing_167657-523.jpg?size=626&ext=jpg&ga=GA1.1.62851626.1706605370&semt=ais" height="400"/>
                <div style={{marginRight:'20px',marginTop:'20px'}}>
            
             </div><Panel header="WEDDING"> */}
             <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400}}>
    <img src="https://img.freepik.com/premium-photo/happy-married-couple-kissing_167657-523.jpg?size=626&ext=jpg&ga=GA1.1.62851626.1706605370&semt=ais" height="400" width="400"/>
        <Panel style={{fontFamily:'cursive',fontSize:25}} header="WEDDING">
        
    
       
           </Panel>
          </Panel>
    
          </button>
      <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:100}}>
      <button ><Link to='/others'>
       {/* <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px',overflow: 'hidden' ,paddingleft:'400px'}}>
    <img style={{width:400,display:'flex'}} src="https://img.freepik.com/free-photo/woman-looking-falling-confetti_23-2147651959.jpg?size=626&ext=jpg&ga=GA1.1.62851626.1706605370&semt=ais" height="400" width="400"/>
        <Panel header="OTHER PARTIES AND EVENTS"> */}
     <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400}}>
    <img src="https://img.freepik.com/free-photo/woman-looking-falling-confetti_23-2147651959.jpg?size=626&ext=jpg&ga=GA1.1.62851626.1706605370&semt=ais" height="400" width="400"/>
        <Panel style={{fontFamily:'cursive',fontSize:25}} header="OTHER PARTIES AND EVENTS">
          </Panel>
            </Panel>
          </Link>
            </button>
            </div>
            </div>
           
            </div>
            <footer style={footerStyle}>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Your Company is dedicated to providing innovative solutions...</p>
        </div>
        <div className="footer-section">
      
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
            </div>
       
        </>
    )
}