import { ITable } from './TableComponent.data'
import './TableComponent.css'
import { FC } from 'react'

export const TableComponent: FC<ITable> = ({ columns, dataTable, returndata }) => {


    return (
        <table className='content-table'>
            <thead>
                <tr>
                    {columns && columns.map((col, index: number) => (
                        <th key={index}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataTable && dataTable.map((table) => (
                    <tr>
                        {columns && columns.map((col, index: number) => (
                            <td key={index}>
                                {col.type == 'text' && (
                                    <span>{col.column(table)}</span>
                                )}
                                {col.type == 'icon' && (
                                    <div className="buttons">
                                        {col.icons && col.icons?.map((ic: string, indexIcon: number) => (
                                            <div className={`${col.className[indexIcon]}`}>
                                                <button onClick={() => returndata(col.iconsAction[indexIcon], table)}>
                                                    <i className={`${ic}`} />
                                                </button>
                                            </div>
                                        ))
                                        }
                                    </div>
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}