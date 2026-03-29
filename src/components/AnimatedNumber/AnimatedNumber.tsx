import React from 'react';
import CountUpLib from 'react-countup';

const CountUp: React.FC<{ end: number }> = ({ end }) => {
  const CountUpComponent = (CountUpLib as any).default || CountUpLib;

  return (
    <CountUpComponent
      start={0}
      end={end}
      duration={3}
      enableScrollSpy
      scrollSpyOnce
    >
      {({ countUpRef }: { countUpRef: React.RefObject<HTMLSpanElement> }) => (
        <span ref={countUpRef} />
      )}
    </CountUpComponent>
  );
};

export default CountUp;