import Mount from '../Assets/people-adventure-bicycle-bicycles.jpg'
import '../styles.css'
import Profil from '../Assets/ProfilePic.jpg'

export default function About() {
    return (
        <> 
        <article>
        <section>
        <div className="container">
           
            <div className="parag">
        <h1 className="know">About us</h1>
        <img src={Mount} className='mount' alt="" />
        <p className="lorm">lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt id cupiditate nisi, delectus porro iure esse ut et architecto atque, autem sed dolor vitae nihil ex dolorem labore aliquid.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis facere recusandae, tenetur mollitia error molestiae eaque sapiente, blanditiis maxime nihil in, exercitationem quas excepturi voluptate dolorum eius omnis? Facilis.
              Lorem ipsum dolor sit amet consectetur <strong>adipisicing elit. </strong>Inventore natus delectus illo recusandae ex. A dolorem tempora aliquam molestias suscipit eveniet corporis fugiat cum eos doloremque facere qui, ipsum voluptatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam sunt quod aut beatae magni iusto dolorem iste aliquid iure hic est explicabo, facere molestias molestiae unde eligendi similique architecto?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aut reiciendis assumenda unde nemo nobis sunt fuga tempore asperiores non eaque, reprehenderit saepe facilis harum recusandae cumque molestias adipisci quis.
              Lorem ipsum dolor sit amet, excepturi? Nam at maiores Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil aut iste quae nisi iusto consequatur adipisci at, pariatur corporis ab explicabo distinctio illum,
        </p>
        </div>
        
        </div>  
        <br/>
        <br/>
        <br/>
         <section>
            <h4 className='know'>Testimonial</h4>
            <h1 className='know'>What They Are Saying</h1>
            <img src={Profil} className='daod' alt='' />
            <p className='testtext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Alias aliquid aperiam odit dicta repellat vel voluptas ullam veniam soluta, quo facere ratione officia, voluptatibus,<br/> autem reprehenderit repellendus tempora corrupti. At!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,<br/> cumque repellendus esse aliquam nisi incidunt labore quo quod enim laborum amet minus praesentium possimus assumenda temporibus necessitatibus. Voluptate, cupiditate sequi.
            </p>
<h3 className='know'>
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
</h3>
<h4 className='know'>Hamdoune Daoud</h4>
        </section>
        </section>
        </article>
     


        </>
    )
}