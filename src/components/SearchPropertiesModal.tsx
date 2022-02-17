import React from "react";

import { Dialog } from "@mui/material";

interface Props {
  open: boolean;
}

export default function SearchPropertiesModal({ open }: Props) {
  return (
    <Dialog open={open}>
      <div>Test</div>
    </Dialog>
  );
}
