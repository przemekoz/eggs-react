import React from "react";
import { MAIN_GAME_LOOP } from "./businessRules/config";
import { GameClass } from "./businessRules/Game/GameClass";
import { Game } from "./components/Game";
import { levels } from './businessRules/levels';
import { TimerClass } from "./businessRules/Timer/TimerClass";
import { BasketPosition } from "./businessRules/shared/types";
import { IMAGE_WIDHT } from "./shared/config";

interface State {
  time: number;
}

interface Props { }

interface Timers {
  timer: TimerClass;
  method(): void;
}

export class App extends React.Component<Props, State> {
  private interval: any = null;
  private game: GameClass;
  private dropTimer: TimerClass;
  private moveTimer: TimerClass;
  private timers: Timers[];

  constructor(props: Props) {
    super(props);
    this.state = { time: Date.now() };
    // this.start = this.start.bind( this );
    // this.pause = this.pause.bind( this );
    // this.reset = this.reset.bind( this );
    this.game = new GameClass(levels);

    this.dropTimer = new TimerClass(MAIN_GAME_LOOP, MAIN_GAME_LOOP * 8);
    this.moveTimer = new TimerClass(MAIN_GAME_LOOP, MAIN_GAME_LOOP * 4);
    const runChickenTimer = new TimerClass(MAIN_GAME_LOOP, MAIN_GAME_LOOP * 2);

    this.timers = [
      {
        timer: this.dropTimer,
        method: () => {
          this.game.dropItem();
        }
      },
      {
        timer: this.moveTimer,
        method: () => {
          this.game.moveItems();
        }
      },
      {
        timer: runChickenTimer,
        method: () => {
          this.game.moveChicken();
        }
      },
    ];
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.start();
      this.setState({ time: Date.now() });
    }, MAIN_GAME_LOOP);
    document.addEventListener("keydown", (event: KeyboardEvent) => { this.handleKey(event.key) });
  }

  handleKey(key: string) {
    if (["q", "Q"].includes(key)) {
      this.game.setBasketPosition(BasketPosition.LEFT_TOP);
    }
    if (["p", "P"].includes(key)) {
      this.game.setBasketPosition(BasketPosition.RIGHT_TOP);
    }
    if (["l", "L"].includes(key)) {
      this.game.setBasketPosition(BasketPosition.RIGHT_BOTTOM);
    }
    if (["a", "A"].includes(key)) {
      this.game.setBasketPosition(BasketPosition.LEFT_BOTTOM);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick() { }

  private start() {
    this.game.scan();

    // this.showStats( this.game );

    if (this.game.isNextLevel()) {
      this.dropTimer.setTimer(this.game.getDropInterval());
      this.moveTimer.setTimer(this.game.getMoveInterval());
    }

    this.timers.forEach(timerItem => {
      if (timerItem.timer.canDo()) {
        timerItem.method();
      }
      timerItem.timer.tick();
    });

    if (this.game.getIsGameEnd() || this.game.getIsGameOver()) {
      // setStatus( game.getIsGameEnd() ? GameStatus.GAME_END : GameStatus.GAME_OVER );
      this.stop();
    }
  }

  private stop() {
    console.log('stop')
  }

  private showStats(game: GameClass) {
    console.groupCollapsed("Frame")
    console.table(game.getState())
    console.table({
      basketPosition: game.getBasketPosition(),
      score: game.getScore(),
      fails: game.getFails(),
      level: game.getLevel(),
      isGameEnd: game.getIsGameEnd(),
      isGameOver: game.getIsGameOver(),
    });
    console.table(game.getFalls());
    console.groupEnd();
  };

  render() {

    // const { isProgress } = this.state;
    return (
      <div className="App">
        {/* <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button> */}

        <Game game={this.game} />



      </div>
    );
  }
}

export default App;
