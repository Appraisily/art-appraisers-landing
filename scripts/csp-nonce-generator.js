import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

// Generate a random nonce
const generateNonce = () => {
  return crypto.randomBytes(16).toString('base64');
};

// The nonce to use in this build
const nonce = generateNonce();
console.log(`Generated CSP nonce: ${nonce}`);

// Path to the built index.html
const indexPath = path.resolve('dist', 'index.html');

try {
  // Read the built index.html file
  let htmlContent = fs.readFileSync(indexPath, 'utf8');
  
  // Replace all instances of RANDOMNONCE with the actual nonce
  htmlContent = htmlContent.replace(/RANDOMNONCE/g, nonce);
  
  // Write the updated content back to index.html
  fs.writeFileSync(indexPath, htmlContent);
  
  console.log('CSP nonces successfully applied to index.html');
} catch (error) {
  console.error('Error applying CSP nonces:', error);
  process.exit(1);
} 