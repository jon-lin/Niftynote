import React from 'react';
import { Link } from 'react-router';

export const backgroundImg = (
  <img className="backgroundImg" src="/images/darkspace.jpg"/>
);

export const splashMessage = (
  <div className='splashMessage'>
    <p className='notetakingheader'>Note-taking just got noteworthy.</p>
    <section className='description'>
      Never forget a nifty thought again.
      Niftynote helps you save, edit and organize
      all your ideas in one place.
    </section>
  </div>
);

export const splashFooter = (
  <div className='splashFooter'>
    <p>Get organized by joining <Link to='/signup'> Niftynote </Link> today.</p>
  </div>
);
