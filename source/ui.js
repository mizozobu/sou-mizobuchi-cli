'use strict';
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: '*Links*'
	},
	{
		label: '  - Website',
		url: 'https://sososowhat.com'
	},
	{
		label: '  - GitHub',
		url: 'https://github.com/mizozobu'
	},
	{
		label: '  - JSON Resume',
		url: 'registry.jsonresume.org/mizozobu'
	},
	{
		label: ''
	},
	{
		label: '*Projects*'
	},
	{
		label: '  - Growi',
		url: 'https://growi.org/'
	},
	{
		label: '  - C#.NET Blog Prototype',
		url: 'https://mycodesnippets20180120082754.azurewebsites.net/'
	},
	{
		label: '  - Salary Prediction',
		url: 'https://whatsyourvalue.azurewebsites.net/'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I’m an ever-learning, ever-progressing developer.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
