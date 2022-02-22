import React, { useState, useRef, useEffect } from 'react';

function NavBar() {
  const panel1 = useRef();
  const panel2 = useRef();
  const panel3 = useRef();
  const panel4 = useRef();
  const panel5 = useRef();
  const panels = { 1: panel1, 2: panel2, 3: panel3, 4: panel4, 5: panel5 };
  const [active, setActive] = useState(panel1);
  //   useEffect(() => {
  //     console.log(active);
  //   }, [active]);

  return (
    <div className="flex items-center justify-center h-24 bg-black ">
      {Object.keys(panels).map((key) => (
        <h3
          key={key}
          ref={panels[key]}
          onClick={() => setActive(panels[key])}
          className={`mx-5  box-border text-2xl font-bold font-bebas ${
            active === panels[key]
              ? 'border-b-4 border-b-yellow-300 text-stone-50 '
              : 'border-b-4 border-b-transparent text-stone-400'
          }  hover: cursor-pointer`}
        >
          <a className="scroll-smooth" href={`#panel${key}`}>
            PANEL {key}
          </a>
        </h3>
      ))}
    </div>
  );
}

export default NavBar;
