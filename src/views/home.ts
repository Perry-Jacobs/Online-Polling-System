export const HomeContent = () => /*html*/`
	<section class="border-b border-zinc-200 bg-zinc-100 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
		<div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
			<div>
				<p class="font-sans text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">The public room</p>
				<h1 class="mt-5 max-w-3xl text-5xl font-bold leading-[0.95] tracking-tighter text-zinc-900 sm:text-7xl">Your voice belongs in the room.</h1>
				<p class="mt-6 max-w-xl font-sans text-base leading-7 text-zinc-600">Discover active questions, cast a considered vote, and see where the room stands in real time.</p>
				<div class="mt-8 flex flex-wrap items-center gap-3">
					<button class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-sans text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700" hx-get="/login" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/login">
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4m-4-4l4-4m0 0l-4-4m4 4H3"/></svg>
						Join the polls
					</button>
					<a href="/polls" class="rounded-lg border border-zinc-300 bg-white px-5 py-3 font-sans text-sm font-bold text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50" hx-get="/polls" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/polls" @click="currentPage = 'polls'">Browse live polls</a>
				</div>
			</div>
			<div class="relative overflow-hidden rounded-2xl bg-indigo-600 p-7 text-white shadow-xl shadow-indigo-900/10">
				<div class="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-white/20"></div>
				<div class="absolute -bottom-24 -left-10 h-48 w-48 rounded-full border border-white/10"></div>
				<div class="relative">
					<div class="flex items-center justify-between font-sans text-xs font-bold uppercase tracking-[0.16em] text-indigo-100"><span>Live now</span><span class="flex items-center gap-2"><span class="h-2 w-2 animate-pulse rounded-full bg-emerald-300"></span>1,247 online</span></div>
					<p class="mt-12 text-2xl font-bold leading-tight tracking-tight">What should the next community event focus on?</p>
					<div class="mt-7 space-y-3 font-sans text-sm">
						<div class="flex items-center justify-between rounded-lg bg-white/15 px-4 py-3"><span>Local arts and culture</span><span class="font-bold">42%</span></div>
						<div class="flex items-center justify-between rounded-lg bg-white/15 px-4 py-3"><span>Outdoor spaces</span><span class="font-bold">35%</span></div>
						<div class="flex items-center justify-between rounded-lg bg-white/15 px-4 py-3"><span>Skills workshops</span><span class="font-bold">23%</span></div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="live-polls" class="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
		<div class="flex flex-wrap items-end justify-between gap-4">
			<div><p class="font-sans text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">Make a mark</p><h2 class="mt-2 text-3xl font-bold tracking-tight text-zinc-900">Live polls</h2></div>
			<p class="font-sans text-sm text-zinc-500">Fresh questions, open for your perspective.</p>
		</div>
		<div class="mt-7 grid gap-4 md:grid-cols-3">
			<article class="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div class="flex items-center justify-between font-sans text-xs text-zinc-500"><span class="rounded-full bg-indigo-50 px-3 py-1 font-bold text-indigo-600">City life</span><span>8 min left</span></div><h3 class="mt-6 text-xl font-bold tracking-tight text-zinc-900">What would improve your daily commute?</h3><p class="mt-3 font-sans text-sm leading-6 text-zinc-500">1,284 people have voted</p></article>
			<article class="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div class="flex items-center justify-between font-sans text-xs text-zinc-500"><span class="rounded-full bg-indigo-50 px-3 py-1 font-bold text-indigo-600">Workplace</span><span>21 min left</span></div><h3 class="mt-6 text-xl font-bold tracking-tight text-zinc-900">Which team ritual keeps collaboration strong?</h3><p class="mt-3 font-sans text-sm leading-6 text-zinc-500">936 people have voted</p></article>
			<article class="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div class="flex items-center justify-between font-sans text-xs text-zinc-500"><span class="rounded-full bg-indigo-50 px-3 py-1 font-bold text-indigo-600">Culture</span><span>42 min left</span></div><h3 class="mt-6 text-xl font-bold tracking-tight text-zinc-900">What deserves a place on this year’s reading list?</h3><p class="mt-3 font-sans text-sm leading-6 text-zinc-500">712 people have voted</p></article>
		</div>
	</section>
`;

export const HomePage = (content = HomeContent(), currentPage = "home") => /*html*/`
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Polling Station System</title>
		<link rel="stylesheet" href="./css/style.css">
		<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
		<script src="/js/script.js"></script>
		<script src="https://unpkg.com/htmx.org@2.0.4"></script>
	</head>
	<body class="min-h-screen bg-zinc-100" x-data="{ navOpen: false, adminOpen: false, sidebarOpen: false, showTop: false, currentPage: '${currentPage}' }" @scroll.window="showTop = window.scrollY > 300">
		<header>
			<nav :class="navOpen ? 'bg-zinc-50/70 backdrop-blur-md' : 'bg-zinc-50'">
				<div x-show="!navOpen" x-transition.opacity class="container">
					<div class="flex justify-between items-center h-16 md:h-20">
					
					<!-- Brand / Logo -->
					<a href="/" class="flex items-center space-x-2 group" aria-label="SecurePoll Home" hx-get="/home" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/" @click="currentPage = 'home'">
						<div class="nav-icon-container">
						<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
						</svg>
						</div>
						<div>
						<span class="text-zinc-900 font-bold text-lg tracking-tight">
							Secure<span class="text-indigo-300">Poll</span>
						</span>
						<span class="hidden sm:inline-block ml-2 text-[10px] font-mono bg-zinc-100 shadow text-zinc-600 px-2 py-0.5 rounded-full border border-white/5">v1.0</span>
						</div>
					</a>

					<!-- Desktop Navigation -->
					<div class="hidden lg:flex items-center space-x-1">
						<!-- Home -->
						<a href="/" class="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 card" :class="currentPage === 'home' ? 'bg-zinc-200' : ''" hx-get="/home" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/" @click="currentPage = 'home'" aria-current="page">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10.5L12 3l9 7.5M5.5 9v11h13V9M9 20v-6h6v6"/></svg>
							Home
						</a>
						<!-- Live Polls (Active) -->
						<a href="/polls" class="relative rounded-lg px-4 py-2 text-sm font-medium text-zinc-900 transition-all duration-200 group hover:border-green-500/50 hover:bg-green-500/20 hover:text-green-900" :class="currentPage === 'polls' ? 'border border-green-500/25 bg-green-500/10' : 'border border-transparent'" hx-get="/polls" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/polls" @click="currentPage = 'polls'" :aria-current="currentPage === 'polls' ? 'page' : false">
						<span class="relative z-10 flex items-center gap-1.5">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
							</svg>
							Live Polls
						</span>
						<span class="absolute inset-0 rounded-lg bg-green-500/10 opacity-0 transition-opacity group-hover:opacity-100"></span>
						<span class="absolute -right-1 -top-1 h-2.5 w-2.5 animate-pulse rounded-full border-2 border-zinc-50 bg-green-500"></span>
						</a>
						
						<!-- Create Poll -->
						<a href="/create-poll" class="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 card" :class="currentPage === 'create' ? 'bg-zinc-200' : ''" hx-get="/create-poll" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/create-poll" @click="currentPage = 'create'">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
						</svg>
						Create Poll
						</a>
						
						<!-- Results -->
						<a href="/results" class="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 card" :class="currentPage === 'results' ? 'bg-zinc-200' : ''" hx-get="/results" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/results" @click="currentPage = 'results'">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C4.328 2.78 3.416 2.858 2.5 2.953m5.48 5.275A5.997 5.997 0 0112 9.75a5.997 5.997 0 014.02-1.522M12 9.75V6.75m0 3v-3m0 3v1.5m-3.75-3.75v3m6-3v3m-6-3a3 3 0 016 0"/>
						</svg>
						Results
						</a>
						
						<!-- Voters -->
						<a href="/voters" class="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 card" :class="currentPage === 'voters' ? 'bg-zinc-200' : ''" hx-get="/voters" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/voters" @click="currentPage = 'voters'">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
						</svg>
						Voters
						</a>
						
						<!-- Admin Dropdown -->
						<div class="relative group ml-1">
						<button type="button" class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-900 transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700" aria-expanded="false" aria-haspopup="true" @click="adminOpen = !adminOpen">
							<span class="flex items-center gap-3"><svg class="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM19.4 15a1.7 1.7 0 00.34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 00-1.88-.34 1.7 1.7 0 00-1.03 1.56V20h-2.4v-.2a1.7 1.7 0 00-1.03-1.56 1.7 1.7 0 00-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 008.46 15a1.7 1.7 0 00-1.56-1.03H6v-2.4h.9a1.7 1.7 0 001.56-1.03 1.7 1.7 0 00-.34-1.88l-.06-.06 1.7-1.7.06.06a1.7 1.7 0 001.88.34A1.7 1.7 0 0012.73 5V4h2.4v1a1.7 1.7 0 001.03 1.56 1.7 1.7 0 001.88-.34l-.06-.06 1.7 1.7-.06.06a1.7 1.7 0 00-.34 1.88A1.7 1.7 0 0021 11.57h1v2.4h-1A1.7 1.7 0 0019.4 15z"/></svg>Admin</span><svg class="h-4 w-4 transition-transform" :class="adminOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
						</button>
						
						<!-- Dropdown Menu -->
						<div class="absolute right-0 mt-2 w-56 card backdrop-blur-xl rounded-xl shadow-2xl py-1.5 invisible group-hover:visible transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0" role="menu">
							<a href="/admin/users" class="px-4 py-2.5 text-sm text-zinc-900 hover:text-zinc-800 hover:bg-zinc-200/40 transition-colors flex items-center gap-2" role="menuitem" hx-get="/admin/users" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/admin/users" @click="currentPage = 'users'">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
								Manage Users
							</a>
							<a href="/admin/security" class="px-4 py-2.5 text-sm text-zinc-900 hover:text-zinc-800 hover:bg-zinc-200/40 transition-colors flex items-center gap-2" role="menuitem" hx-get="/admin/security" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/admin/security" @click="currentPage = 'security'">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
								Security Settings
							</a>
							<a href="/admin/audit-logs" class="px-4 py-2.5 text-sm text-zinc-900 hover:text-zinc-800 hover:bg-zinc-200/40 transition-colors flex items-center gap-2" role="menuitem" hx-get="/admin/audit-logs" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/admin/audit-logs" @click="currentPage = 'audit'">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
								Audit Logs
							</a>
							<div class="border-t border-white/10 my-1.5" role="separator"></div>
							<a href="/api/logout" class="px-4 py-2.5 text-sm text-red-400 hover:bg-zinc-200/40 transition-colors flex items-center gap-2" role="menuitem">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/></svg>
								System Logout
							</a>
						</div>
						</div>
					</div>

					<!-- Right Side: Status & Auth -->
					<div class="flex items-center space-x-3">
						<!-- Online Status -->
						<div class="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center space-x-2 rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1.5 md:static md:translate-x-0" aria-label="Online users">
						<span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
						<span class="text-zinc-900/50 text-xs font-medium flex items-center gap-1">
							<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
							1,247 Online
						</span>
						</div>

						<!-- Vote Counter -->
						<div class="hidden sm:flex items-center space-x-1.5 bg-zinc-100/10 px-3 py-1.5 rounded-lg border border-zinc-200" aria-label="Total votes">
						<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
						</svg>
						<span class="text-zinc-900 text-sm font-bold">2,847</span>
						<span class="text-zinc-900/40 text-xs">votes</span>
						</div>

						<!-- Divider -->
						<div class="hidden lg:block w-px h-8 bg-white/10" aria-hidden="true"></div>

						<!-- Auth Buttons -->
						<div class="flex items-center space-x-2">
							<a href="/login" class="login-btn" :class="currentPage === 'login' ? 'bg-zinc-200 text-zinc-900' : ''" hx-get="/login" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/login" @click="currentPage = 'login'">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/>
								</svg>
								Log In
							</a>
							<a href="/signup" class="signup-btn" :class="currentPage === 'signup' ? 'bg-zinc-200 text-zinc-900 ring-2 ring-indigo-500/30 hover:bg-zinc-300' : ''" hx-get="/signup" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/signup" @click="currentPage = 'signup'">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z"/>
								</svg>
								Sign Up
							</a>
						</div>
						<button x-show="!navOpen" x-transition.opacity class="rounded-lg border border-zinc-300 bg-zinc-100 p-2 text-zinc-900 shadow-sm transition hover:bg-zinc-200 lg:hidden" @click="navOpen = true" :aria-expanded="navOpen" aria-label="Open navigation">
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
							</svg>
						</button>
					</div>

					</div>
				</div>
				<div x-show="navOpen" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="translate-x-0" x-transition:leave-end="-translate-x-full" class="isolate fixed inset-y-0 left-0 z-40 h-dvh min-h-screen w-80 max-w-[85vw] overflow-y-auto border-r border-zinc-200 bg-zinc-50 px-4 py-5 shadow-2xl lg:hidden" @click.outside="navOpen = false">
					<div class="relative z-50 mb-8 flex items-center justify-between border-b border-zinc-200 pb-5">
						<div>
							<a href="/" class="group flex items-center gap-2" aria-label="SecurePoll Home" hx-get="/home" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/" @click="currentPage = 'home'; navOpen = false">
								<div class="nav-icon-container">
									<svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
									</svg>
								</div>
								<span class="text-lg font-bold tracking-tight text-zinc-900">Secure<span class="text-indigo-300">Poll</span></span>
							</a>
							<p class="mt-1 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">Navigation</p>
						</div>
						<button type="button" class="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-300 bg-zinc-100 text-zinc-900 shadow-sm transition hover:bg-zinc-200" @click="navOpen = false" aria-label="Close navigation">
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
							</svg>
						</button>
					</div>
					<div class="mb-5 flex items-center justify-between rounded-lg border border-green-500/25 bg-green-500/10 px-4 py-3 font-sans text-xs text-zinc-600 sm:hidden">
						<span class="flex items-center gap-2"><span class="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>Live now</span>
						<span class="font-bold text-zinc-900">1,247 online</span>
					</div>
					<div class="grid gap-1 font-medium text-zinc-900" role="navigation" aria-label="Mobile navigation">
						<a href="/" class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition hover:bg-zinc-200" :class="currentPage === 'home' ? 'bg-zinc-200' : ''" hx-get="/home" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/" @click="currentPage = 'home'; navOpen = false">
							<svg class="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 10.5L12 3l9 7.5M5.5 9v11h13V9M9 20v-6h6v6"/></svg>Home
						</a>
						<a href="/polls" class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition hover:bg-zinc-200" :class="currentPage === 'polls' ? 'bg-zinc-200' : ''" hx-get="/polls" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/polls" @click="currentPage = 'polls'; navOpen = false">
							<svg class="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 13h8V3H3v10zm10 8h8V11h-8v10zM3 21h8v-4H3v4zm10-14h8V3h-8v4z"/></svg>Live Polls
						</a>
						<a href="/create-poll" class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition hover:bg-zinc-200" :class="currentPage === 'create' ? 'bg-zinc-200' : ''" hx-get="/create-poll" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/create-poll" @click="currentPage = 'create'; navOpen = false">
							<svg class="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 5v14m-7-7h14"/></svg>Create Poll
						</a>
						<a href="/results" class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition hover:bg-zinc-200" :class="currentPage === 'results' ? 'bg-zinc-200' : ''" hx-get="/results" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/results" @click="currentPage = 'results'; navOpen = false">
							<svg class="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 19V5m4 14V9m4 10V3m4 16v-7m4 7V7"/></svg>Results
						</a>
						<a href="/voters" class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition hover:bg-zinc-200" :class="currentPage === 'voters' ? 'bg-zinc-200' : ''" hx-get="/voters" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/voters" @click="currentPage = 'voters'; navOpen = false">
							<svg class="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m6-10a4 4 0 100-8 4 4 0 000 8zm12 10v-2a4 4 0 00-3-3.87m-1-8.13a4 4 0 010 7.75"/></svg>Voters
						</a>
						<div class="mt-3 rounded-xl border border-zinc-200 bg-zinc-100/70 p-2">
							<div class="px-3 pb-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">Administration</div>
						<button type="button" class="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-800 transition hover:bg-white hover:text-indigo-700" :class="adminOpen ? 'bg-white text-indigo-700 shadow-sm' : ''" @click="adminOpen = !adminOpen" :aria-expanded="adminOpen">
							<svg class="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM19.4 15a1.7 1.7 0 00.34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 00-1.88-.34 1.7 1.7 0 00-1.03 1.56V20h-2.4v-.2a1.7 1.7 0 00-1.03-1.56 1.7 1.7 0 00-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 008.46 15a1.7 1.7 0 00-1.56-1.03H6v-2.4h.9a1.7 1.7 0 001.56-1.03 1.7 1.7 0 00-.34-1.88l-.06-.06 1.7-1.7.06.06a1.7 1.7 0 001.88.34A1.7 1.7 0 0012.73 5V4h2.4v1a1.7 1.7 0 001.03 1.56 1.7 1.7 0 001.88-.34l.06-.06 1.7 1.7-.06.06a1.7 1.7 0 00-.34 1.88A1.7 1.7 0 0021 11.57h1v2.4h-1A1.7 1.7 0 0019.4 15z"/></svg>Admin
						</a>
						<div x-show="adminOpen" x-transition class="ml-8 mt-1 grid gap-1 border-l border-zinc-200 pl-3 text-sm text-zinc-600">
							<p class="px-3 pb-1 pt-2 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">Admin tools</p>
							<a href="/admin/users" class="rounded-lg px-3 py-2 transition hover:bg-zinc-200 hover:text-zinc-900" hx-get="/admin/users" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/admin/users" @click="currentPage = 'users'; navOpen = false">Manage Users</a>
							<a href="/admin/security" class="rounded-lg px-3 py-2 transition hover:bg-zinc-200 hover:text-zinc-900" hx-get="/admin/security" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/admin/security" @click="currentPage = 'security'; navOpen = false">Security Settings</a>
							<a href="/admin/audit-logs" class="rounded-lg px-3 py-2 transition hover:bg-zinc-200 hover:text-zinc-900" hx-get="/admin/audit-logs" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/admin/audit-logs" @click="currentPage = 'audit'; navOpen = false">Audit Logs</a>
						</div>
						</div>
						<a href="/login" class="mt-5 flex items-center gap-3 border-t border-zinc-200 px-4 pb-3 pt-5 text-sm transition hover:bg-zinc-200" :class="currentPage === 'login' ? 'bg-zinc-200' : ''" hx-get="/login" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/login" @click="currentPage = 'login'; navOpen = false">
							<svg class="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4m-4-4l4-4m0 0l-4-4m4 4H3"/></svg>Log In
						</a>
						<a href="/signup" class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition hover:bg-zinc-200" :class="currentPage === 'signup' ? 'bg-zinc-200' : ''" hx-get="/signup" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/signup" @click="currentPage = 'signup'; navOpen = false">
							<svg class="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 21v-2a4 4 0 00-4-4H6a2 2 0 00-2 2v2m6-10a4 4 0 100-8 4 4 0 000 8zm10 1v6m-3-3h6"/></svg>Sign Up
						</a>
					</div>
				</div>
			</nav>
		</header>
		<div x-show="navOpen" x-transition.opacity class="fixed inset-0 z-30 bg-zinc-950/40 backdrop-blur-sm lg:hidden" @click="navOpen = false" aria-hidden="true"></div>
		<main id="main-container" class="min-h-screen bg-zinc-100 pt-16 md:pt-20">${content}</main>
		<button x-show="showTop && !navOpen" x-transition.opacity x-cloak type="button" class="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-600/25" @click="window.scrollTo({ top: 0, behavior: 'smooth' })" aria-label="Back to top">
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
		</button>
		<footer></footer>
	</body>
	</html>
`;