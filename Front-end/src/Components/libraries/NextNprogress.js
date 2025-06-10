// In /app/providers.tsx
'use client';

import { ProgressProvider } from '@bprogress/next/app';

const Providers = ({ children } ) => {
  return (
    <ProgressProvider
      height="3px"
      color="#ff6b00"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default Providers;