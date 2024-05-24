import React from "react";
import Space, { SpaceConfig } from "@/common/ui/templates/Space";
import Toolbar from "@/common/ui/molecules/Toolbar";
import { useState } from "react";
import {
  GridLayout,
  ResizeDirections,
} from "@/fidgets/layout/Grid";
import { LayoutFidgetDetails } from "@/common/fidgets";

export default function Homebase() {
  const [editMode, setMode] = useState(false);

  const availableHandles = [
    "s",
    "w",
    "e",
    "n",
    "sw",
    "nw",
    "se",
    "ne",
  ] as ResizeDirections[];
  const defaultLayoutData = [
    {
      i: "gallery",
      resizeHandles: availableHandles,
      x: 0,
      y: 0,
      w: 6,
      minW: 1,
      maxW: 12,
      h: 10,
      minH: 1,
      maxH: 12,
    },
    {
      i: "frame",
      resizeHandles: availableHandles,
      x: 6,
      y: 0,
      w: 3,
      minW: 2,
      maxW: 4,
      h: 6,
      minH: 3,
      maxH: 12,
    },
  ];

  const fidgets = {
    gallery: {
      fidgetName: "gallery",
      id: "gallery",
      instanceConfig: {
        editable: false,
        settings: {
          imageUrl: "https://storage.googleapis.com/papyrus_images/d467b07030969fab95a8f44b1de596ab.png",
        },
      },
    },  
    frame: {
      fidgetName: "frame",
      id: "frame",
      instanceConfig: {
        settings: {
          url: "https://altumbase.com/degen/4888/dIVWKaIQZR",
        },
        editable: false,
      },
    },
  };

  const gridDetails: GridLayout = {
    isDraggable: false,
    isResizable: false,
    items: 4,
    cols: 12,
    rowHeight: 70,
    onLayoutChange: () => {},
    onDrop: () => {},
    // This turns off compaction so you can place items wherever.
    compactType: null,
    // This turns off rearrangement so items will not be pushed arround.
    preventCollision: true,
    maxRows: 9,
    layout: defaultLayoutData,
  };
  const layoutID = "";
  const layoutDetails: LayoutFidgetDetails = {
    layoutConfig: gridDetails,
    layoutFidget: "grid",
  };

  const [spaceConfig, setSpaceConfig] = useState<SpaceConfig>({
    layoutID,
    layoutDetails,
    fidgetConfigs: fidgets,
  });

  async function saveConfig(config: SpaceConfig) {
    setSpaceConfig(config);
    return true;
  }

  const switchMode = () => {
    setMode(!editMode);
  }

  return (
    <div>
      <div
        className={
          editMode
            ? "edit-grid absolute inset-0 z-0"
            : "no-edit-grid  absolute inset-0 z-0"
        }
      />
      <Toolbar editMode={editMode} switchMode={switchMode}/>
      <Space
        config={spaceConfig}
        isEditable={editMode}
        saveConfig={saveConfig}
      />
    </div>
  );
}
