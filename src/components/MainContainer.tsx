import * as React from "react";

import AppBar from "./AppBar";

export default function MainContainer() {
  const [page, setPage] = React.useState<number>(0);
  return (
    <>
      <AppBar onPageChange={setPage} />
      {page === 0 ? (
        <div style={{ color: "white" }}>home</div>
      ) : page === 1 ? (
        <div style={{ color: "white" }}>Available Properties</div>
      ) : (
        <div style={{ color: "white" }}>FAQ</div>
      )}
    </>
  );
}
