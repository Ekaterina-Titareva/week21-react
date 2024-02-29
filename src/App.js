import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Sleep 🛏️", 7],
  ["Work 💻", 5],
  ["Study 👩🏻‍💻", 5],
  ["Eat 🍽️", 2],
  ["Cook 👩🏻‍🍳", 2],
  ["Surf the Internet 📱", 2],
  ["Walk 🏞️", 1],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

function App() {
  return (
    <div className="container">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
    </div>
  );
}

export default App;
