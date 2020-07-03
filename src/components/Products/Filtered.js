import React from "react"

export default () => {

  return (
    <>
        <h2 className="filtered-title">Categories</h2>
        
            <ul className="filtered-list">
                <li className="filtered-item">
                    <a href=" #" className="filtered-link">
                        Categorie #1
                    </a>
                </li>
                <li className="filtered-item">
                    <a href=" #" className="filtered-link">
                        Categorie #2
                    </a>
                </li>
                <li className="filtered-item">
                    <a href=" #" className="filtered-link">
                        Categorie #3
                    </a>
                </li>
            </ul>

            <h2 className="filtered-title">Filtered</h2>

            <ul className="filtered-list">
                <li className="filtered-item">
                    <a href=" #" className="filtered-link">
                        Filtered #1
                    </a>
                </li>
                <li className="filtered-item">
                    <a href=" #" className="filtered-link">
                        Filtered #2
                    </a>

                </li>
                <li className="filtered-item">
                    <a href=" #" className="filtered-link">
                        Filtered #3
                    </a>
                </li>
            </ul>
    </>
 
  )
}