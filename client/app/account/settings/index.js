'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('angularFullstackExampleApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
