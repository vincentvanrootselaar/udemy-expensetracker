import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 267.43,
      date: new Date(2022, 11, 24)
    },
    {
      title: "Gasoline",
      amount: 12.44,
      date: new Date(2022, 12, 17)
    },
    {
      title: "Mc Donalds",
      amount: 45.21,
      date: new Date(2022, 1, 9)
    },
    {
      title: "Lidl",
      amount: 87.32,
      date: new Date(2022, 2, 10),
    }
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
