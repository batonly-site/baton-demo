// Public, build-time branding only. Never put secrets or per-user state here.
export const appConfig = {
	name: 'Baton Demo',
	shortName: 'Baton',
	description:
		'Public demo of the Baton project delivery workspace: Svelte 5, SvelteKit, Bun and Convex with no account required.',
	locale: 'en',
	themeColor: '#171717',
	backgroundColor: '#fafafa',
	tagline: 'Project delivery workspace',
	landing: {
		badge: 'Svelte 5 + SvelteKit + Convex',
		title: 'Walk through Baton without signing in.',
		description:
			'Every screen loads from a seeded demo workspace. Nothing you type is saved and no credentials are required.',
		action: 'Start the tour'
	}
} as const;
