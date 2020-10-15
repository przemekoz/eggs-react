import React from "react";
import { BranchOffset, GameClass, SideOffset } from "../../businessRules/Game/GameClass";
import { BasketPosition } from "../../businessRules/shared/types";
import { Background } from "../Background";
import { Chicken } from "../Chicken";
import { Container } from "../Container";
import { Egg } from "../Egg";
import { Fail } from "../Fail";
import { GameEndInfo } from "../GameEndInfo";
import { GameOverInfo } from "../GameOverInfo";
import { Score } from "../Score";
import { Wolf } from "../Wolf";

interface Props {
  game: GameClass;
}


export const Game = ( props: Props ) => {
  const { game } = props;

  const moveBasket = ( position: BasketPosition ) => () => {
    game.setBasketPosition( position );
  };

  const renderChicken = ( falls: SideOffset[] ): React.ReactNode => {
    return falls.map( ( { side, offset }: SideOffset ) => (
      <Chicken key={`${side}-${offset}`} side={side} offset={offset} />
    ) );
  };

  const renderEggs = ( falls: BranchOffset[] ): React.ReactNode => {
    return falls.map( ( { branch, offset }: BranchOffset ) => (
      <Egg key={`${branch}-${offset}`} branch={branch} offset={offset} />
    ) );
  };

  return (
    <>
      <Container>
        {renderEggs( game.getEggs() )}
        {renderChicken( game.getFalls() )}
        <Wolf branch={game.getBasketPosition()} />
        <Score score={game.getScore()} />
        <Fail fails={game.getFails()} />
        { game.getIsGameOver() && <GameOverInfo /> }
        { game.getIsGameEnd() && <GameEndInfo /> }
        <Background />
      </Container>

      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={moveBasket( BasketPosition.LEFT_TOP )}>(Q) Left Top - {BasketPosition.LEFT_TOP}</button>
            </td>
            <td>
              <button onClick={moveBasket( BasketPosition.RIGHT_TOP )}>(P) Right Top - {BasketPosition.RIGHT_TOP}</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={moveBasket( BasketPosition.LEFT_BOTTOM )}>(A) Left Bottom - {BasketPosition.LEFT_BOTTOM}</button>
            </td>
            <td>
              <button onClick={moveBasket( BasketPosition.RIGHT_BOTTOM )}>(L) Right Bottom - {BasketPosition.RIGHT_BOTTOM}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
