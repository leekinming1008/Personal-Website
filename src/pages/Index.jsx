import React, { useEffect, useRef } from 'react';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experiences from '../components/Experiences';

function Index() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((el) => {
        const { top, bottom, height } = el.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        const percentVisible =
          Math.max(0, Math.min(bottom, windowHeight) - Math.max(top, 0)) /
          height;

        const opacity = percentVisible >= 0.5 ? 1 : percentVisible * 2;
        /* eslint-disable-next-line no-param-reassign */
        el.style.opacity = opacity.toFixed(2);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addSectionRef = (ref) => {
    if (ref && !sectionsRef.current.includes(ref)) {
      sectionsRef.current.push(ref);
    }
  };

  return (
    <div className="m-auto max-w-4xl bg-neutral-100 p-4 dark:bg-neutral-900">
      <section ref={addSectionRef}>
        <h1 className="text-primary my-4 text-xl">
          <span aria-hidden="true">&#x2023;</span>
          Experience
        </h1>
        <Experiences />
      </section>
      <section ref={addSectionRef}>
        <h1 className="text-primary my-4 text-xl">
          <span aria-hidden="true">&#x2023;</span>
          Projects
        </h1>
        <Projects />
      </section>
      <section ref={addSectionRef}>
        <h1 className="text-primary my-4 text-xl">
          <span aria-hidden="true">&#x2023;</span>
          Skills
        </h1>
        <Skills />
      </section>
      <section ref={addSectionRef}>
        <h1 className="text-primary my-4 text-xl">
          <span aria-hidden="true">&#x2023;</span>
          Contact
        </h1>
        <Contact />
      </section>
      
    </div>
  );
}

export default Index;
