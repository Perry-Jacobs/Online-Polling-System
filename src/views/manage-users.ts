import { HomePage } from "./home.js";

export const ManageUsersPage = () => /*html*/ `
	<section class="bg-zinc-100 px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
		<div class="mx-auto max-w-7xl">
			<div class="flex flex-col gap-6 border-b border-zinc-200 pb-8 md:flex-row md:items-end md:justify-between">
				<div>
					<p class="font-sans text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">Administration</p>
					<h1 class="mt-3 text-5xl font-bold leading-none tracking-tighter text-zinc-900 sm:text-6xl">Manage users</h1>
					<p class="mt-4 max-w-xl font-sans text-sm leading-6 text-zinc-600">Review account access, activity, and roles across the SecurePoll community.</p>
				</div>
				<button class="inline-flex items-center gap-2 self-start rounded-lg bg-indigo-600 px-4 py-2.5 font-sans text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 md:self-auto"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>Invite user</button>
			</div>

			<div class="mt-8 grid gap-4 sm:grid-cols-3">
				<div class="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"><p class="font-sans text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Total users</p><p class="mt-3 text-3xl font-bold tracking-tight text-zinc-900">2,847</p><p class="mt-1 font-sans text-xs text-emerald-600">+124 this month</p></div>
				<div class="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"><p class="font-sans text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Active today</p><p class="mt-3 text-3xl font-bold tracking-tight text-zinc-900">1,247</p><p class="mt-1 font-sans text-xs text-zinc-500">43.8% of all users</p></div>
				<div class="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"><p class="font-sans text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Pending access</p><p class="mt-3 text-3xl font-bold tracking-tight text-zinc-900">18</p><p class="mt-1 font-sans text-xs text-amber-600">Needs review</p></div>
			</div>

			<div class="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
				<div class="flex flex-col gap-4 border-b border-zinc-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
					<div>
						<h2 class="font-bold text-zinc-900">Community members</h2>
						<p class="mt-1 font-sans text-xs text-zinc-500">Recently active accounts</p>
					</div>
					<!-- FIXED: Search input with magnifier icon properly positioned -->
					<label class="relative block w-full sm:w-64">
						<span class="sr-only">Search users</span>
						<input 
							class="w-full rounded-lg border border-zinc-300 bg-zinc-50 py-2.5 pl-9 pr-4 font-sans text-sm outline-none transition focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10" 
							type="search" 
							placeholder="Search users"
						/>
						<svg class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m1.35-5.15a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"/>
						</svg>
					</label>
				</div>
				<div class="overflow-x-auto"><table class="w-full min-w-160 text-left"><thead class="bg-zinc-50 font-sans text-[11px] uppercase tracking-[0.14em] text-zinc-500"><tr><th class="px-6 py-4 font-bold">User</th><th class="px-6 py-4 font-bold">Role</th><th class="px-6 py-4 font-bold">Status</th><th class="px-6 py-4 font-bold">Joined</th><th class="px-6 py-4"></th></tr></thead><tbody class="divide-y divide-zinc-100 font-sans text-sm">
					<tr>
						<td class="px-6 py-4"><div class="flex items-center gap-3"><span class="grid h-9 w-9 place-items-center rounded-full bg-indigo-100 font-bold text-indigo-700">JD</span><div><p class="font-bold text-zinc-900">Jordan Davis</p><p class="text-xs text-zinc-500">jordan@example.com</p></div></div></td>
						<td class="px-6 py-4 text-zinc-600">Member</td>
						<td class="px-6 py-4"><span class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Active</span></td>
						<td class="px-6 py-4 text-zinc-500">Today</td>
						<td class="px-6 py-4 text-right">
							<button class="inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-900" aria-label="Open Jordan Davis actions">
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<circle cx="12" cy="5" r="2"/>
									<circle cx="12" cy="12" r="2"/>
									<circle cx="12" cy="19" r="2"/>
								</svg>
							</button>
						</td>
					</tr>
					<tr>
						<td class="px-6 py-4"><div class="flex items-center gap-3"><span class="grid h-9 w-9 place-items-center rounded-full bg-amber-100 font-bold text-amber-700">AM</span><div><p class="font-bold text-zinc-900">Alex Morgan</p><p class="text-xs text-zinc-500">alex@example.com</p></div></div></td>
						<td class="px-6 py-4 text-zinc-600">Moderator</td>
						<td class="px-6 py-4"><span class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Active</span></td>
						<td class="px-6 py-4 text-zinc-500">Yesterday</td>
						<td class="px-6 py-4 text-right">
							<button class="inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-900" aria-label="Open Alex Morgan actions">
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<circle cx="12" cy="5" r="2"/>
									<circle cx="12" cy="12" r="2"/>
									<circle cx="12" cy="19" r="2"/>
								</svg>
							</button>
						</td>
					</tr>
					<tr>
						<td class="px-6 py-4"><div class="flex items-center gap-3"><span class="grid h-9 w-9 place-items-center rounded-full bg-rose-100 font-bold text-rose-700">SK</span><div><p class="font-bold text-zinc-900">Sam Kim</p><p class="text-xs text-zinc-500">sam@example.com</p></div></div></td>
						<td class="px-6 py-4 text-zinc-600">Member</td>
						<td class="px-6 py-4"><span class="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700"><span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>Pending</span></td>
						<td class="px-6 py-4 text-zinc-500">May 12</td>
						<td class="px-6 py-4 text-right">
							<button class="inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-900" aria-label="Open Sam Kim actions">
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<circle cx="12" cy="5" r="2"/>
									<circle cx="12" cy="12" r="2"/>
									<circle cx="12" cy="19" r="2"/>
								</svg>
							</button>
						</td>
					</tr>
				</tbody></table></div>
			</div>
		</div>
	</section>
`;

export const ManageUsersDocument = () => HomePage(ManageUsersPage(), "users");