import { LineChart } from '@mui/x-charts/LineChart';
const Grafica = ({ejex, ejey}) => {
    console.log(ejex, ejey)
    return (
        <LineChart
          xAxis={[{ data: ejex }]}
          series={[
            {
              data: ejey,
            },
          ]}
          width={500}
          height={300}
        />
      );

}

export default Grafica