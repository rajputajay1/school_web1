import * as React from 'react';
import * as Primitive from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';
export const Accordion = Primitive.Root;
export function AccordionItem({ children, ...props }: React.ComponentPropsWithoutRef<typeof Primitive.Item>) { return <Primitive.Item className="border-b border-stone-200" {...props}>{children}</Primitive.Item>; }
export function AccordionTrigger({ children }: { children: React.ReactNode }) { return <Primitive.Header><Primitive.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-slate-900 focus-visible:ring-2 focus-visible:ring-amber-600">{children}<Plus size={16} className="shrink-0 transition-transform group-data-[state=open]:rotate-45" /></Primitive.Trigger></Primitive.Header>; }
export function AccordionContent({ children }: { children: React.ReactNode }) { return <Primitive.Content className="pb-5 text-sm leading-7 text-slate-500">{children}</Primitive.Content>; }
