import React, { lazy, Suspense } from "react";

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...this.props} />
    </Suspense>
  );
};
export default loadable;
