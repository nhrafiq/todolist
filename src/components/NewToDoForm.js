import React, { useState } from "react";
import { Form, Input, DatePicker } from "antd";
import "antd/dist/antd.css";

function NewToDoForm({ handleSubmit }) {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [dueDate, setDueDate] = useState(null);

	const [form] = Form.useForm();

	return (
		<div>
			<Form
				name="addItem"
				id="addItemForm"
				form={form}
				onFinish={() => {
					handleSubmit({ title, desc, dueDate });

					setTitle("");
					setDesc("");
					setDueDate("");

					form.resetFields();
				}}
			>
				<Form.Item name="title" label="Title" rules={[
					{
						required: true,
						message: 'Please provide a title',
					}
				]}>
					<Input
						placeholder="Enter name"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</Form.Item>
				<Form.Item name="desc" label="Description">
					<Input
						placeholder="Enter description"
						onChange={(e) => setDesc(e.target.value)}
					/>
				</Form.Item>
				<Form.Item name="dueDate" label="Due date">
					<DatePicker
						 format="MM/DD/YYYY"
						onChange={(date, dateString) => setDueDate(dateString)}
					/>
				</Form.Item>
			</Form>
		</div>
	);
}

export default NewToDoForm;
