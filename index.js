'use strict';

var helper = require('gulp-ccr-helper');
var verify = helper.verifyStreamPrerequisite('merge');

/**
 * Recipe:
 * 	Async Streams (from gulp.js cheatsheet p.2)
 *
 * Ingredients:
 * 	merge-stream
 *
 * Note:
 *  Some kind of stream version of gulp.parallel().
 *
 * @config 針對本 task 的 configuration。
 * @tasks 傳入的子 tasks 為 configurableTask，是尚未綁定 config 的 task 形式。
 *
 */
function merge() {
	// lazy loading required modules.
	var mergeStream = require('merge-stream');

	var tasks = this.tasks;
	var runTask = verify(this);

	if (tasks.length === 1) {
		return runTask(tasks[0]);
	}

	return mergeStream(tasks.map(runTask));
}

merge.expose = [];

merge.schema = {
	title: 'merge',
	description: 'Merge multiple streams into one interleaved stream.',
	properties: {
	}
};

merge.type = 'stream';

module.exports = merge;
