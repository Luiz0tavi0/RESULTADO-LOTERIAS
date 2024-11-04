import { useContext } from "react";
import themes, { GameType } from "../../styles/themes";
import { ThemeContext } from "../../contexts/ThemeContext";
import { IconWrapper, SelectStyled, SelectWrapper } from "./SelectLottery.styled";
import IconDownArrow from "./IconDownArrow/IconDownArrow";
import useLotterryApi from "../../hooks/useLotterryApi";


const SelectLottery = () => {
  const { themeType, setThemeType } = useContext(ThemeContext);
  const lotteryOptions = Object.keys(themes) as GameType[];

  const lotteryId = themes[themeType].name.replace(/[\s|-]/g, '').toLowerCase()
  const { result, loading, error } = useLotterryApi(lotteryId)

  const handleChangeLottery = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setThemeType(event.target.value as GameType);
  };


  return (
    <>
      {/* <div style={{ backgroundColor: 'green', paddingLeft: '50px' }}>
        {<p>chave : {themes[themeType].name.toLowerCase().replace(' ', '').replace('-', '')}</p>}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {result && <div>{JSON.stringify(result)}</div>} 
      </div> 
     */}
      <SelectWrapper>
        <SelectStyled
          onChange={handleChangeLottery}
          value={themeType}
        >
          {
            lotteryOptions.map((themeKey) => (
              <option aria-label={themes[themeKey].name} key={themeKey} value={themeKey}>
                {themes[themeKey].name}
              </option>
            ))
          }
        </SelectStyled>
        <IconWrapper>
          <IconDownArrow fill="#848484" />
        </IconWrapper>
      </SelectWrapper>

    </>
  );
};

export default SelectLottery;