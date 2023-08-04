import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import EngagementHelper , {messageCountList,channels} from "./EngagementHelper";

const EngagementMessagesOverTime = ()=>{
  const options = EngagementHelper.engagementMessageOverTimeChartOptions(messageCountList, channels)

	return <HighchartsReact  highcharts={Highcharts} options={options} />
}

export default EngagementMessagesOverTime