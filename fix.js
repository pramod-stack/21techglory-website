const fs = require('fs');
const path = require('path');

const dir = 'c:\\\\Users\\\\pramo\\\\OneDrive\\\\Documents\\\\21techglory 2.0\\\\21techglory\\\\components\\\\ui';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace \` with `
    content = content.replace(/\\`/g, '`');
    // Replace \${ with ${
    content = content.replace(/\\\${/g, '${');
    
    fs.writeFileSync(filePath, content);
    console.log('Fixed', file);
  }
});
