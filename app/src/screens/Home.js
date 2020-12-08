import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import GET_JOBS from "../queries/index";
import Card from "../components/Card";
import loading from "../assets/loading.gif";
import "../styles/styles.css";

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

  const isEmpty = jobs.length === 0;
  return (
    <div>
      {isEmpty ? (
        <div className="loading">
          <img src={loading} alt="loading" />
        </div>
      ) : (
        <div>
          <input
            placeholder="Search Title"
            type="text"
            name="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          {filterData?.map((job) => (
            <Card key={job.id} jobs={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
