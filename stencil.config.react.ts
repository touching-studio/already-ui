import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'already-ui',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'already-ui',
      proxiesFile: '../already-ui-react/src/components.ts',
      includeDefineCustomElements: true,
      loaderDir: './loader',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle'
    },
  ],
};

