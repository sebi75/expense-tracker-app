import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

interface DoughnutChartPropr {
    data: any
}

const DoughnutChart: React.FC<DoughnutChartPropr> = ({ data }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Chart.js Line Chart",
            },
        },
    }

    const mockData = {
        labels: ["Example"],
        datasets: [
            {
                data: [12],
                backgroundColor: ["rgba(54, 162, 235, 0.5)"],
                borderColor: ["rgba(54, 162, 235, 1)"],
                borderWidth: 1,
            },
        ],
    }

    const dataToDisplay = data.labels.length > 0 ? data : mockData

    return <Doughnut data={dataToDisplay} options={options} />
}

export default DoughnutChart
