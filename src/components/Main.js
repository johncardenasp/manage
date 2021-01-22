import React from 'react';

import './styles/Main.css';

import Button from './Button';
import Card from './Cards';
import Opinion from './Opinions';

import hero from '../images/illustration-intro.svg';
import anisha from '../images/avatar-anisha.png';
import ali from '../images/avatar-ali.png';
import richard from '../images/avatar-richard.png';
import shanai from '../images/avatar-shanai.png';

function Main() {
  return (
    <main className="main">
      <div className="main__hero">
        <img 
          src={hero} 
          className="main__hero-image" 
          alt="Intro" 
        />
      </div>
      <div className="main__content">
        <h1>
          Bring everyone together to build better products.
        </h1>
        <p>
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
        </p>
        <Button />
      </div>
      <section className="main__whats-different">
        <h2>What’s different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. 
        </p>
        <Card 
          number="01"
          title="Track company-wide progress"
          description="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
        />
        <Card 
          number="02"
          title="Advanced built-in reports"
          description="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
        />
        <Card 
          number="03"
          title="Everything you need in one place"
          description="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
        />
      </section>
      <section className="opinions">
      <h2>What they’ve said</h2>
        <Opinion 
          image={anisha}
          name="Anisha Li"
          blockquote="Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
        />
        <Opinion 
          image={ali}
          name="Ali Bravo"
          blockquote="We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
        />
        <Opinion 
          image={richard}
          name="Richard Watts"
          blockquote="Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"
        />
        <Opinion 
          image={shanai}
          name="Shanai Gough"
          blockquote="Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
        />
      </section>
        <div className="move-slider">
          <div className="circles" />
          <div className="circles" />
          <div className="circles" />
          <div className="circles" />
        </div>
        <Button />
      <section className="simplify__work">
        <h2>Simplify how your team works today.</h2>
        <button className="simplify__work-button">Get Started</button>
      </section>
    </main>
  );
}

export default Main;