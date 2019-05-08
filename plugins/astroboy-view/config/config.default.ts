import { IAstroboyPluginConfigMixins } from '../../../definitions/plugins';

import * as path from 'path';

const config: (app: any) => IAstroboyPluginConfigMixins = app => {
  return {
    view: {
      root: path.join(app.ROOT_PATH, 'app/views'),
      cache: true,
      defaultExtension: '.html',
      defaultViewEngine: '',
      mapping: {},
    },
  };
};

export = config;
