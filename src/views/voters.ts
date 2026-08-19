import { HomePage } from "./home.js";

export const VotersPage = () => /*html*/ `
	<section class="bg-zinc-100 px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
		<div class="mx-auto max-w-7xl">
			<div class="flex flex-col gap-6 border-b border-zinc-200 pb-8 md:flex-row md:items-end md:justify-between">
				<div>
					<p class="font-sans text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">The people behind the numbers</p>
					<h1 class="mt-3 text-5xl font-bold leading-none tracking-tighter text-zinc-900 sm:text-6xl">Voters</h1>
					<p class="mt-4 max-w-xl font-sans text-sm leading-6 text-zinc-600">A snapshot of the people making their voices count across SecurePoll.</p>
				</div>
				<div class="flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 font-sans text-xs font-bold text-zinc-700"><span class="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>1,247 online now</div>
			</div>

			<div class="mt-8 grid gap-4 sm:grid-cols-3">
				<div class="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"><p class="font-sans text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Registered voters</p><p class="mt-3 text-3xl font-bold tracking-tight text-zinc-900">8,492</p><p class="mt-1 font-sans text-xs text-emerald-600">+326 this month</p></div>
				<div class="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"><p class="font-sans text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Active this week</p><p class="mt-3 text-3xl font-bold tracking-tight text-zinc-900">3,816</p><p class="mt-1 font-sans text-xs text-indigo-600">45% of the community</p></div>
				<div class="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"><p class="font-sans text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Average participation</p><p class="mt-3 text-3xl font-bold tracking-tight text-zinc-900">76%</p><p class="mt-1 font-sans text-xs text-zinc-500">Across live polls</p></div>
			</div>

			<div class="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
				<section class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
					<div class="flex items-center justify-between"><div><p class="font-sans text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Recent activity</p><h2 class="mt-2 text-2xl font-bold tracking-tight text-zinc-900">People in the room</h2></div><span class="rounded-full bg-zinc-100 px-3 py-1 font-sans text-xs font-bold text-zinc-500">Live feed</span></div>
					<div class="mt-7 divide-y divide-zinc-100">
						<div class="flex items-center gap-4 py-4 first:pt-0"><span class="grid h-10 w-10 place-items-center rounded-full bg-indigo-100 font-bold text-indigo-700">AM</span><div class="min-w-0 flex-1"><p class="font-sans text-sm font-bold text-zinc-900">Amina M.</p><p class="font-sans text-xs text-zinc-500">Voted in City life</p></div><span class="font-sans text-xs text-zinc-400">Just now</span></div>
						<div class="flex items-center gap-4 py-4"><span class="grid h-10 w-10 place-items-center rounded-full bg-amber-100 font-bold text-amber-700">JL</span><div class="min-w-0 flex-1"><p class="font-sans text-sm font-bold text-zinc-900">Jordan L.</p><p class="font-sans text-xs text-zinc-500">Voted in Workplace</p></div><span class="font-sans text-xs text-zinc-400">2 min ago</span></div>
						<div class="flex items-center gap-4 py-4"><span class="grid h-10 w-10 place-items-center rounded-full bg-rose-100 font-bold text-rose-700">SK</span><div class="min-w-0 flex-1"><p class="font-sans text-sm font-bold text-zinc-900">Sam K.</p><p class="font-sans text-xs text-zinc-500">Voted in Culture</p></div><span class="font-sans text-xs text-zinc-400">4 min ago</span></div>
						<div class="flex items-center gap-4 py-4 last:pb-0"><span class="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 font-bold text-emerald-700">RN</span><div class="min-w-0 flex-1"><p class="font-sans text-sm font-bold text-zinc-900">Riley N.</p><p class="font-sans text-xs text-zinc-500">Joined the community</p></div><span class="font-sans text-xs text-zinc-400">7 min ago</span></div>
					</div>
				</section>

				<aside class="rounded-2xl bg-indigo-600 p-6 text-white shadow-xl shadow-indigo-900/10 sm:p-8"><p class="font-sans text-xs font-bold uppercase tracking-[0.18em] text-indigo-100">Participation pulse</p><h2 class="mt-4 text-3xl font-bold leading-tight tracking-tight">The room is listening.</h2><p class="mt-4 font-sans text-sm leading-6 text-indigo-100">People are showing up most strongly for questions about city life and community.</p><div class="mt-8 space-y-4 font-sans text-sm"><div><div class="mb-2 flex justify-between"><span>City life</span><span class="font-bold">88%</span></div><div class="h-2 rounded-full bg-white/20"><div class="h-2 w-[88%] rounded-full bg-white"></div></div></div><div><div class="mb-2 flex justify-between"><span>Workplace</span><span class="font-bold">72%</span></div><div class="h-2 rounded-full bg-white/20"><div class="h-2 w-[72%] rounded-full bg-white"></div></div></div><div><div class="mb-2 flex justify-between"><span>Culture</span><span class="font-bold">64%</span></div><div class="h-2 rounded-full bg-white/20"><div class="h-2 w-[64%] rounded-full bg-white"></div></div></div></div></aside>
			</div>
		</div>
	</section>
`;

export const VotersDocument = () => HomePage(VotersPage(), "voters");
