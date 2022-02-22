import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DropDownMenu from './DropDownMenu';
import SpecGrid from './SpecGrid';

function TechSpecs() {
  const [specs, setSpecs] = useState(null);
  const [activeSpec, setActiveSpec] = useState(0);
  useEffect(() => {
    let componentMounted = true;
    let getSpecs = async () => {
      try {
        const URL = 'https://cwsmgmt.corsair.com/PowerSupplies.json';
        const { data } = await axios.get(URL);
        if (componentMounted) setSpecs(data);
        console.log('RESULTS', data[0]);
      } catch (error) {
        return new Error(error);
      }
    };
    getSpecs();
    return () => (componentMounted = false);
  }, []);

  console.log('ACTIVE', activeSpec);
  return (
    <div className="p-24 text-gray-100">
      <div>
        <h1 className="text-5xl font-bold font-bebas"> TECH SPECS</h1>
      </div>
      <div>
        {specs && (
          <DropDownMenu
            specs={specs}
            activeSpec={activeSpec}
            setActiveSpec={setActiveSpec}
          />
        )}
      </div>
      {specs && <SpecGrid displaySpec={specs[activeSpec]} />}
    </div>
  );
}

export default TechSpecs;
