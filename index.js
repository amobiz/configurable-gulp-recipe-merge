'use strict';

var helper = require('gulp-ccr-stream-helper')('merge');

var schema = {
	title: 'merge',
	description: 'Merge multiple streams into one interleaved stream.',
	type: 'object',
	properties: {
	}
};

function merge() {
	// lazy loading required modules.
	var mergeStream = require('merge-stream');

	var gulp = this.gulp;
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
			config: {},
			upstream: upstream
		};
		return helper.runTask(context, task);
	}
}

module.exports = merge;
module.exports.schema = schema;
module.exports.type = 'stream';
