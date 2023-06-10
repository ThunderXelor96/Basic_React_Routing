import '../styles.css'
import React from 'react';
import { MDBInput, MDBCheckbox,MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';

//backgroundColor:'#000',

export default function Contact() {
  return (
    <>
    <section>
      <article>
    <h1 className='know' id='kno'>Contact Our Support !</h1>
    <form id='form' className='text-center' style={{backgroundColor:'#000', paddingTop:'30px' , paddingLeft:'30px',paddingRight:'30px',borderRadius:'10px', width: '100%', maxWidth: '800px' }}>
      <h2 className='know'>Contact us</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
    </article>
    </section>
    </>
  )
}

