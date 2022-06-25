import { React } from 'react';
import s from "./Screen.module.css"

function Screen() {
  return (
    <div className={s.screen}>
      <div className={s.elements}>
          <button className={s.fC}>
            USD
          </button>
          <button className={s.swapButton}>
              {"-><-"}
          </button>
          <button className={s.sC}>
            EUR
          </button>
      </div>
    </div>
  )
}

export default Screen;
