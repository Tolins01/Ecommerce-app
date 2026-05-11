import "./items.css"



export default function Items(props) {

  return (
    <div className="items">
      <span className="decrement" onClick={props.count.prev}>-</span>
      <span className="items-num">{props.count.count}</span>
      <span className="increment" onClick={props.count.next}>+</span>
    </div>
  )
}
