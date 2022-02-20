import React from 'react';

function SpecGrid({ displaySpec }) {
  return (
    <div className="items-start justify-start lg:flex ">
      <div className="flex flex-col items-center justify-start flex-1">
        {displaySpec.classifications[1].features.map((feat, i) => {
          return feat.featureValues.map((value, i) => (
            <>
              <div className="flex justify-start w-full">
                <p key={i} className="flex-1 mx-12 text-2xl text-red-600">
                  {feat.name}
                </p>
                <p className="flex-1 mx-12">{value.value}</p>
              </div>
            </>
          ));
        })}
      </div>
      <div className="flex flex-col items-center justify-start flex-1">
        {displaySpec.classifications[0].features.map((feat, i) => {
          return feat.featureValues.map((value, i) => (
            <>
              <div className="flex justify-start w-full">
                <p key={i} className="flex-1 text-2xl text-red-600">
                  {feat.name}
                </p>
                <p className="flex-1">{value.value}</p>
              </div>
            </>
          ));
        })}
      </div>
    </div>
  );
}

export default SpecGrid;
