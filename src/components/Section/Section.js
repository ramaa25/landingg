import React, { useEffect } from 'react';

const Section = ({children, header, className}) => {

    useEffect(() => {
        window.addEventListener("scroll", scrollReveal);
        return () => window.removeEventListener("scroll", scrollReveal);
    }, [])
    
    return (
        <div className={`p-10 px-10 md:px-20 pt-0 relative reveal ${className}`}>
            {header}
            {children}
        </div>
    )
}

const scrollReveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

export default Section;