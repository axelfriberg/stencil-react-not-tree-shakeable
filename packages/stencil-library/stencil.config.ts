import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: '../react-library/src/components/stencil-generated/',
    }),
    // dist-custom-elements output target is required for the React output target
    { type: 'dist-custom-elements', externalRuntime: false },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
