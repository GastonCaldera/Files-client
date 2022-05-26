import Table from 'react-bootstrap/Table'

function FilesTable({ files }) {
    return (
        <div className='container mt-3'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Text</th>
                        <th>Number</th>
                        <th>Hex</th>
                    </tr>
                </thead>
                <tbody>
                    {files.length ?
                        files.map((file) => {
                            return file.lines.map((line, index) => {
                                return (
                                    <tr>
                                        <td>{file.file}</td>
                                        <td>{line.text}</td>
                                        <td>{line.number}</td>
                                        <td>{line.hex}</td>
                                    </tr>
                                )
                            })
                        })
                        : (
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        )}
                </tbody>
            </Table >
        </div >
    );
}

export default FilesTable;