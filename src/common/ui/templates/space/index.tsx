<<<<<<< HEAD
import React, { ReactElement } from 'react';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
=======

>>>>>>> ac32542 (rebased to include Fidget Sandbox)

type SpaceArgs = {
  config: {
    fidgetConfigs: {
      [key: string]: any
    }
    layoutID: string;
    layoutConfig: {
      [key: string]: any
    }
<<<<<<< HEAD
  };
  isEditable: boolean;
  children: ReactElement;
} 

const ReactGridLayout = WidthProvider(RGL);

export default function Space({ config, isEditable, children }: SpaceArgs){

  function generateDOM() {    
    return _.map(_.range(config.layoutConfig.items), function(i) {
      return (
        <div key={i} data-grid={config.fidgetConfigs[i]} className="overflow-hidden rounded-md flex justify-center items-center">
          {config.fidgetConfigs[i].f}
        </div>
      );
    });
  }

  function onLayoutChange(layout) {
    config.layoutConfig.onLayoutChange(layout);
  }

  return (
    <div className="m-4">
      <ReactGridLayout onLayoutChange={onLayoutChange} {...config.layoutConfig}>
        <div key={0} data-grid={config.fidgetConfigs[0]} className="overflow-hidden rounded-md flex justify-center items-center">
          {children}
        </div>
        {generateDOM()}
      </ReactGridLayout>
    </div>
  );
}
=======
    layoutID: string;
  };
  isEditable: boolean;
}

const Space = ({ config, isEditable }: SpaceArgs) => {
  return (
    <>
      
    </>
  );
};

export default Space;
>>>>>>> ac32542 (rebased to include Fidget Sandbox)
