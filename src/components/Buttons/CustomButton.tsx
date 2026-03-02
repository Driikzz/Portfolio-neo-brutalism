


interface ButtonProps {
    text: string;
    onClick: () => void;
}



const CustomButton : React.FC<ButtonProps> = ({ text, onClick }) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}