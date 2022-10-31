import { VolumeOptions } from "../js/listados"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const VolumenTotal = () => {
  const volumenLabel=VolumeOptions.map(label=>label.OptionTitle)
  const semana1=VolumeOptions.map(data=>data.ventas.find(element=>{return element.semana==1}))
  const semana2=VolumeOptions.map(data=>data.ventas.find(element=>{return element.semana==2}))
  const semana3=VolumeOptions.map(data=>data.ventas.find(element=>{return element.semana==3}))
  const semana4=VolumeOptions.map(data=>data.ventas.find(element=>{return element.semana==4}))
  const data={
    labels:volumenLabel,
    datasets:[
      {
        label:'Semana 1',
        data:semana1.map(element=>element.cantidad),
        backgroundColor:'red'
      },
      {
        label:'Semana 2',
        data:semana2.map(element=>element.cantidad),
        backgroundColor:'blue'
      },
      {
        label:'Semana 3',
        data:semana3.map(element=>element.cantidad),
        backgroundColor:'yellow'
      },
      {
        label:'Semana 4',
        data:semana4.map(element=>element.cantidad),
        backgroundColor:'green'
      },
    ]
  }
  const options = {   
    plugins: {
      title: {
        display: true,
        text: 'Evolución de ventas por volumen',
        color:'#6CC417',
        font:{
          size:24,
          family:'Metal Mania',
        }
      },
      legend:{
        labels:{
          color:'#6CC417',
          font:{
            size:22,
            family:'Jolly Lodger'
          }
        }
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    options:{
      maintainAspectRatio:false,
    }
  }
  return (
    <Bar options={options} data={data} height={"240px"} />
  )
}

export default VolumenTotal