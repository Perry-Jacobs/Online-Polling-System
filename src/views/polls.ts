import { HomePage } from "./home.js";

export const PollsPage = () => /*html*/ `
	<section class="bg-zinc-100 px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
		<div class="mx-auto max-w-7xl">
			<div class="flex flex-col gap-6 border-b border-zinc-200 pb-8 md:flex-row md:items-end md:justify-between">
				<div>
					<p class="font-sans text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">The public room</p>
					<h1 class="mt-3 text-5xl font-bold leading-none tracking-tighter text-zinc-900 sm:text-6xl">Live polls</h1>
					<p class="mt-4 max-w-xl font-sans text-sm leading-6 text-zinc-600">Open questions waiting for your perspective. Vote once, see the room move.</p>
				</div>
				<div class="flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 font-sans text-xs font-bold text-zinc-700"><span class="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>1,247 people online</div>
			</div>

			<div class="mt-8 flex flex-wrap gap-2 font-sans text-sm">
				<button class="rounded-full bg-zinc-900 px-4 py-2 font-bold text-white">All polls</button>
				<button class="rounded-full border border-zinc-300 bg-white px-4 py-2 text-zinc-600 transition hover:border-indigo-400 hover:text-indigo-600">City life</button>
				<button class="rounded-full border border-zinc-300 bg-white px-4 py-2 text-zinc-600 transition hover:border-indigo-400 hover:text-indigo-600">Workplace</button>
				<button class="rounded-full border border-zinc-300 bg-white px-4 py-2 text-zinc-600 transition hover:border-indigo-400 hover:text-indigo-600">Culture</button>
			</div>

			<div class="mt-8 grid gap-5 lg:grid-cols-2">
				<article class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
					<div class="flex items-center justify-between font-sans text-xs"><span class="rounded-full bg-indigo-50 px-3 py-1 font-bold text-indigo-600">City life</span><span class="text-zinc-500">8 min left</span></div>
					<h2 class="mt-6 text-2xl font-bold leading-tight tracking-tight text-zinc-900">What would improve your daily commute?</h2>
					<p class="mt-2 font-sans text-sm text-zinc-500">1,284 people have voted</p>
					<div class="mt-6 space-y-3 font-sans text-sm">
						<label class="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 transition hover:border-indigo-400 hover:bg-indigo-50"><span class="flex items-center gap-3"><input class="accent-indigo-600" type="radio" name="commute"> More reliable buses</span><span class="text-xs text-zinc-500">38%</span></label>
						<label class="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 transition hover:border-indigo-400 hover:bg-indigo-50"><span class="flex items-center gap-3"><input class="accent-indigo-600" type="radio" name="commute"> Safer bike routes</span><span class="text-xs text-zinc-500">34%</span></label>
						<label class="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 transition hover:border-indigo-400 hover:bg-indigo-50"><span class="flex items-center gap-3"><input class="accent-indigo-600" type="radio" name="commute"> More parking</span><span class="text-xs text-zinc-500">28%</span></label>
					</div>
					<button class="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-3 font-sans text-sm font-bold text-white transition hover:bg-indigo-700">Cast your vote</button>
				</article>

				<article class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
					<div class="flex items-center justify-between font-sans text-xs"><span class="rounded-full bg-amber-50 px-3 py-1 font-bold text-amber-700">Workplace</span><span class="text-zinc-500">21 min left</span></div>
					<h2 class="mt-6 text-2xl font-bold leading-tight tracking-tight text-zinc-900">Which team ritual keeps collaboration strong?</h2>
					<p class="mt-2 font-sans text-sm text-zinc-500">936 people have voted</p>
					<div class="mt-6 space-y-3 font-sans text-sm">
						<label class="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 transition hover:border-indigo-400 hover:bg-indigo-50"><span class="flex items-center gap-3"><input class="accent-indigo-600" type="radio" name="ritual"> Weekly check-ins</span><span class="text-xs text-zinc-500">46%</span></label>
						<label class="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 transition hover:border-indigo-400 hover:bg-indigo-50"><span class="flex items-center gap-3"><input class="accent-indigo-600" type="radio" name="ritual"> Shared focus time</span><span class="text-xs text-zinc-500">31%</span></label>
						<label class="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 transition hover:border-indigo-400 hover:bg-indigo-50"><span class="flex items-center gap-3"><input class="accent-indigo-600" type="radio" name="ritual"> Team retrospectives</span><span class="text-xs text-zinc-500">23%</span></label>
					</div>
					<button class="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-3 font-sans text-sm font-bold text-white transition hover:bg-indigo-700">Cast your vote</button>
				</article>

				<article class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
					<div class="flex items-center justify-between font-sans text-xs"><span class="rounded-full bg-rose-50 px-3 py-1 font-bold text-rose-700">Culture</span><span class="text-zinc-500">42 min left</span></div>
					<h2 class="mt-6 text-2xl font-bold leading-tight tracking-tight text-zinc-900">What deserves a place on this year's reading list?</h2>
					<p class="mt-2 font-sans text-sm text-zinc-500">712 people have voted</p>
					<div class="mt-6 space-y-3 font-sans text-sm">
						<label class="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 transition hover:border-indigo-400 hover:bg-indigo-50"><span class="flex items-center gap-3"><input class="accent-indigo-600" type="radio" name="reading"> A new local author</span><span class="text-xs text-zinc-500">41%</span></label>
						<label class="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 transition hover:border-indigo-400 hover:bg-indigo-50"><span class="flex items-center gap-3"><input class="accent-indigo-600" type="radio" name="reading"> A classic novel</span><span class="text-xs text-zinc-500">35%</span></label>
						<label class="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 font-sans transition hover:border-indigo-400 hover:bg-indigo-50"><span class="flex items-center gap-3"><input class="accent-indigo-600" type="radio" name="reading"> A practical guide</span><span class="text-xs text-zinc-500">24%</span></label>
					</div>
					<button class="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-3 font-sans text-sm font-bold text-white transition hover:bg-indigo-700">Cast your vote</button>
				</article>
			</div>
		</div>
	</section>
`;

export const PollsDocument = () => HomePage(PollsPage(), "polls");
