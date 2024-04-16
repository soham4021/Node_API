import { v4 as uuidv4 } from "uuid";
let users = [
	{
		firstName: "John",
		lastName: "Petersen",
		age: 44,
		id: "06e7cccb-0868-46c7-88d6-6888abbd13d0",
	},
	{
		firstName: "Jane",
		lastName: "Petersen",
		age: 41,
		id: "0672269f-8f6c-40b0-89c4-9bd0278526f1",
	},
	{
		firstName: "Jada",
		lastName: "Petersen",
		age: 11,
		id: "c4958057-3548-4ffd-9904-5db375844117",
	},
	{
		firstName: "Jack",
		lastName: "Petersen",
		age: 7,
		id: "1ba11d96-3f88-47ab-9982-f5c6c9c35099",
	},
	{
		firstName: "Jessica",
		lastName: "Petersen",
		age: 4,
		id: "75a4ac77-f777-4265-8b72-63c2ffb01312",
	},
];

export const createUser = (req, res) => {
	const user = req.body;
	const userId = uuidv4();
	const userWithId = { ...user, id: userId };
	users.push(userWithId);

	res.send(`User with name ${user.firstName} added to the databse`);
};

export const getUser = (req, res) => {
	res.send(users);
};

export const getUserById = (req, res) => {
	const { id } = req.params;

	const foundUser = users.find((user) => user.id === id);
	res.send(foundUser);
};

export const deleteUserById = (req, res) => {
	const { id } = req.params;

	users = users.filter((user) => user.id !== id);
	res.send(`User with id ${id} deleted from the database`);
};

export const updateUserById = (req, res) => {
	const { id } = req.params;

	const user = users.find((user) => user.id === id);
	const { firstName, lastName, age } = req.body;
	if (firstName) user.firstName = firstName;
	if (lastName) user.lastName = lastName;
	if (age) user.age = age;

	res.send(`User with id ${id} updated in the database.`);
};