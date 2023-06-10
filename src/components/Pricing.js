import '../styles.css'


export default function Pricing() {
    return(
        <>
        <div className ="contain">
          
       <div className ="cord">
           <div className ="cord-title">
               <h2>Basic</h2>
               <p><h2>99<i class='bx bx-dollar'></i></h2>/month</p>
           </div>
           <div className ="cord-content">
               <ul>
                   <li><i className ="fa fa-check-circle"></i>Remote</li>
                   <li><i className ="fa fa-check-circle"></i>Creation Website</li>
                   <li><i className ="fa fa-check-circle"></i>CRUD React</li>
                   <li><i className ="fa fa-times-circle"></i>Modification of the Website</li>
                  
               </ul>
               <button><a href="/">Buy Now</a></button>
           </div>
       </div>

       <div className ="cord">
           <div className ="cord-title">
               <h2>Standard</h2>
               <p><h2>199<i class='bx bx-dollar'></i></h2>/month</p>
           </div>
           <div className ="cord-content">
               <ul>
               <li><i className ="fa fa-check-circle"></i>Remote</li>
                   <li><i className ="fa fa-check-circle"></i>Creation Website</li>
                   <li><i className ="fa fa-check-circle"></i>CRUD React</li>
                   <li><i className ="fa fa-times-circle"></i>Modification of the Website</li>
                   
               </ul>
               <button><a href="/">Buy Now</a></button>
           </div>
       </div>

       <div className ="cord">
           <div className ="cord-title">
               <h2>Premium</h2>
               <p><h2>299<i class='bx bx-dollar'></i></h2>/month</p>
           </div>
           <div className ="cord-content">
               <ul>
               <li><i className ="fa fa-check-circle"></i>Remote</li>
                   <li><i className ="fa fa-check-circle"></i>Creation Website</li>
                   <li><i className ="fa fa-check-circle"></i>CRUD React</li>
                   <li><i className ="fa fa-times-circle"></i>Modification of the Website</li>
                   
               </ul>
               <button><a href="/">Buy Now</a></button>
           </div>
       </div>

   </div>
        </>
    )
}