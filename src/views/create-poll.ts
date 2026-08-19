import { HomePage } from "./home.js";

export const CreatePollPage = () => /*html*/ `
	<section class="bg-zinc-100 px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
		<div class="mx-auto max-w-5xl">
			<div class="max-w-2xl">
				<p class="font-sans text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">Shape the question</p>
				<h1 class="mt-3 text-5xl font-bold leading-none tracking-tighter text-zinc-900 sm:text-6xl">Create a poll</h1>
				<p class="mt-4 font-sans text-sm leading-6 text-zinc-600">Ask a focused question, give people clear choices, and open the floor to the room.</p>
			</div>

			<form class="mt-10 grid gap-6 lg:grid-cols-[1fr_19rem]" x-data="createPollForm()" @submit="handleSubmit($event)" hx-post="/api/polls" hx-target="#poll-message" hx-swap="innerHTML">
				<div class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
					<div class="flex items-center gap-3 border-b border-zinc-200 pb-5"><span class="grid h-8 w-8 place-items-center rounded-full bg-indigo-600 font-sans text-sm font-bold text-white">1</span><div><h2 class="font-bold text-zinc-900">Poll details</h2><p class="font-sans text-xs text-zinc-500">Give your poll a clear direction.</p></div></div>
					<div class="mt-7 space-y-5">
						<label class="block font-sans text-xs font-bold tracking-wide text-zinc-900" for="poll-title">QUESTION
							<input class="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 font-sans text-base font-normal text-zinc-900 outline-none transition focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10" x-model="title" id="poll-title" name="title" type="text" placeholder="What should we decide together?">
						</label>
						<label class="block font-sans text-xs font-bold tracking-wide text-zinc-900" for="poll-description">CONTEXT <span class="font-normal normal-case tracking-normal text-zinc-400">(optional)</span>
							<textarea class="mt-2 block min-h-28 w-full resize-y rounded-lg border border-zinc-300 bg-white px-4 py-3 font-sans text-sm font-normal leading-6 text-zinc-900 outline-none transition focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10" id="poll-description" name="description" placeholder="Add helpful context for voters."></textarea>
						</label>
						<div class="grid gap-5 sm:grid-cols-2">
							<label class="block font-sans text-xs font-bold tracking-wide text-zinc-900" for="poll-category">CATEGORY
								<select class="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 font-sans text-sm font-normal text-zinc-900 outline-none transition focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10" id="poll-category" name="category"><option>City life</option><option>Workplace</option><option>Culture</option><option>Community</option></select>
							</label>
							<label class="block font-sans text-xs font-bold tracking-wide text-zinc-900" for="poll-end">CLOSES ON
								<input class="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 font-sans text-sm font-normal text-zinc-900 outline-none transition focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10" id="poll-end" name="endDate" type="date">
							</label>
						</div>
					</div>
				</div>

				<div class="space-y-6">
					<div class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
						<div class="flex items-center gap-3 border-b border-zinc-200 pb-5"><span class="grid h-8 w-8 place-items-center rounded-full bg-indigo-600 font-sans text-sm font-bold text-white">2</span><div><h2 class="font-bold text-zinc-900">Answer choices</h2><p class="font-sans text-xs text-zinc-500">Add at least two options.</p></div></div>
						<div class="mt-6 space-y-3">
							<template x-for="(option, index) in options" :key="index"><div class="flex items-center gap-2"><input class="block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 font-sans text-sm text-zinc-900 outline-none transition focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10" :name="'options[' + index + ']'" type="text" :placeholder="'Option ' + (index + 1)" x-model="options[index]"><button x-show="options.length > 2" @click.prevent="removeOption(index)" type="button" class="rounded-lg p-2 text-zinc-400 transition hover:bg-red-50 hover:text-red-600" aria-label="Remove option"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button></div></template>
							<button type="button" class="flex items-center gap-2 font-sans text-sm font-bold text-indigo-600 transition hover:text-indigo-800" @click="addOption"><span class="grid h-5 w-5 place-items-center rounded-full border border-indigo-600 text-xs">+</span>Add option</button>
						</div>
					</div>
					<div class="rounded-2xl border border-indigo-100 bg-indigo-50 p-6"><p class="font-sans text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Ready to publish?</p><p class="mt-2 font-sans text-sm leading-6 text-indigo-950/70">Review your question and choices before opening it to voters.</p><button class="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-3 font-sans text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700" type="submit"><span>Publish poll</span></button></div>
				</div>
				<div id="poll-message" class="lg:col-span-2 font-sans text-sm" aria-live="polite"></div>
			</form>
		</div>
	</section>
`;

export const CreatePollDocument = () => HomePage(CreatePollPage(), "create");
