import * as React from 'react';
import * as Primitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
export const Sheet = Primitive.Root;
export const SheetTrigger = Primitive.Trigger;
export const SheetTitle = Primitive.Title;
export const SheetDescription = Primitive.Description;
export function SheetContent({ children }: { children: React.ReactNode }) { return <Primitive.Portal><Primitive.Overlay className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm" /><Primitive.Content className="fixed inset-y-0 right-0 z-50 w-80 max-w-[90vw] border-l border-stone-200 bg-stone-50 p-7 shadow-xl">{children}<Primitive.Close className="absolute right-5 top-6 rounded p-2 focus-visible:ring-2 focus-visible:ring-amber-600"><X size={20}/><span className="sr-only">Close navigation</span></Primitive.Close></Primitive.Content></Primitive.Portal>; }
