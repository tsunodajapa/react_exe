const ChartRow = ({ title, length, rating, categories, awards }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{length}</td>
      <td>{rating}</td>
      <td>
        <ul>
          {categories.map((category, index) =>
            <li key={`category-${index}`}>{category}</li>
          )}
        </ul>
      </td>
      <td>{awards}</td>
    </tr>
  )
}

export default ChartRow;