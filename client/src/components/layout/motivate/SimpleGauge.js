import React, {Fragment} from 'react'
import * as d3 from "d3";
import GaugeChart from 'react-gauge-chart';


class SimpleGauge extends React.Component {
    constructor(props) {
      super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
             <GaugeChart id="gauge-chart4"
                            nrOfLevels={2} 
                            colors={["#eeeeee", "#ECEFF1"]} 
                            arcsLength={[0.37, 0.63]}
                            arcWidth={0.45} 
                            percent={0.80} 
                            arcPadding={0}
                            cornerRadius={0}
                            textColor={"#000000"}
                            needleColor={"#58585E"}
                            needleBaseColor={"#000000"}
                            formatTextValue={value => 'Very tempted'}
                            hideText={true}
                            />
            </Fragment>

    );
}
}




export default SimpleGauge;