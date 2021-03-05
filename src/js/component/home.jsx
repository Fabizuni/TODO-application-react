import React from "react";
import shortid from "shortid";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "bootstrap";

//include your index.scss file into the bundle
//import "../styles/index.scss";

//create your first component
export function Home() {
	const [todo, setTodo] = React.useState("");
	const [arrayTodo, setArrayTodo] = React.useState([]);

	const addTodos = e => {
		e.preventDefault();

		setArrayTodo([
			...arrayTodo,
			{
				id: shortid.generate(),
				nameTodo: todo
			}
		]);
		setTodo("");
	};

	return (
		<div className="container">
			<h1 className="text-center">TODO LIST</h1>
			<div className="row">
				<div className="col">
					<form onSubmit={addTodos}>
						<input
							style={{ maxWidth: "550px", margin: "0 auto" }}
							type="text"
							className="form-control mb-2"
							placeholder="Enter a task"
							onChange={e => setTodo(e.target.value)}
							value={todo}
						/>
					</form>
					<ul
						className="list-group paper"
						style={{ maxWidth: "550px", margin: "0 auto" }}>
						{arrayTodo.map(item => (
							<li className="list-group-item" key={item.id}>
								<span
									className="lead"
									sytle={{ marginRight: "352px" }}>
									{item.nameTodo}
								</span>
								<button
									className="fas fa-minus-square"
									onClick={() => {
										const newArrayTodo = arrayTodo.filter(
											hwork => hwork.id != item.id
										);
										setArrayTodo([...newArrayTodo]);
									}}></button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
