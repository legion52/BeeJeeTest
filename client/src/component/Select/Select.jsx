import style from './style.module.css'

export default function Select({ todoSort, setTodoSort, onClickHandler }) {

  const sortHandler = (e) => {
    setTodoSort(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div>
      <select className="form-select form-select-sm" onChange={sortHandler} aria-label=".form-select-sm example" name='value'>
        <option selected>{todoSort.value}</option>
        <option value="По имени">По имени</option>
        <option value="По email">По email</option>
        <option value="По статусу">По статусу</option>
      </select>
      {todoSort.value !== 'Без фильтра' && <div className={`${style.select}`}>
        <div className="form-check mx-3">
          <input onChange={sortHandler} className={`form-check-input`} value={'off'} type="radio" name="descending" id="flexRadioDefault2" checked={todoSort.descending === 'off' ? true : false} />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            По возрастанию
          </label>
        </div>
        <div className="form-check">
          <input onChange={sortHandler} className={`form-check-input`} type="radio" name="descending" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            По убыванию
          </label>
        </div>

        <button type="button" className={`btn btn-primary btn-sm ${style.selBut}`} onClick={onClickHandler}>Применить</button>
      </div>}
    </div>
  )
}
