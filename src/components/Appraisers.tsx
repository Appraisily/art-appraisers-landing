"use client";

import React, { useState } from 'react';

function Appraisers() {
  const [popover, setPopover] = useState<{
    isOpen: boolean;
    content: string;
    position: { x: number; y: number };
  }>({
    isOpen: false,
    content: '',
    position: { x: 0, y: 0 }
  });

  // ... rest of the component code ...

  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}

export default Appraisers;