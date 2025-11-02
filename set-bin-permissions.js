#!/usr/bin/env node
import { chmodSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  const binPath = join(__dirname, 'dist', 'bin.js');
  chmodSync(binPath, 0o755);
  console.log('Set executable permissions on dist/bin.js');
} catch (err) {
  // Silently fail on Windows where this might not be needed
  if (err.code !== 'EPERM' && err.code !== 'ENOENT') {
    console.error('Warning: Could not set permissions:', err.message);
  }
}
