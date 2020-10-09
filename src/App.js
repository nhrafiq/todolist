import React, { useState } from "react";
import { Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import NewToDoForm from "./components/NewToDoForm";
import ToDoItem from "./components/ToDoItem";
import "antd/dist/antd.css";
import "./styles/App.css";

function App() {
	const [toDoList, updateToDoList] = useState([]);
	const [isVisible, isModalVisible] = useState(false);

	function handleAddItem(newItem) {
		updateToDoList((toDoList) => [...toDoList, newItem]);
		isModalVisible(!isVisible);
	}

	function handleDeleteItem(item) {
		updateToDoList(toDoList.filter((element) => element !== item));
	}

	function handleReorderItem(item, direction) {
		const from = toDoList.indexOf(item);

		// edge cases
		if (
			(from === 0 && direction === "up") ||
			(from === toDoList.length - 1 && direction === "down")
		)
			return;

		let to = 0;
		switch (direction) {
			case "up":
				to = from - 1;
				break;
			case "down":
				to = from + 1;
				break;
			case "bottom":
				to = toDoList.length - 1;
				break;
			default:
				break;
		}

		updateToDoList((toDoList) => {
			let newList = [...toDoList];
			newList.splice(to, 1, newList.splice(from, 1, newList[to])[0]);
			return newList;
		});
	}

	function handleModalVisibility() {
		isModalVisible(!isVisible);
	}

	return (
		<div id="container">
			<header>
				<h1>To Do List</h1>
				<h3>What do you want to focus on today?</h3>
			</header>

			{!toDoList.length && (<p id="get-started">Click the + button in the lower right hand corner to add your first task.</p>)}

			{toDoList &&
				toDoList.map((item) => (
					<ToDoItem
						item={item}
						handleDelete={handleDeleteItem}
						handleReorder={handleReorderItem}
						key={item.title}
					/>
				))}

			<Button id="addItemButton"
				type="primary"
				shape="circle"
				size="large"
				icon={<PlusOutlined />}
				onClick={handleModalVisibility}
			/>

			<Modal
				title="Add New Item"
				visible={isVisible}
				footer={[
					<Button
						form="addItemForm"
						type="primary"
						htmlType="submit"
					>
						Submit
					</Button>,
				]}
				onCancel={handleModalVisibility}
			>
				<NewToDoForm handleSubmit={handleAddItem} />
			</Modal>
		</div>
	);
}

export default App;
