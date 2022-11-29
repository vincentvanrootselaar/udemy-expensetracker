import Expenses from "./components/Expenses";
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
      <h2>Lets get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}


export default App;
