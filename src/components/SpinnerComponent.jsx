import { Spinner } from "@nextui-org/react";
import React from "react";

function SpinnerComponent() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Spinner color="primary" label="Loading..." />
    </div>
  );
}

export default SpinnerComponent;
