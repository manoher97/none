import React from 'react';
import { serviceData } from './products';
import { Link } from 'react-router-dom';

const AddOn = () => {

  return (
    <div>
      <div class="d-flex flex-row-reverse">
        {
          serviceData.map((s)=>(
            <Link className='link-offset-2 link-underline link-underline-opacity-0'>
            <div class="p-2" style={{background:`${s.bg}`}}>
              <span>{`${s.icon}`}</span>
              {console.log(s.icon)}
              <h6>{s.title}</h6>
              <p>{s.subtitle}</p>
            </div>
            </Link>
          ))
        }       
      </div>
    </div>
  )
}

export default AddOn
