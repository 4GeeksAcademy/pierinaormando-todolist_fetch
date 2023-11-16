import React from "react";

//create your first component
const Home = () => {

	//crear usuario
	fetch("https://playground.4geeks.com/apis/fake/todos/user/pierinaormando", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify([])
	})
		.then(response => response.json())
		.then((data) => { console.log(data) })
		.catch((err) => { console.log(err) })



	/* fetch("https://playground.4geeks.com/apis/fake/todos/user/pierinaormando", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify([
				{ "label": "Make the bed", "done": false },
				{ "label": "Walk", "done": true }
			])
		})
			.then(response => response.json())
			.then((data) => { console.log(data) })
			.catch((err) => { console.log(err) }) */

	const createTask = (label, done) => {
		fetch("https://playground.4geeks.com/apis/fake/todos/user/pierinaormando", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify([{ "label": label, "done": done }])
		})
			.then(response => response.json())
			.then((data) => { console.log(data) })
			.catch((err) => { console.log(err) })
	};

	createTask("Realizar práctica de fetch", true);

	//leer las tareas
	fetch("https://playground.4geeks.com/apis/fake/todos/user/pierinaormando")
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.error(error));

	return (
		<div className="text-center mt-5">
			<h1>Practicando Fetch</h1>
		</div>
	);
};

export default Home;
