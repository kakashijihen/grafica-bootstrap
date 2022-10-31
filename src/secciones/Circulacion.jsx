import { CirculacionDatos } from "../js/listados"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Circulacion = () => {
  const volumenes=CirculacionDatos.map(volumen=>volumen.label)
  const tiraje=CirculacionDatos.map(tiraje=>tiraje.cifra)
   const data={
    labels:volumenes,
    datasets:[{
      label:'Numero de circulación',
      data:tiraje,
      fill:false,
      borderColor:'#6CC417',
      tension:0.1
    }]
   }
   const optionsCirculation={
     plugins:{
       title:{
         display:true,
         text:'Numero de Circulación por serie',
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
      options:{
        maintainAspectRatio:false,
        aspectRatio:1,
      }
   }
  return (
    <Line data={data} options={optionsCirculation} height={"240px"} />
  )
}

export default Circulacion