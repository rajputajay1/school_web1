import type { ComponentProps } from 'react';
export function Table(props: ComponentProps<'table'>) { return <div className="w-full overflow-auto"><table className="w-full text-left text-sm" {...props}/></div>; }
export function TableHeader(props: ComponentProps<'thead'>) { return <thead className="bg-stone-50 text-xs uppercase tracking-wider text-slate-500" {...props}/>; }
export function TableBody(props: ComponentProps<'tbody'>) { return <tbody className="divide-y divide-stone-200" {...props}/>; }
export function TableRow(props: ComponentProps<'tr'>) { return <tr className="border-b border-stone-200/70" {...props}/>; }
export function TableHead(props: ComponentProps<'th'>) { return <th className="whitespace-nowrap px-5 py-4 font-medium" {...props}/>; }
export function TableCell(props: ComponentProps<'td'>) { return <td className="px-5 py-5" {...props}/>; }
