import React, { useState } from "react";
import { GameClass } from "../../businessRules/Game/GameClass";
import { BasketPosition } from "../../businessRules/shared/types";
import { Branch } from "../../shared/types";
import { Background } from "../Background";
import { Chicken } from "../Chicken";
import { Container } from "../Container";
import { Egg } from "../Egg";
import { Fail } from "../Fail";
import { Score } from "../Score";
import { Wolf } from "../Wolf";

interface Props {
  game: GameClass;
}

enum GameStatus {
  NOT_ACTIVE = "NOT_ACTIVE",
  ACTIVE = "ACTIVE",
  GAME_OVER = "GAME_OVER",
  GAME_END = "GAME_END",
  PAUSE = "PAUSE",
}

export const Game = ( props: Props ) => {
  const { game } = props;

  const [ status, setStatus ] = useState<GameStatus>( GameStatus.NOT_ACTIVE );
  const [ basketPos, setBasketPos ] = useState<BasketPosition>( BasketPosition.LEFT_TOP );

  console.log( "Game Component render" )

  const moveBasket = ( position: BasketPosition ) => () => {
    game.setBasketPosition( position );
    setBasketPos( position );
  };

  return (
    <>
      <Container>
        <Chicken side={1} offset={3} />
        <Egg branch={3} offset={1} />
        <Wolf branch={basketPos} />
        <Score score={game.getScore()} />
        <Fail fails={game.getFails()} />
        <Background />
      </Container>

      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={moveBasket( BasketPosition.LEFT_TOP )}>Left Top - {BasketPosition.LEFT_TOP}</button>
            </td>
            <td>
              <button onClick={moveBasket( BasketPosition.RIGHT_TOP )}>Right Top - {BasketPosition.RIGHT_TOP}</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={moveBasket( BasketPosition.LEFT_BOTTOM )}>Left Bottom - {BasketPosition.LEFT_BOTTOM}</button>
            </td>
            <td>
              <button onClick={moveBasket( BasketPosition.RIGHT_BOTTOM )}>Right Bottom - {BasketPosition.RIGHT_BOTTOM}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
