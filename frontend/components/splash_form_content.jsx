import React from 'react';

export const video = (
  <div className='videocontainer'>
    <video className="splash" autoPlay="autoplay" loop="loop" poster="https://cdn1.evernote.com/evernote.com/img/homepage/homepage-hero-video-desktop-still@2x.jpg">
      <source type="video/webm" src="https://cdn1.evernote.com/evernote.com/video/homepage/homepage-hero-video@2x.webm"/>
      <source type="video/mp4" src="https://cdn1.evernote.com/evernote.com/video/homepage/homepage-hero-video@2x.mp4"/>
    </video>
  </div>
);

export const splashMessage = (
  <div className='splashMessage'>
    <p className='notetakingheader'>Note-taking in Style</p>
    <section className='description'>
      Never forget a nifty thought again.
      Niftynote helps you save, edit and organize
      all your ideas in one place.
    </section>
  </div>
);

export const splashFooter = (
  <div className='splashFooter'>
    <p>Get organized by joining Niftynote today.</p>
  </div>
);
