import { addToast } from './toast';

/** @type {import('svelte/action').Action}  */
export function copyable(node: HTMLElement) {
	const listener = () => {
		const content = node.textContent;

		if (!content) {
			return;
		}

		navigator.clipboard.writeText(content);
		addToast('success', 'Kopiert!');
	};

	node.addEventListener('click', listener);

	// set cursor to pointer
	node.style.cursor = 'pointer';

	return {
		destroy() {
			node.removeEventListener('click', listener);
		}
	};
}
