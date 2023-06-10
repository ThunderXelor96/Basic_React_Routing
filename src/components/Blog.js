import '../styles.css'
import Devlo from '../Assets/software-developer-6521720_1920.jpg'
import Devl from '../Assets/technology-1283624_1920.jpg'
import React from 'react'

export default function Blog() {
    return (
        <>
        <article>
        <section>
            <div className="container">
                <div className="parag">
                <h1 className="know">Blog</h1>
                <img src={Devlo} className='devlo' alt='' />
                    <p className='lorm'>
                    lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt id cupiditate nisi, delectus porro iure esse ut et architecto atque, autem sed dolor vitae nihil ex dolorem labore aliquid.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis facere recusandae, tenetur mollitia error molestiae eaque sapiente, blanditiis maxime nihil in, exercitationem quas excepturi voluptate dolorum eius omnis? Facilis.
              Lorem ipsum dolor sit amet consectetur <strong>adipisicing elit. </strong>Inventore natus delectus illo recusandae ex. A dolorem tempora aliquam molestias suscipit eveniet corporis fugiat cum eos doloremque facere qui, ipsum voluptatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam sunt quod aut beatae magni iusto dolorem iste aliquid iure hic est explicabo, facere molestias molestiae unde eligendi similique architecto?
              Lorem ipsum dolor sit amet consectetur, adipisicing consectetur adipisicing elit. Aperiam quam sunt quod aut beatae magni iusto dolorem iste aliquid iure hic est explicabo, facere molestias molestiae unde eligendi similique architecto?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat autasper eprehenderit saepe facilis harum recusandae cumque molestias adipisci quis.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <h3 className="know">Autrement</h3>
                
                <p className='lorm2'>
                lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt id cupiditate nisi, delectus porro iure esse ut et architecto atque, autem sed dolor vitae nihil ex dolorem labore aliquid.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis facere recusandae, tenetur mollitia error molestiae eaque sapiente, blanditiis maxime nihil in, exercitationem quas excepturi voluptate dolorum eius omnis? Facilis.
              Lorem ipsum dolor sit amet consectetur <strong>adipisicing elit. </strong>Inventore natus delectus illo recusandae ex. A dolorem tempora aliquam molestias suscipit eveniet corporis fugiat cum eos doloremque facere qui, ipsum voluptatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam sunt quod aut beatae magni iusto dolorem iste aliquid iure hic est explicabo, facere molestias molestiae unde eligendi similique architecto?
              Lorem ipsum dolor sit amet consectetur, adipisicing consectetur adipisicing elit. Aperiam quam sunt quod aut beatae magni iusto dolorem iste aliquid iure hic est explicabo, facere molestias molestiae unde eligendi similique architecto?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat autasper eprehenderit saepe facilis harum
                </p>
                <img src={Devl} className='devl' alt='' />
                </div>
            </div>
        </section>
        </article>
        </>
    )
}