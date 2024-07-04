import { useSearchParams } from "react-router-dom";

import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";

import { useCabins } from "./useCabins";

const CabinTable = () => {
  const [searchParams] = useSearchParams();
  const { isLoading, cabins } = useCabins();

  // 1) FILTER
  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;

  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "with-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount);
  if (filterValue === "no-discount")
    filteredCabins = cabins?.filter((cabin) => !cabin.discount);

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "created_at-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName="cabins" />;

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />

        {/* <Table.Footer>
          <Pagination />
        </Table.Footer> */}
      </Table>
    </Menus>
  );
};

export default CabinTable;
