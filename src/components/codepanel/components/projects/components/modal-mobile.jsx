import React from "react";

import ProjectsList from "./projects-list";

const ModalMobile = ({ closeSidebar }) => {
  return  (
    <div style={{ width: "100%", height: "100%", overflowY: "scroll" }}>
      <ProjectsList closeSidebar={closeSidebar}/>
    </div>
  )
}

export default ModalMobile;
