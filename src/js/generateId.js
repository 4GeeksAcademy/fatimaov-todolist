let nextId = 0
function generateId() {
	const id = nextId;
	nextId++
	return id;
}

export default generateId;