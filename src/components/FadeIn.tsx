import {useEffect, useRef, useState} from 'react';

const FadeIn = (props: any) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef<any>();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={isVisible ? 'fade-in is-visible' : 'fade-in'}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeIn;
