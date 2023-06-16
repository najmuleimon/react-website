import { useEffect, useState } from 'react'

const AllMediaTable = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('/data/allData.json')
        .then(res => res.json())
        .then(data => setAllData(data));
    }, [])

  return (
    <div className="table-responsive">
        <table className="table table-bordered border-white shadow-sm">
            <thead>
                <tr>
                <th scope="col">Date</th>
                <th scope="col">Users</th>
                <th scope="col">Week 0</th>
                <th scope="col">Week 1</th>
                <th scope="col">Week 2</th>
                <th scope="col">Week 3</th>
                <th scope="col">Week 4</th>
                <th scope="col">Week 5</th>
                <th scope="col">Week 6</th>
                <th scope="col">Week 7</th>
                <th scope="col">Week 8</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {
                    allData.map(({id, date, users, week0, week1, week2, week3, week4, week5, week6, week7, week8}) => (
                        <tr key={id}>
                            <td>{date}</td>
                            <td>{users}</td>
                            <td className={(Number(week0) > 205 && Number(week0) < 220) ? 'bg-light-green' : (Number(week0) >= 220 && Number(week0) < 225) ? 'bg-medium-green' : Number(week0) >= 225 ? 'bg-dark-green' : ''}>
                                {week0 === "" ? "" : `$${week0}`}
                            </td>
                            <td className={(Number(week1) > 215 && Number(week1) < 225) ? 'bg-light-green' : (Number(week1) >= 225 && Number(week1) < 235) ? 'bg-medium-green' : Number(week1) >= 235 ? 'bg-dark-green' : ''}>
                                {week1 === "" ? "" : `$${week1}`}
                            </td>
                            <td className={(Number(week2) >= 230 && Number(week2) < 240) ? 'bg-light-green' : (Number(week2) >= 240 && Number(week2) < 245) ? 'bg-medium-green' : Number(week2) >= 245 ? 'bg-dark-green' : ''}>
                                {week2 === "" ? "" : `$${week2}`}
                            </td>
                            <td className={(Number(week3) >= 240 && Number(week3) < 250) ? 'bg-light-green' : (Number(week3) >= 250 && Number(week3) < 255) ? 'bg-medium-green' : Number(week3) >= 255 ? 'bg-dark-green' : ''}>
                                {week3 === "" ? "" : `$${week3}`}
                            </td>
                            <td className={(Number(week4) >= 250 && Number(week4) <= 255) ? 'bg-medium-green' : Number(week4) > 255 ? 'bg-dark-green' : ''}>
                                {week4 === "" ? "" : `$${week4}`}
                            </td>
                            <td className={(Number(week5) >= 265 && Number(week5) < 270) ? 'bg-medium-green' : Number(week5) >= 270 ? 'bg-dark-green' : ''}>
                                {week5 === "" ? "" : `$${week5}`}
                            </td>
                            <td className={(Number(week6) > 275 && Number(week6) <= 280) ? 'bg-medium-green' : (Number(week6) > 280 && Number(week6) < 283) ? 'bg-light-green' : Number(week6) >= 283 ? 'bg-dark-green' : ''}>
                                {week6 === "" ? "" : `$${week6}`}
                            </td>
                            <td className={Number(week7) > 295 ? 'bg-dark-green' : ''}>
                                {week7 === "" ? "" : `$${week7}`}
                            </td>
                            <td>{week8 === "" ? "" : `$${week8}`}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default AllMediaTable