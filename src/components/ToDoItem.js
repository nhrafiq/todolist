import React, { useState } from "react";
import { Card, Checkbox, Button } from "antd";
import { DeleteOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../styles/ToDoItem.css";

function ToDoItem({ item, handleDelete, handleReorder }) {
	const [isDone, setIsDone] = useState(item.isDone);

	return (
		<div id="item-container">
			<Card
				id="item"
				className={isDone && "completed-item"}
				title={item.title}
				actions={[
					<Button type="text">
						<Checkbox
							checked={isDone}
							onChange={() => {
								setIsDone(!isDone);
								if (!isDone) handleReorder(item, "bottom");
							}}
						>
							Done?
						</Checkbox>
					</Button>,
					<Button
						type="text"
						icon={<DeleteOutlined />}
						onClick={() => handleDelete(item)}
					>
						Delete
					</Button>,
					<>
						<Button
							type="text"
							icon={<UpOutlined />}
							onClick={() => handleReorder(item, "up")}
						/>
						<Button
							type="text"
							icon={<DownOutlined />}
							onClick={() => handleReorder(item, "down")}
						/>
					</>,
				]}
			>
				<p>{item.desc}</p>
				{item.dueDate && (<p id="due-date">Due: {item.dueDate}</p>)}
			</Card>
		</div>
	);
}

export default ToDoItem;
