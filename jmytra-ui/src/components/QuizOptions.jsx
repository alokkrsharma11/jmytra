import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

function QuizOptions({ options, onSelect }) {
  return (
    <RadioGroup>
      {options.map((opt, idx) => (
        <FormControlLabel
          key={idx}
          value={opt}
          control={<Radio />}
          label={opt}
          onClick={() => onSelect(opt)}
        />
      ))}
    </RadioGroup>
  );
}

export default QuizOptions;