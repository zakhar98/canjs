/*!
 * CanJS - 2.3.21
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Sat, 19 Mar 2016 01:24:17 GMT
 * Licensed MIT
 */

/*can@2.3.21#observe/observe*/
var can = require('../util/util.js');
require('../map/map.js');
require('../list/list.js');
require('../compute/compute.js');
can.Observe = can.Map;
can.Observe.startBatch = can.batch.start;
can.Observe.stopBatch = can.batch.stop;
can.Observe.triggerBatch = can.batch.trigger;
module.exports = can;