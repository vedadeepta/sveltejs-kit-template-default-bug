export async function load({ fetch }) {
	// const res = await fetch('/mock');

	// const res = await fetch(new Request('http://localhost:5173/' +
	const res = await fetch('http://localhost:5173/' + 'mock');
	//
	const data = await res.json();
	return data;
}
