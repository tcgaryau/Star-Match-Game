interface IPlayAgainProps {
  onClick: () => void;
  gameStatus: string;
}
const PlayAgain = (props: IPlayAgainProps) => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: props.gameStatus === "lost" ? "red" : "green" }}
    >
      {props.gameStatus === "lost" ? "Game Over" : "You Win"}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
);

export default PlayAgain;
