import React, { Component } from 'react';
import { View, } from 'react-native';
import {BarChart} from 'react-native-chart-kit';
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      data: [ 20, 45, 28, 80, 99, 43 ]
    }]
  }
  
export class Chart extends Component {
    render() {
        return (
            <BarChart
                style={graphStyle}
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />

        )

    }
}