export const HomePage = () => /*html*/`
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Polling Station System</title>
		<link rel="stylesheet" href="./css/style.css">
	</head>
	<body class="bg-zink-50">
		<header>
			<nav>
				<div class="container">
					<div class="flex justify-between items-center h-16 md:h-20">
					
					<!-- Brand / Logo -->
					<a href="#" class="flex items-center space-x-2 group" aria-label="SecurePoll Home">
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
						<!-- Live Polls (Active) -->
						<a href="#" class="relative px-4 py-2 text-sm font-medium text-zinc-900 rounded-lg hover:bg-green-500/20 transition-all duration-200 group border border-green-500/20 bg-green-500/20 " aria-current="page">
						<span class="relative z-10 flex items-center gap-1.5">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
							</svg>
							Live Polls
						</span>
						<span class="absolute inset-0 bg-zinc-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
						<span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse border-2 border-zinc-900"></span>
						</a>
						
						<!-- Create Poll -->
						<a href="#" class="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 card">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
						</svg>
						Create Poll
						</a>
						
						<!-- Results -->
						<a href="#" class="px-4 py-2 text-sm font-medium  rounded-lg transition-all duration-200 flex items-center gap-1.5 card">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C4.328 2.78 3.416 2.858 2.5 2.953m5.48 5.275A5.997 5.997 0 0112 9.75a5.997 5.997 0 014.02-1.522M12 9.75V6.75m0 3v-3m0 3v1.5m-3.75-3.75v3m6-3v3m-6-3a3 3 0 016 0"/>
						</svg>
						Results
						</a>
						
						<!-- Voters -->
						<a href="#" class="px-4 py-2 text-sm font-medium  rounded-lg transition-all duration-200 flex items-center gap-1.5 card">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
						</svg>
						Voters
						</a>
						
						<!-- Admin Dropdown -->
						<div class="relative group ml-1">
						<button class="px-4 py-2 text-sm font-medium bg-zinc-50 text-zinc-900 hover:bg-zinc-100 rounded-lg transition-all duration-200 inline-flex items-center gap-1.5 border border-zinc-200 aria-expanded="false" aria-haspopup="true">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
							</svg>
							Admin
							<svg class="ml-0.5 w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
							</svg>
						</button>
						
						<!-- Dropdown Menu -->
						<div class="absolute right-0 mt-2 w-56 card backdrop-blur-xl rounded-xl shadow-2xl py-1.5 invisible group-hover:visible transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0" role="menu">
							<a href="#" class="px-4 py-2.5 text-sm text-zinc-900 hover:text-zinc-800 hover:bg-zinc-200/40 transition-colors flex items-center gap-2" role="menuitem">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
							Manage Users
							</a>
							<a href="#" class="px-4 py-2.5 text-sm text-zinc-900 hover:text-zinc-800 hover:bg-zinc-200/40 transition-colors flex items-center gap-2" role="menuitem">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
							Security Settings
							</a>
							<a href="#" class="px-4 py-2.5 text-sm text-zinc-900 hover:text-zinc-800 hover:bg-zinc-200/40 transition-colors flex items-center gap-2" role="menuitem">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
							Audit Logs
							</a>
							<div class="border-t border-white/10 my-1.5" role="separator"></div>
							<a href="#" class="px-4 py-2.5 text-sm text-red-400 hover:bg-zinc-200/40 transition-colors flex items-center gap-2" role="menuitem">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/></svg>
							System Logout
							</a>
						</div>
						</div>
					</div>

					<!-- Right Side: Status & Auth -->
					<div class="flex items-center space-x-3">
						<!-- Online Status -->
						<div class="hidden md:flex items-center space-x-2 bg-green-500/20 px-3 py-1.5 rounded-full border border-green-500/30" aria-label="Online users">
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
							<button class="login-btn">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/>
								</svg>
								Log In
							</button>
							<button class="signup-btn">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z"/>
								</svg>
								Sign Up
							</button>
						</div>
					</div>

					</div>
				</div>
			</nav>
		</header>
		<main></main>
		<footer></footer>
	</body>
	</html>
`;