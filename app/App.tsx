import React, { Suspense } from 'react';
import { ErrorBoundary } from './ErrorBoundary.tsx';
import { ObjectInspector } from 'react-inspector';

export const App = () => {
  return (
    <div>
      <h1>Application</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ErrorBoundary>
          <ObjectInspector data={{"Hello": "World"}} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};
