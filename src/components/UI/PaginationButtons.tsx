import './PaginationButtons.css'
import { IPagButtons, PagButtons } from './PaginationButtons.data'

export const PaginationButtons = () => {
  return (
    <div className='pagination-buttons_container'>
            {PagButtons.map((pgbutton: IPagButtons) =>(
                <button className=''><i className={pgbutton.icon}/></button>
            ))}
    </div>
  )
}