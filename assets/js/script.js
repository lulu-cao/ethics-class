// select the div with the id root
var root = $('#root');

// create a h1 element
var title = $('<h1>');

title.text('PHIL203 Ethics');

var p = $('<p>');

p.text('This course is designed to introduce the student to the discipline of ethics and the philosophical questions and issues that arise from within it. It will include a historical overview of several traditional theories of ethics and approaches to ethical decision-making, an examination of the role of reason and logic in ethical analysis, and a consideration of some of the many ethical dilemmas and problems which confront our society today.');

title.append('<p>' + p.text + '</p>');
root.append('<h1>' + title.text + '</h1>');