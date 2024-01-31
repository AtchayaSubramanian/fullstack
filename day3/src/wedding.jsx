import { Panel } from 'rsuite';
import "../assets/css/wedding.css";
import NavigationBar from "../components/navbar";
import NavigationBar2 from './eventnav';
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';



export default function Wedding(){




   
    return(
        <>
        <div>
        {/* <div className='home'> */}
        <NavigationBar2/>
       
            {/* </div> */}
              <h1  style={{textAlign:'center'}}>WEDDING PLANNING</h1>
     
            <div >
                <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:50}}>
               
                 
           <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px'}}>
                <div style={{marginRight:'20px'}}>
                <img src="https://img.freepik.com/free-photo/beautiful-woman-long-red-dress-walks-around-city-with-her-husband_1157-13379.jpg?size=626&ext=jpg&ga=GA1.1.407889468.1684387029&semt=ais" height="400" width='400' style={{borderRadius:1200}}/>
                {/* <img src="" height="400" /> */}
             </div><Panel style={{fontFamily:'cursive',fontSize:25,textAlign:'center'}} header ="Wedding Planning" >
        
      <p style={{flexGrow:1}}>
        <small style={{fontSize:16,fontFamily:'cursive'}}>
         Our team will take your wedding vision and capitalize on that throughout the event development and design Indianapolis
         IN as well as pre and post-production. From engagement to the final dance we will be with you every step of the way, 
         listening and making sure your day is remembered with the fondest of memories for you and your guests. We can customize 
         any event to your specific needs. Whether it's entertainment, decor, vendors or guest services, we will take your ideas 
         and run with them.
        </small>
      </p>
       
           </Panel>
          </Panel>
    
         
      <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:50}}>
      
       <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px'}}>
        <div style={{marginRight:'20px'}}>
    <img src="https://images.squarespace-cdn.com/content/v1/5a2ad4af268b967d217f3a23/2c5be94e-4231-4ed8-ace0-6f9893a07074/wedding-planners-salt-lake-city.jpg?format=750w" height="400" width="400" style={{borderRadius:1200}}/>
    </div><Panel style={{fontFamily:'cursive',fontSize:25,textAlign:'center'}} header="Wedding Coordination">
      <p>
        <small style={{fontSize:16,fontFamily:'cursive'}}>
        You have hired the vendors and have planned how you want your day to go. We ensure you have thought of 
        all the details of the event and on the wedding day, our role is to ensure your plans are carried out smoothly
         and discreetly handle any problems that arise. This means you can arrive in a perfectly set up ceremony and reception 
         since we would have been there in advance assuring details are completed.  We are the liaison between you and the venue,
          catering, decorators in Indianapolis IN, entertainment, and photographers. 
        
        </small>
      </p>
          </Panel>
            </Panel>
           
            </div>
            </div>
           
            </div>
            <div>
                <h1 style={{textAlign:'center',marginTop:2}}>LET'S START PLANNING YOUR WEDDING</h1>
                <button  style={{marginTop:60,marginLeft:650,fontSize:40,marginBottom:40}}><Link to='/info'>CLICK HERE</Link></button>
            </div>  
            </div>
          
        </>
    )
}
