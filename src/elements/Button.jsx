export function Button(props) {
  return (
    <button {...props}>
      <span style={{display: 'block'}}>👇🏽 Todo: Code the button 👇🏽</span>
      <span style={{display: 'block', border: 'solid 4px red'}}>{ props.children }</span>
    </button>
  )
}
