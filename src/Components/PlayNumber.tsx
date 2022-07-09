import { ReactElement } from "react";
import { colours } from "./utils";

interface IPlayNumberProp {
  onClick: (a: number, b: string) => void;
  number: number;
  status: string;
}
const PlayNumber = (props: IPlayNumberProp): ReactElement => {
  return (
    <button
      className="number"
      // @ts-ignore
      style={{ backgroundColor: colours[props.status] }}
      onClick={() => props.onClick(props.number, props.status)}
    >
      {props.number}
    </button>
  );
};

export default PlayNumber;
