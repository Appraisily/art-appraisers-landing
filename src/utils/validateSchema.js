#!/usr/bin/env node

/**
 * Esta herramienta permite validar esquemas de datos estructurados utilizando
 * la API de Google Rich Results antes de implementarlos en producción.
 * 
 * Para usar:
 * 1. Compilar el proyecto: npm run build
 * 2. Iniciar el servidor local: npx serve dist
 * 3. Ejecutar: node validateSchema.js http://localhost:3000/art-appraiser
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

// Obtener el directorio actual en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URL a validar (desde argumentos de línea de comandos)
const urlToValidate = process.argv[2];

if (!urlToValidate) {
  console.error('Por favor proporciona una URL para validar');
  console.error('Ejemplo: node validateSchema.js http://localhost:3000/art-appraiser');
  process.exit(1);
}

console.log(`Validando esquemas de datos estructurados para: ${urlToValidate}`);

// Parámetros para la API de Google Rich Results
const apiUrl = 'https://search.google.com/test/rich-results/api/validate';
const requestData = JSON.stringify({
  url: urlToValidate
});

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': requestData.length,
  }
};

// Función para hacer la solicitud a la API
const validateSchema = () => {
  const req = https.request(apiUrl, options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const results = JSON.parse(data);
        
        // Procesar resultados
        if (results.errors && results.errors.length > 0) {
          console.log('\nERRORES ENCONTRADOS:');
          results.errors.forEach((error, i) => {
            console.log(`\n--- Error ${i + 1} ---`);
            console.log(`Tipo: ${error.type}`);
            console.log(`Mensaje: ${error.message}`);
            if (error.lineNumber) console.log(`Línea: ${error.lineNumber}`);
          });
        } else {
          console.log('\n✅ No se encontraron errores en el schema.');
        }
        
        if (results.warnings && results.warnings.length > 0) {
          console.log('\nADVERTENCIAS:');
          results.warnings.forEach((warning, i) => {
            console.log(`\n--- Advertencia ${i + 1} ---`);
            console.log(`Tipo: ${warning.type}`);
            console.log(`Mensaje: ${warning.message}`);
            if (warning.lineNumber) console.log(`Línea: ${warning.lineNumber}`);
          });
        } else {
          console.log('\n✅ No se encontraron advertencias en el schema.');
        }
        
        if (results.schemaTypes && results.schemaTypes.length > 0) {
          console.log('\nTIPOS DE SCHEMA DETECTADOS:');
          results.schemaTypes.forEach(type => {
            console.log(`- ${type}`);
          });
        }
        
        // Guardar resultados detallados para revisión
        const resultFilePath = path.join(__dirname, 'schema-validation-results.json');
        fs.writeFileSync(resultFilePath, JSON.stringify(results, null, 2));
        console.log(`\nResultados detallados guardados en: ${resultFilePath}`);
        
        // Abrir herramienta de validación en el navegador para revisión visual
        console.log('\nAbriendo herramienta de validación en el navegador...');
        const validatorUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(urlToValidate)}`;
        
        // Detectar sistema operativo y abrir navegador
        const openCommand = process.platform === 'win32' 
          ? `start ${validatorUrl}`
          : process.platform === 'darwin' 
            ? `open ${validatorUrl}` 
            : `xdg-open ${validatorUrl}`;
            
        exec(openCommand);
        
      } catch (error) {
        console.error('Error al procesar resultados:', error);
      }
    });
  });
  
  req.on('error', (error) => {
    console.error('Error en la solicitud:', error);
  });
  
  req.write(requestData);
  req.end();
};

// Ejecutar validación
validateSchema(); 