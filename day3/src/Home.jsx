import { Panel } from 'rsuite';
import "../assets/css/home.css";
import NavigationBar from "../components/navbar";
import { Link, useNavigate } from 'react-router-dom';



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
         <h2 style={{textAlign:'center'}}className="af">About Yoga!</h2>
         <h2 style={{textAlign:'center'}}>Find balance. Embrace yourself."</h2>
       <p style={{textAlign:'center',fontStyle:'letter-spacing:0.08em',marginTop:40,fontSize:'20px',justifyContent:'space-between',marginRight:50}}>
       All our courses explore transformative practices which are rooted in the energetic traditions  of Hatha Yoga, as well as Tantra, Taoism & Ayurveda.

Our approach is based on the fact that every individual is unique.
       </p>
       </div>
       {/* <div><img className="ry" src="https://pngimg.com/d/yoga_PNG119.png"></img></div> */}
     </div>
   </section>
   </div> 
   </div>
      
            <div style={{ marginTop:90,flexDirection: 'row', display: 'flex', backgroundColor: "#dedede" }}>
  <div>
    <h1 style={{
      marginLeft: 550,
      fontFamily: 'Courier New, monospace', // Change the font to your preference
      textTransform: 'capitalize',
      fontWeight: 'bolder',
      animation: 'fadeInLeft 1s ease-in-out' // Add a fadeInLeft animation
    }}>Making Memories</h1>
  </div>


 
</div>
            <div >
                <div>
             <h1 style={{textAlign:'center',marginTop:150}}>Events</h1>
             </div>
                <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:100}}>
                <button onClick={handleChange}>
                 
           <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px'}}>
                <div style={{marginRight:'20px'}}>
             <img src="https://img.freepik.com/premium-photo/happy-married-couple-kissing_167657-523.jpg?size=626&ext=jpg&ga=GA1.1.62851626.1706605370&semt=ais" height="400" />
             {/* <img src="" height="400" /> */}
             </div><Panel header="WEDDING">
        
      <p style={{flexGrow:1}}>
        <small>
          {/* A suite of React components, sensible UI design, and a friendly development experience. */}
        </small>
      </p>
       
           </Panel>
          </Panel>
    
          </button>
      <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:100}}>
      <button ><Link to='/others'>
       <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px'}}>
    <img src="https://img.freepik.com/free-photo/woman-looking-falling-confetti_23-2147651959.jpg?size=626&ext=jpg&ga=GA1.1.62851626.1706605370&semt=ais" height="400" width="400"/>
        <Panel header="OTHER PARTIES AND EVENTS">
      <p>
        <small>
          
        </small>
      </p>
          </Panel>
            </Panel>
          </Link>
            </button>
            </div>
            </div>
           
            </div>
            </div>
       
        </>
    )
}