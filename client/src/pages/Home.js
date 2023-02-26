import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Doctor from "../components/Doctor";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import DoctorCard from "./DoctorCard";
function Home() {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.get("/api/user/get-all-approved-doctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(hideLoading())
      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading())
    }
  };
   const [name, setName] = useState("Your name");
   const [job, setJob] = useState("Your job");
   const [experience, setExperience] = useState("Your Experience");

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout >
      <Row gutter={20}>
        {/* {doctors.map((doctor) => ( */}
          <Col span={8} xs={24} sm={24} lg={8}>
            {/* <Doctor doctor={doctor} /> */}
            <DoctorCard name={'Sourav Sikdar'} job={'Child Specialist'} experience={'5 years'}/>
            
            <DoctorCard name={'B Sikdar'} job={'Child Specialist'} experience={'5 years'}/>

          </Col>
        {/* ))} */}
      </Row>

    </Layout>
  );
}

export default Home;
