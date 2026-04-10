const { execSync } = require('child_process');
require('dotenv').config({ path: '.env.test', override: true });

const args = process.argv.slice(2).join(' ');
execSync(`npx prisma ${args}`, { stdio: 'inherit', env: process.env });
