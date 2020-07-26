import React from "react";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  Tooltip
} from "recharts";

function Graph() {
  const display = useSelector(state => state.trainer.display === "qTable");
  const rewards = useSelector(state => state.trainer.graphRewards);
  const data = rewards
  .filter((_, i) => i % 10 === 0)
  .map((y, x) => ({ reward: y, episode: (x*10)}));

  return (
    <div>
      {display && (
        <ResponsiveContainer width="99%" height={400} >
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis height={40} dataKey="episode">
              <Label value="Episode" position="insideBottom" offset={0} />
            </XAxis>
            <YAxis>
              <Label value="Reward" angle={-90} position="insideLeft"/>
            </YAxis>
            <Line type="monotone" dataKey="reward" stroke="#8884d8" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default Graph;
