import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

const SearchMap = () => {
  const MapEl = useRef(null);

  useEffect(() => {
    loadModules([
      "esri/Map",
      "esri/views/SceneView",
      "esri/widgets/Search",
    ]).then(([Map, SceneView, Search]) => {
      var map = new Map({
        basemap: "satellite",
        ground: "world-elevation",
      });

      var view = new SceneView({
        scale: 123456789,
        container: "viewDiv",
        map: map,
      });

      var searchWidget = new Search({
        view: view,
      });

      // Add the search widget to the top right corner of the view
      view.ui.add(searchWidget, {
        position: "top-right",
      });
    });
  }, []);

  return (
    <>
      <div
        id="viewDiv"
        style={{ height: "100vh", width: "100vw" }}
        ref={MapEl}
      ></div>
    </>
  );
};

export default SearchMap;
