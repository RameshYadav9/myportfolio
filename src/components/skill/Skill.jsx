import React from 'react'
import './skill.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Skill = () => {
  return (
    <section id="skill">
      <h2>What Skills I Have</h2>

      <div className='"container skill__container'>
        <div className='skill__frontend'>
          <h3>Frontend Development</h3>
          <div className='skill__content'>
            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>



            </article>
            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon'/>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>



            </article>
            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon'/>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>



            </article>
            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon'/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>



            </article>
            
            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon'/>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>



            </article>
          </div>
          
        </div>

        {/* ================end of fronend part=========== */}

        <div className='skill__backend'>
        <h3>Backend Development</h3>
          <div className='skill__content'>
            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon'/>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>



            </article>
            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon'/>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>



            </article>
            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon'/>
              <h4>PHP</h4>
              <small className='text-light'>Basic</small>



            </article>
            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon'/>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>



            </article>
            
            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon'/>
              <h4>Python</h4>
              <small className='text-light'>Basic</small>



            </article>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Skill