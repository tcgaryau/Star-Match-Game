import { utils } from "./utils";

interface IStarsDisplayProps {
  count: number;
}
const StarsDisplay = (props: IStarsDisplayProps) => (
  <>
    {utils.range(1, props.count).map((starId) => (
      <div key={starId} className="star" />
    ))}
  </>
);

export default StarsDisplay;
