
import "./styles.css";



export default function Topbar() {
    return (
        <>
     <section id="topbar" className="topbar d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:hamdoune.daoud1996@gmail.com">hamdoune.daoud1996@gmail.com</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+212 687 966 644</span></i>
        
      </div>
      
      <div class="social-links d-none d-md-flex align-items-center">
      
        <a href="/" className="twitter"><i className='bx bxl-twitter bx-sm'></i></a>
        <a href="/" className="facebook"><i className='bx bxl-facebook-circle bx-sm'></i></a>
        <a href="/" className="instagram"><i className='bx bxl-instagram-alt bx-sm' ></i></a>
        <a href="/" className="linkedin"><i className='bx bxl-linkedin-square bx-sm'></i></a>
      </div>
    </div>
 
  </section>
  
        </>
    )
}