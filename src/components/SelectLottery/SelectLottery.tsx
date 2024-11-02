import { useContext } from "react";
import themes, { GameType } from "../../styles/themes";
import { ThemeContext } from "../../context/ThemeContext";
import SelectStyled from "./SelectLottery.styled";

const SelectLottery = () => {
  const { themeType, setThemeType } = useContext(ThemeContext);

  const lotteryOptions = Object.keys(themes) as GameType[];

  const handleChangeLottery = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setThemeType(event.target.value as GameType);
  };

  return (
    <SelectStyled onChange={handleChangeLottery} value={themeType}>
      {lotteryOptions.map((themeKey) => (
        <option aria-label={themes[themeKey].name} key={themeKey} value={themeKey}>
          {themes[themeKey].name}
        </option>
      ))}
    </SelectStyled>
  );
};
export default SelectLottery;