import * as React from 'react';
import * as Primitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
export const Dialog = Primitive.Root;
export const DialogTrigger = Primitive.Trigger;
export const DialogTitle = Primitive.Title;
export const DialogDescription = Primitive.Description;
export const DialogClose = Primitive.Close;
export function DialogContent({ children, className, ...props }: React.ComponentPropsWithoutRef<typeof Primitive.Content>) {
  return <Primitive.Portal><Primitive.Overlay className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-sm" /><Primitive.Content className={cn('fixed left-1/2 top-1/2 z-50 max-h-[90dvh] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-stone-200 bg-white p-6 shadow-xl sm:p-8', className)} {...props}>{children}<Primitive.Close className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-slate-600 hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-amber-600"><X size={18} /><span className="sr-only">Close dialog</span></Primitive.Close></Primitive.Content></Primitive.Portal>;
}
