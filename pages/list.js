import Footer from "../component/footer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function List() {
  const [items, setItems] = useState([]);
  const router = useRouter();
  const query = router.query;
  const initList = async () => {
    try {
      let word = null;
      if (query && query.word) {
        word = query.word;
      }
      const response = await fetch(`http://localhost:3000/api/search`);
      const jsonList = await response.json();
      if (word) {
        const filterList = jsonList.filter((item) => item.memo.includes(word));
        setItems(filterList);
      } else {
        setItems(jsonList);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    initList();
  }, []);

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>メモ</TableCell>
              <TableCell>ファイル名</TableCell>
              <TableCell>登録日</TableCell>
              <TableCell>更新日</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.memo}</TableCell>
                <TableCell>{row.filename}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>{row.updatedAt}</TableCell>
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
