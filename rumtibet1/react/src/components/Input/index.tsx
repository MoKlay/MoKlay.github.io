
import context from './Option/context'
import Calendar from './Calendar'




export default function Input({type, children, onChange, value, title, alt, focused, onChangeFocus} : InputProps) {

  function handleClick() {
    if (type === 'select' || type === 'date') {
      if (onChangeFocus) onChangeFocus()
    }
  }
  return (
    <div className="input-con">
      <div className={`widget ${focused ? 'focus' : ''}`.trim()}>
        {type === 'select' && (
          <context.Provider value={onChange ? onChange : () => {}}>
            {children}
          </context.Provider>
        )}
        {type === 'date' && (
          <Calendar selectedDate={value} onDateSelect={onChange}/>
        )}
      </div>
      <div className="input" onClick={handleClick} data-placeholder={title && !value ? title : ''}>
        {value && <span>
        {type === 'date' && value?.toLocaleDateString() || type !== 'date' &&  value || ''}
        </span>}
      </div>
      {alt && <span>{alt}</span>}
    </div>
  )
}
