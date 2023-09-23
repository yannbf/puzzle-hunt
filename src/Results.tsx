import { FormResponse } from './App';
import { Dice, Donut } from './shapes/components/Shapes';

export const Results = ({ values: { name, numberDonuts, numberDice }, result }: FormResponse) => {
  console.log({ numberDice, numberDonuts });
  return (
    <div>
      <h1>{name}! Here's your results:</h1>

      <div>
        {Array.from(new Array(numberDonuts)).map(() => (
          <Donut />
        ))}
      </div>

      <div>
        {Array.from(new Array(numberDice)).map(() => (
          <Dice />
        ))}
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {result.text && <p>{result.text}</p>}
    </div>
  );
};
