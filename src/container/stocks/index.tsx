import React from "react";
import { StyleSheet, View } from "react-native";
import HighchartsReactNative from "@highcharts/highcharts-react-native";

export default class Stocks extends React.Component {
  state = {
    chartOptions: {
      chart: {
        type: "area",
        zoomType: "xy",
      },
      rangeSelector: {
        selected: 1,
      },
      title: {
        text: "ETH-BTC Market Depth",
      },
      xAxis: {
        minPadding: 0,
        maxPadding: 0,
        plotLines: [
          {
            color: "#888",
            value: 0.1523,
            width: 1,
            label: {
              text: "Actual price",
              rotation: 90,
            },
          },
        ],
        title: {
          text: "Price",
        },
      },
      yAxis: [
        {
          lineWidth: 1,
          gridLineWidth: 1,
          title: null,
          tickWidth: 1,
          tickLength: 5,
          tickPosition: "inside",
          labels: {
            align: "left",
            x: 8,
          },
        },
      ],
      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          fillOpacity: 0.2,
          lineWidth: 1,
          step: "center",
        },
      },
      tooltip: {
        headerFormat:
          '<span style="font-size=10px;">Price: {point.key}</span><br/>',
        valueDecimals: 2,
      },
      series: [
        {
          name: "Bids",
          data: [
            [0.1524, 0.948665],
            [0.1539, 35.510715],
            [0.154, 39.883437],
            [0.1541, 40.499661],
            [0.1545, 43.262994000000006],
            [0.1547, 60.14799400000001],
            [0.1553, 60.30799400000001],
            [0.1558, 60.55018100000001],
            [0.1564, 68.381696],
            [0.1567, 69.46518400000001],
            [0.1569, 69.621464],
            [0.157, 70.398015],
            [0.1574, 70.400197],
            [0.1575, 73.199217],
            [0.158, 77.700017],
            [0.1583, 79.449017],
            [0.1588, 79.584064],
            [0.159, 80.584064],
            [0.16, 81.58156],
            [0.1608, 83.38156],
          ],
          color: "#03a7a8",
        },
      ],
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <HighchartsReactNative
          styles={{ height: 400 }}
          options={this.state.chartOptions}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    flex: 1,
  },
});
