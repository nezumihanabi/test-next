import Link from "next/link";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import ListIcon from "@material-ui/icons/List";
import Divider from "@material-ui/core/Divider";
function Footer() {
  return (
    <div>
      <Divider />
      <Link href="/add">
        <Button>
          <AddIcon></AddIcon>
        </Button>
      </Link>
      <Link href="/search">
        <Button>
          <SearchIcon></SearchIcon>
        </Button>
      </Link>
      <Link href="/list">
        <Button>
          <ListIcon></ListIcon>
        </Button>
      </Link>
    </div>
  );
}

export default Footer;
