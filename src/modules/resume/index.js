'use strict';

import base from '../base';
import routeConfig from './routeConfig.js';
import './resume.less';

export default angular.module('resume', ['ui.router', base])
    .config(routeConfig)
    .run(function (navigationRegistrar) {
        navigationRegistrar.addNavItem({name: 'resume', sref: 'resume'});
    })
    .name;
