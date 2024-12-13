interface Props {
    text: string
}

export const Header = ({text}:Props) => {
  return (
    <div className="dealHeader">
        <h3>{text}</h3>
    </div>
  )
}
