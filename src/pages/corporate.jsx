import { Panel } from 'rsuite';
// import "../assets/css/home.css";
import NavigationBar from "../components/navbar";
import { Link, useNavigate } from 'react-router-dom';
import NavigationBar2 from './eventnav';



export default function Corporate(){
  
    return(
        <>
        <div>
        <div className='home'>
        <NavigationBar2/>
        <div className="contain">
            {/* <img className="homepic" src={homeback} alt="pic1" /> */}
            <div className="text-block">
                <p className="text1"></p>
             
            </div>
            </div>
            </div>
           
<h1 style={{textAlign:'center',marginTop:'50px'}}>Corporate Events</h1>
     
            <div >
          
          <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:100}}>
      <button >
       <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400}}>
    <img src="https://gowithape.com/wp-content/uploads/2019/03/MG_7269.jpg" height="400" width="400"/>
        <Panel style={{fontFamily:'cursive',fontSize:25}} header="DJ for Special Events">
      <p>
        <small style={{fontFamily:'cursive',fontSize:16}}>
        Are you looking for a DJ to bring good vibes and energy to your special event? Then look no further! If you are having a social or
         corporate event, birthday party, 
        school function, or any other special event we can provide the music and entertainment that will bring it to the next level.
        </small>
      </p>
          </Panel>
            </Panel>
          
            </button>
      <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:100}}>
      <button >
       <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400}}>
    <img src="https://gowithape.com/wp-content/uploads/2020/07/purple-fireworks-effect-1190298-scaled.jpg   " height="400" width="400"/>
        <Panel style={{fontFamily:'cursive',fontSize:25}} header="Lighting and Effects">
      <p>
        <small style={{fontFamily:'cursive',fontSize:16}}>
        Lighting and effects can drastically transform a room, set the mood, and bring life to the dance floor.
         From elegant creative design uplighting to gorgeous monograms for your dance floor, we can create the 
         perfect atmosphere for your dream wedding
        </small>
      </p>
          </Panel>
            </Panel>
          
            </button>
            </div>
            </div>
           
            </div>
            <div>
                <h1 style={{textAlign:'center',marginTop:2}}>LET'S START PLANNING YOUR EVENT</h1>
                <button  style={{marginTop:60,marginLeft:650,fontSize:40,marginBottom:40}}><Link to='/info'>CLICK HERE</Link></button>
            </div> 
            </div>
       
        </>
    )
}