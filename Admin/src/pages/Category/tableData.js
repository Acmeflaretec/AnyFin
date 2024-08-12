
import Box from "components/Box";
import Typography from "components/Typography";
import Avatar from "components/Avatar";
import Badge from "components/Badge";
import { useGetCategory } from "queries/ProductQuery";
import Table from "examples/Tables/Table";
import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Category({ image, name, desc, id }) {
  ComponentName.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };
  return (
    <Box component={Link} display="flex" alignItems="center" px={1} py={0.5} to={`/services/editServices/${id}`}>
      <Box mr={2}>
        <Avatar src={image} alt={name} size="sm" variant="rounded" />
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography variant="button" fontWeight="medium">
          {name}
        </Typography>
        <Typography variant="caption" color="secondary">
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

const TableData = () => {
  const { data, isLoading } = useGetCategory({ pageNo: 1, pageCount: 100 });
  const columns = [
    { name: "details", align: "left" },
    { name: "status", align: "center" },
    // { name: "createdon", align: "center" },
    // { name: "Lastupdated", align: "center" },
    { name: "action", align: "center" },
  ]
  console.log('data', data);
  const rows = data?.data?.map(item => ({
    details: <Category image={`${process.env.REACT_APP_API_URL}/uploads/${item?.image}`} name={item?.heading} desc={item?.subheading} id={item?._id} />,
    status: (
      <Badge variant="gradient" badgeContent={item?.isAvailable ? 'Available' : 'Unavailable'} color={item?.isAvailable ? "success" : 'secondary'} size="xs" container />
    ),
    // createdon: (
    //   <Typography variant="caption" color="secondary" fontWeight="medium">
    //     {new Date(item?.createdAt).toDateString()}
    //   </Typography>
    // ),
    // Lastupdated: (
    //   <Typography variant="caption" color="secondary" fontWeight="medium">
    //     {new Date(item?.updatedAt).toDateString()}
    //   </Typography>
    // ),
    action: (
      <Link to={`/services/editServices/${item?._id}`}>
        <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
          more_vert
        </Icon>
      </Link>
    ),
  }))
  return isLoading ? <Typography fontSize={14} sx={{ paddingX: 5 }}>loading...</Typography> : <Table columns={columns} rows={rows} />
};

export default TableData;
