import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import GET_JOBS from "../api/index";
import Card from "../components/Card";
import loading from "../assets/loading.gif";
import "../styles/loading.css";
import "../styles/search.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Row, Col } from "react-flexbox-grid";

const Home = () => {
  const [text, setText] = useState("");
  const [filterData, setFilterData] = useState([]);

  const { data: { jobs = [] } = {} } = useQuery(GET_JOBS, {
    onCompleted: (res) => setFilterData(res.jobs),
  });
  useEffect(() => {
    if (text) {
      setFilterData(
        jobs.filter((item) =>
          item?.title?.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
    // eslint-disable-next-line
  }, [text]);
  const options = ["Ascending", "Descending"];
  const isEmpty = jobs.length === 0;
  return (
    <div>
      {isEmpty ? (
        <div className="loading">
          <img src={loading} alt="Loading" />
        </div>
      ) : (
        <div className="page">
          <div className="display">
            <Row between="md">
              <Col xs={12} md={3}>
                <input
                  placeholder="Search Title"
                  type="text"
                  name="text"
                  style={{ marginBottom: "10px" }}
                  className="searchTerm"
                  onChange={(e) => {
                    setText(e.target.value);
                    e.target.value === "" && setFilterData(jobs);
                  }}
                />
              </Col>
              <Col xs={12} md={3}>
                <Dropdown
                  className="dropdown"
                  options={options}
                  value="Sort By"
                  placeholder="Sort"
                  onChange={(e) => {
                    if (e.value === options[0]) {
                      const sorted = jobs.sort((a, b) => {
                        return new Date(a.createdAt) - new Date(b.createdAt);
                      });
                      setFilterData(sorted);
                      setText(" ");
                    } else if (e.value === options[1]) {
                      const sorted = jobs.sort((a, b) => {
                        return new Date(b.createdAt) - new Date(a.createdAt);
                      });
                      setFilterData(sorted);
                      setText("G");
                    }
                  }}
                />
              </Col>
            </Row>
          </div>
          {filterData?.map((job) => (
            <Card key={job.id} jobs={job} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;

//   const JobsFound=jobs.map((jobs) => {
//     if(text!==''){
//       const len=text.length
//       if(text.toLowerCase()===jobs.title.toLowerCase().substring(0, len)){
//     return(
//     <Card key={jobs.id} jobs={jobs} />
//     )
//       }
//     }
//     else  return(
//       <Card key={jobs.id} jobs={jobs} />
//       )
// })
