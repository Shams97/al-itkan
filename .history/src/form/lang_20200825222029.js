import React from 'react'
import {FormInput } from './main';

export default function Language () {
    return (
      <div className="form">
          
        <h3> Language an level of proficiency </h3>
        <form action="POST">
        <FormInput placeholder="Phone" name="phone"  />
        <FormInput placeholder="E-mail" name="email" />
        <div>
        <button >Previous</button>

          <button >Next</button>
        </div>
     </form>
     
      </div>
    );
    
}
