'use strict';

var helper = require('gulp-ccr-stream-helper')('merge');

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

	var gulp = this.gulp;
	var config = this.config;
	var upstream = this.upstream;
	var tasks = this.tasks;

	helper.prerequisite(this, true, 1);

	if (tasks.length === 1) {
		return runTask(tasks[0]);
	}

	return mergeStream(tasks.map(runTask));

	function runTask(task) {
		var context;

		context = {
			gulp: gulp,
			config: config,
			upstream: upstream
		};
		return helper.runTask(context, task);
	}
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
