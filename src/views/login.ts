import { HomePage } from "./home.js";

export const LoginPage = () => /*html*/ `
	<section class="bg-stone-100 text-zinc-900 lg:grid lg:min-h-[calc(100dvh-5rem)] lg:grid-cols-[1.1fr_0.9fr]">
		<div class="relative flex min-h-80 flex-col justify-between overflow-hidden bg-indigo-100 px-6 py-8 sm:px-12 lg:min-h-[calc(100dvh-5rem)] lg:px-[clamp(3rem,7vw,7rem)]">
			<div class="pointer-events-none absolute -bottom-48 -right-40 h-120 w-120 rounded-full border border-indigo-600/30 shadow-[0_0_0_3rem_rgba(79,70,229,0.06),0_0_0_7rem_rgba(79,70,229,0.04)]"></div>
			<div class="relative z-10 mt-12 flex flex-1 flex-col justify-center max-w-xl lg:mt-0">
				<span class="font-sans text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Your voice, counted</span>
				<h1 class="mt-3 max-w-[8ch] text-6xl font-bold leading-[0.9] tracking-tighter sm:text-8xl">Make your mark.</h1>
				<p class="mt-6 max-w-md font-sans text-base leading-7 text-indigo-950/65">Join the room where every considered opinion helps shape what comes next.</p>
			</div>
			<p class="relative z-10 hidden font-sans text-xs text-indigo-950/65 lg:block">Private by design. Transparent by default.</p>
		</div>

		<div class="flex min-h-[calc(100dvh-4rem)] items-center justify-center bg-stone-100 px-5 py-10 sm:px-8 lg:min-h-[calc(100dvh-5rem)] lg:bg-[#fffdf9] lg:px-12 lg:py-12">
			<div class="mx-auto w-full max-w-md rounded-2xl border border-zinc-200 bg-[#fffdf9] p-6 shadow-xl shadow-zinc-900/10 sm:p-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
				<span class="font-sans text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Welcome back</span>
				<h2 class="mt-3 text-4xl font-bold leading-none tracking-tighter">Sign in to vote</h2>
				<p class="mt-3 font-sans text-sm leading-6 text-zinc-500">Use your account details to continue to the live polls.</p>

				<form class="mt-9" x-data="loginForm()" @submit="handleSubmit($event)" hx-post="/api/login" hx-target="#login-message" hx-swap="innerHTML" hx-indicator="#login-spinner">
					<label class="mb-2 block font-sans text-xs font-bold tracking-wide text-zinc-900" for="email">EMAIL ADDRESS
							<input class="mt-2 block w-full rounded border px-4 py-3 font-sans text-base font-normal text-zinc-900 outline-none transition" :class="errors.email ? 'border-red-500 bg-red-50' : 'border-zinc-300 bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10'" @blur="validateEmail()" @input="clearEmailError()" x-model="email" id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com">
					</label>
					<p x-show="errors.email" class="mb-4 font-sans text-xs text-red-600" x-text="errors.email"></p>
					
					<label class="mb-2 block font-sans text-xs font-bold tracking-wide text-zinc-900" for="password">PASSWORD
							<input class="mt-2 block w-full rounded border px-4 py-3 font-sans text-base font-normal text-zinc-900 outline-none transition" :class="errors.password ? 'border-red-500 bg-red-50' : 'border-zinc-300 bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10'" @blur="validatePassword()" @input="clearPasswordError()" x-model="password" id="password" name="password" type="password" autocomplete="current-password" placeholder="Enter your password">
					</label>
					<p x-show="errors.password" class="mb-4 font-sans text-xs text-red-600" x-text="errors.password"></p>
					
					<div class="mb-6 flex items-center justify-between gap-4 font-sans text-xs">
							<label class="flex items-center gap-2 text-zinc-500"><input class="accent-indigo-600" type="checkbox" name="remember"> Remember me</label>
							<a class="font-bold text-indigo-600 hover:text-indigo-900" href="/forgot-password">Forgot password?</a>
					</div>
					<button class="w-full rounded bg-indigo-600 px-4 py-3.5 font-sans text-xs font-bold uppercase tracking-widest text-white transition hover:bg-indigo-700" type="submit">
						<span id="login-spinner" class="htmx-indicator">Signing in...</span>
						<span class="[&:not(.htmx-request)]:inline [&.htmx-request]:hidden">Continue to SecurePoll</span>
					</button>
				</form>
				<div id="login-message" class="mt-4 font-sans text-sm" aria-live="polite"></div>
				<p class="mt-6 text-center font-sans text-xs text-zinc-500">New to SecurePoll? <a class="font-bold text-indigo-600 hover:text-indigo-900" href="/signup" hx-get="/signup" hx-target="#main-container" hx-swap="innerHTML" hx-push-url="/signup">Create an account</a></p>
			</div>
		</div>
	</section>
`;

export const LoginDocument = () => HomePage(LoginPage(), "login");
