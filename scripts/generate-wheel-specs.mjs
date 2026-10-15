import fs from 'node:fs';
import path from 'node:path';

const imageDir = 'public/images/products';
const outputFile = 'src/content/products/specifications.ts';

const pattern =
  /^(\d+)x([\d.]+)J__(\d+x[\d.]+)__ET(-?\d+)__CB([\d.]+)\.webp$/;

const files = fs.readdirSync(imageDir)
  .filter((name) => name.endsWith('.webp'))
  .sort();

const products = [];

for (const file of files) {
  const match = file.match(pattern);
  if (!match) continue;

  const [, diameter, width, pcd, offset, centerBore] = match;

  products.push({
    id: file.replace(/\.webp$/, ''),
    sku: `NPC-SPEC-${String(products.length + 1).padStart(3, '0')}`,
    image: `/images/products/${file}`,
    diameter: Number(diameter),
    width: Number(width),
    pcd,
    offset: Number(offset),
    centerBore: Number(centerBore),
  });
}

const content = `// Generated from wheel image filenames. Do not edit manually.
export const wheelSpecifications = ${JSON.stringify(products, null, 2)} as const;
`;

fs.writeFileSync(outputFile, content);

console.log(`已生成 ${products.length} 条规格产品数据：${outputFile}`);

if (products.length !== 30) {
  console.error('警告：解析数量不是预期的 30 条，请检查图片文件名。');
  process.exitCode = 1;
}
