const moduleA = require("./src/test");


require("./src/assets/css/normal.css");
require("./src/assets/css/style.less");

document.writeln('<h1>'+moduleA.name+'</h1>');
document.writeln('<h1>'+moduleA.age+'</h1>');
document.writeln('<h1>'+moduleA.sex+'</h1>');
