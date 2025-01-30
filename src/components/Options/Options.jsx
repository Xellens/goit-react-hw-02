import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={s.options_container}>
      <button className={s.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.button_reset} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
