import React from 'react';

function DropDownMenu({ specs, activeSpec, setActiveSpec }) {
  const handleSpecChange = (e) => {
    setActiveSpec(e.target.value);
  };
  return (
    <div className="relative flex md:justify-center">
      <select
        defaultValue={specs[0].name}
        onChange={handleSpecChange}
        className="relative pl-6 pr-4 my-10 z-[0] text-2xl cursor-pointer bg-transparent border-2 h-14 w-72 border-stone-50 text-stone-50 focus:outline-none appearance-none "
      >
        {specs.map((spec, i) => {
          return (
            <option key={i} value={i} className={`relative`}>
              {spec.name}
            </option>
          );
        })}
      </select>
      <svg
        className="absolute left-56 md:left-[68%] sm:left-[70%] top-[3.3rem] hover:cursor-pointer pointer-events-none "
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg>
    </div>
  );
}

export default DropDownMenu;
