import React from "react";

function GameBoard({ children }: { children: React.ReactNode }) {
  return <div className="snake_game_board">{children}</div>;
}

export default GameBoard;
