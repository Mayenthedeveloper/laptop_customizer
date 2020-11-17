import React from "react";
import slugify from 'slugify';
import FeatureOption from '../FeatureOption/FeatureOption';
import FEATURES from '../FEATURES';

function Features(props){
    
    const features = Object.keys(FEATURES).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = FEATURES[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));

          return <FeatureOption 
                   featureHash={featureHash}
                   options={options}
                   itemHash={itemHash}
                   selected={props.selected}
                   USCurrencyFormat={props.USCurrencyFormat}
                   updateFeature={props.updateFeature}
                   item={item}
                   feature={feature}
                 />
        });
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });

    return(
        <>
        {features}
        </>
    )
}

export default Features;