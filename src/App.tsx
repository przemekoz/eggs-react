import React from 'react';
import { MAIN_GAME_LOOP } from './businessRules/config';
import { GameClass } from './businessRules/Game/GameClass';
import { levels } from './businessRules/levels';
import { TimerClass } from './businessRules/Timer/TimerClass';
import { Game } from './components/Game';

function App() {

  let gameInterval: any = null;
  const game = new GameClass( levels );

  const dropTimer = new TimerClass( MAIN_GAME_LOOP, MAIN_GAME_LOOP * 2 );
  const moveTimer = new TimerClass( MAIN_GAME_LOOP, MAIN_GAME_LOOP * 3 );
  const chickenSpeed = MAIN_GAME_LOOP;
  const runChickenTimer = new TimerClass( MAIN_GAME_LOOP, chickenSpeed );

  const showStats = ( game: GameClass ) => {
    console.groupCollapsed( "Frame" )
      console.table( game.getState() )
      console.table( {
        basketPosition: game.getBasketPosition(),
        score: game.getScore(),
        fails: game.getFails(),
        level: game.getLevel(),
        isGameEnd: game.getIsGameEnd(),
        isGameOver: game.getIsGameOver(),
      } );
      console.table( game.getFalls() );
      console.groupEnd();
  };

  interface Timers {
    timer: TimerClass;
    method(): void;
  }

  const timers = [
    {
      timer: dropTimer,
      method: () => {
        game.dropItem();
      }
    },
    {
      timer: moveTimer,
      method: () => {
        game.moveItems();
      }
    },
    {
      timer: runChickenTimer,
      method: () => {
        game.moveChicken();
      }
    },
  ]

  const start = () => {
    // setStatus( GameStatus.ACTIVE );
    gameInterval = setInterval( () => {
      game.scan();

      showStats( game );

      if ( game.isNextLevel() ) {
        dropTimer.setTimer( game.getDropInterval() );
        moveTimer.setTimer( game.getMoveInterval() );
      }

      timers.forEach( timerItem => {
        if ( timerItem.timer.canDo() ) {
          timerItem.method();
        }
        timerItem.timer.tick();
      } );

      if ( game.getIsGameEnd() || game.getIsGameOver() ) {
        // setStatus( game.getIsGameEnd() ? GameStatus.GAME_END : GameStatus.GAME_OVER );
        clearInterval( gameInterval );
      }
    }, MAIN_GAME_LOOP );
  };

  const pause = () => {
    // setStatus( GameStatus.PAUSE );
    clearInterval( gameInterval );
  };

  const reset = () => {
    // setStatus( GameStatus.NOT_ACTIVE );
    clearInterval( gameInterval );
    game.reset();
  };

  return (
    <div className="App">
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>

      <Game game={game} />
    </div>
  );
}

export default App;
