import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { VolumeOptions } from '../js/listados'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const VolumenActual = () => {
  const defValue=VolumeOptions.slice(-1).find(function(value) {
    return value.id
  })
  const [selected,setSelected]=useState(defValue.value)

  const semanaLabel = ['semana 1','semana 2','semana 3','semana 4']
  const dataSelected =VolumeOptions.find(function (item){ return item.id==selected })

  const handleSetValue=(e) => {
    const selectedVolumen = e.target.value;
    setSelected(selectedVolumen)
  }

  const resetDefValue=(e)=>{
    e.preventDefault();
    setSelected(defValue.value)

  }
  
  const data ={
    labels:semanaLabel,
    datasets:[{
      data:dataSelected?.ventas.map(v=>v.cantidad),
      backgroundColor:['red','blue','green','yellow']
    }]
  }

  const options={
    plugins: {
      title: {
        display: true,
        text: `Ventas del ${dataSelected?.OptionTitle}`,
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
      },
    },
    options:{
      maintainAspectRatio:false,
    }
  }

  return (
   <>
    <Form>
      <Row className="my-3">
        <Col xs={12} sm={9} className="mb-1 mb-sm-0">
          <Form.Select aria-label="volumen select" size="lg" value={selected} default onChange={handleSetValue}>
            {
              VolumeOptions.map((option)=>{
                return <option key={option.id} value={option.value}>{option.OptionTitle}</option>
              })
            }
          </Form.Select>
        </Col>
        <Col xs={12} sm={3} className="mt-1  mt-sm-0">
          <button className="btn btn-lg btn-primary w-100 " onClick={resetDefValue}>Reset</button>
        </Col>
      </Row>
    </Form> 
      <Pie options={options} data={data} height={"240px"}/>
   </>
  )
}

export default VolumenActual