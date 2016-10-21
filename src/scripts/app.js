'use strict';

import dependencies from './globalDependencies.js';
import config from './globalConfig.js';
import constants from './globalConstants.js';
import base from '../modules/base';
import home from '../modules/home';
import resume from '../modules/resume';

export default angular.module('app', [base, home, resume].concat(dependencies))
    .constant('constants', constants)
    .config(config)
    .name;
