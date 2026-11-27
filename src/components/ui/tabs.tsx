import * as React from 'react';
import * as Primitive from '@radix-ui/react-tabs';
import { cn } from '../../lib/utils';
export const Tabs = Primitive.Root;
export function TabsList({ className, ...props }: React.ComponentPropsWithoutRef<typeof Primitive.List>) { return <Primitive.List className={cn('flex flex-wrap gap-2', className)} {...props} />; }
export function TabsTrigger({ className, ...props }: React.ComponentPropsWithoutRef<typeof Primitive.Trigger>) { return <Primitive.Trigger className={cn('rounded-md px-5 py-3 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 data-[state=active]:bg-slate-900 data-[state=active]:text-white', className)} {...props} />; }
export function TabsContent({ className, ...props }: React.ComponentPropsWithoutRef<typeof Primitive.Content>) { return <Primitive.Content className={cn('mt-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600', className)} {...props} />; }
