import Footer from "../component/footer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function List() {
  const items = [
    { id: 1, memo: "", fileName: "" },
    { id: 2, memo: "", fileName: "" },
  ];
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>メモ</TableCell>
              <TableCell>ファイル名</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.memo}</TableCell>
                <TableCell>{row.fileName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer></Footer>
    </div>
  );
}

export default List;
