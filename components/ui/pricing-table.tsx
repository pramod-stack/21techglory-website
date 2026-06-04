import React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon, LucideIcon, MinusIcon } from 'lucide-react';
import { Badge } from './badge';

function PricingTable({ className, ...props }: React.ComponentProps<'table'>) {
	return (
		<div
			data-slot="table-container"
			className="relative w-full overflow-x-auto"
		>
			<table className={cn('w-full text-sm', className)} {...props} />
		</div>
	);
}

function PricingTableHeader({ ...props }: React.ComponentProps<'thead'>) {
	return <thead data-slot="table-header" {...props} />;
}

function PricingTableBody({
	className,
	...props
}: React.ComponentProps<'tbody'>) {
	return (
		<tbody
			data-slot="table-body"
			className={cn('[&_tr]:divide-x [&_tr]:border-b', className)}
			{...props}
		/>
	);
}

function PricingTableRow({ className, ...props }: React.ComponentProps<'tr'>) {
	return <tr data-slot="table-row" className={className} {...props} />;
}

function PricingTableCell({
	className,
	children,
	...props
}: React.ComponentProps<'td'> & { children?: boolean | string | React.ReactNode }) {
	return (
		<td
			data-slot="table-cell"
			className={cn('p-4 align-middle whitespace-nowrap text-center', className)}
			{...props}
		>
			{children === true ? (
				<CheckIcon aria-hidden="true" className="size-4 mx-auto text-cyan-400" />
			) : children === false ? (
				<MinusIcon
					aria-hidden="true"
					className="text-gray-600 size-4 mx-auto"
				/>
			) : (
				children
			)}
		</td>
	);
}

function PricingTableHead({ className, ...props }: React.ComponentProps<'th'>) {
	return (
		<th
			data-slot="table-head"
			className={cn(
				'p-4 text-left align-middle font-medium whitespace-nowrap',
				className,
			)}
			{...props}
		/>
	);
}

function PricingTablePlan({
	name,
	badge,
	price,
	compareAt,
	icon: Icon,
	children,
	className,
	...props
}: React.ComponentProps<'div'> & PricingPlanType) {
	return (
		<div
			className={cn(
				'bg-background supports-[backdrop-filter]:bg-background/40 relative h-full overflow-hidden rounded-xl border p-6 font-normal backdrop-blur-xs flex flex-col',
				className,
			)}
			{...props}
		>
			<div className="flex items-center gap-2 mb-4">
				<div className="flex items-center justify-center rounded-full border border-white/20 p-2 bg-white/5">
					{Icon && <Icon className="h-4 w-4 text-white" />}
				</div>
				<h3 className="text-gray-300 font-mono text-sm uppercase tracking-wider">{name}</h3>
				<Badge
					variant="secondary"
					className="ml-auto rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-normal text-gray-300"
				>
					{badge}
				</Badge>
			</div>

			<div className="mt-2 mb-6 flex items-baseline gap-2">
				<span className="text-4xl font-bold text-white">{price}</span>
				{compareAt && (
					<span className="text-gray-500 text-sm line-through">
						{compareAt}
					</span>
				)}
			</div>
			<div className="relative z-10 mt-auto">{children}</div>
		</div>
	);
}

type PricingPlanType = {
	name: string;
	icon: LucideIcon;
	badge: string;
	price: string;
	compareAt?: string;
};

type FeatureValue = boolean | string | React.ReactNode;

type FeatureItem = {
	label: string;
	values: FeatureValue[];
};

export {
	type PricingPlanType,
	type FeatureValue,
	type FeatureItem,
	PricingTable,
	PricingTableHeader,
	PricingTableBody,
	PricingTableRow,
	PricingTableHead,
	PricingTableCell,
	PricingTablePlan,
};
