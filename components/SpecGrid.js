import React from 'react';

function SpecGrid({ displaySpec }) {
  let features1 = displaySpec.classifications[1].features;
  let features2 = displaySpec.classifications[0].features;
  return (
    <div className="flex items-start justify-start md:flex-col md:items-center">
      <div className="flex flex-col items-center justify-start flex-1 mr-12 md:m-0">
        {features1.map((feat, ix) => {
          return feat.featureValues.map((value, i) => (
            <>
              <div
                key={value}
                className={`flex justify-start w-full mr-4 py-1 px-4 ${
                  features1[ix + 1]
                    ? 'border-b-2 border-b-stone-800'
                    : 'border-b-2 border-b-transparent'
                }  `}
              >
                <p key={feat.name} className="flex-1 mx-12 text-stone-50">
                  {feat.name}
                </p>
                <p className="flex-1 mx-12">{value.value}</p>
              </div>
            </>
          ));
        })}
      </div>
      <div className="flex flex-col items-center justify-start flex-1 ml-12 md:m-0">
        {features2.map((feat, ix) => {
          return feat.featureValues.map((value, i) => (
            <>
              <div
                key={value}
                className={`flex justify-start w-full py-1 ml-4 px-4 ${
                  features2[ix + 1]
                    ? 'border-b-2 border-b-stone-800'
                    : 'border-b-2 border-b-transparent'
                }  `}
              >
                <p key={feat.name} className="flex-1 text-stone-50">
                  {feat.name}
                </p>
                <div className="flex-1">
                  {value.value.split('|').length < 2 ? (
                    <p>{value.value}</p>
                  ) : (
                    value.value
                      .split('|')
                      .map((multiVal) => <p key={multiVal}>{multiVal}</p>)
                  )}
                </div>
              </div>
            </>
          ));
        })}
      </div>
    </div>
  );
}

export default SpecGrid;
