
import Switch from "react-switch";

function SwitchButton({ boolean, toggleFunction, isDisabled }) {
  return (
    <Switch
      checked={boolean}
      onChange={toggleFunction}
      onColor="#85d3ff"
      onHandleColor="#ffffff"
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={15}
      width={48}
      disabled={!!isDisabled}
    />
  );
}

export default SwitchButton;