import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes:true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? files(`${dir}/${e.name}`) : [`${dir}/${e.name}`]))).flat();
}
const sources = await Promise.all((await files('src')).filter(f=>f.endsWith('.tsx')).map(f=>readFile(f,'utf8')));
const ids = [...new Set(sources.flatMap(s=>s.match(/photo-\d+-[a-f\d]+/g)||[]))];
await mkdir('public/images', { recursive:true });
for(let i=0;i<ids.length;i+=4){
  await Promise.all(ids.slice(i,i+4).map(async id=>{
    const response = await fetch(`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`);
    if(!response.ok) throw new Error(`Image ${id}: ${response.status}`);
    await writeFile(`public/images/${id}.jpg`,new Uint8Array(await response.arrayBuffer()));
    console.log(`Saved ${id}`);
  }));
}
console.log(`Downloaded ${ids.length} illustrative Unsplash photographs.`);
