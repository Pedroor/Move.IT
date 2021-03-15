import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import Head from "next/head";
import { GetServerSideProps } from "next";

import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";

import { ChallangesProvider } from "../contexts/ChallangesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  <ChallangesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
  >
    return (
    <div className={styles.container}>
      <Head>
        <title>Move.it | Início</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
    );
  </ChallangesProvider>;
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
