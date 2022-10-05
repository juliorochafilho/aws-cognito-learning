import Head from "next/head";
import Image from "next/image";

import '@aws-amplify/ui-react/styles.css';
import styles from "@/pages/index.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <h1> Seja bem vindo</h1>
      <p> Faca login para continuar</p>
    </div>
  );
}
