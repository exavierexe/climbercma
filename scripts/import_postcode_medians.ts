// scripts/import_postcode_medians.ts
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your CSV file (update this if your file is elsewhere)
const CSV_PATH = path.join(__dirname, 'postcode_medians.csv');

async function main() {
  const csv = fs.readFileSync(CSV_PATH, 'utf8');
  const lines = csv.trim().split('\n');
  let imported = 0;

  for (let i = 1; i < lines.length; i++) { // skip header
    const [postcode, median] = lines[i].split(',');
    if (!postcode || !median) continue;
    try {
      await prisma.postcodeMedianPrice.upsert({
        where: { postcode },
        update: { median: parseInt(median, 10) },
        create: { postcode, median: parseInt(median, 10) },
      });
      imported++;
    } catch (e) {
      console.error(`Failed to import row: ${lines[i]}`);
    }
  }
  console.log(`Imported ${imported} postcode medians.`);
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
