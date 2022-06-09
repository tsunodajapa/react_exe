
const Chart = () => {
  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>Título</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Género</th>
                <th>Premios</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Título</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Género</th>
                <th>Premios</th>
              </tr>
            </tfoot>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Chart;