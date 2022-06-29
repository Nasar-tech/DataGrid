import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const DataTableF = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const getData = async () => {
    try {
      let response = await axios.get("https://restcountries.com/v2/all");
      console.log(response.data);
      setData(response.data);
      setFiltered(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // Getting API Data
  useEffect(() => {
    getData();
  }, []);

  // handling change event from search box
  useEffect(() => {
    const result = data.filter((c) => {
      return c.name.toLowerCase().match(search.toLowerCase());
    });
    setFiltered(result);
  }, [search]);
  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.capital,
    },
    {
      name: "Country Flag",
      selector: (row) => <img width={50} height={50} src={row.flag} />,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <div style={{ display: "flex", width: "60rem" }}>
            <button
              style={{ width: "5rem", margin: "5px" }}
              className="btn btn-primary"
              onClick={(e) => console.log("native name" + row.nativeName)}
            >
              Edit
            </button>
            <button
              style={{ width: "5rem", margin: "5px" }}
              className="btn btn-primary"
              onClick={(e) => console.log("native name" + row.nativeName)}
            >
              Edit
            </button>
            <button
              style={{ width: "5rem", margin: "5px", height: "3rem" }}
              className="btn btn-primary"
              onClick={(e) => console.log("native name" + row.nativeName)}
            >
              Edit
            </button>
          </div>
        </>
      ),
    },
  ];
  const useStyles = {
    dataTable: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
      marginLeft: "3.5rem",
    },
  };
  return (
    <>
      <div className="dataTable center" style={useStyles.dataTable}>
        <DataTable
          columns={columns}
          data={filtered}
          pagination
          fixedHeader
          fixedHeaderScrolling="70vh"
          highlightOnHover
          selectableRowsHighlight
          title="users"
          subHeader
          subHeaderComponent={
            <input
              className="form-control w-25"
              type="text"
              placeholder="search here"
              onChange={(e) => setSearch(e.target.value)}
            />
          }
          subHeaderAlign="right"
        />
      </div>
    </>
  );
};

export default DataTableF;
