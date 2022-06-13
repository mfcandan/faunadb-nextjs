import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await fetch('/api/getCustomers');
    const newData = await res.json();
    setData(newData);
  }

  useEffect(() => {
    console.log(data);
    getData();
  }, []);

  return <div>{process.env.FAUNADB_SECRET_KEY}</div>;
};

export default Home;
