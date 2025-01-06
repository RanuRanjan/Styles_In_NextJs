import styles from "./page.module.css";
import heading from '@/app/style/heading.module.css'
import style from '@/app/style/heading.module.css'
import Image from "next/image";
import Profile from '../../public/vercel.svg'
import {Roboto} from 'next/font/google'


const robot= Roboto({
  weight:'400',
  subsets:['greek']
})
export default function Home() {
  const img= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgratisography.com%2F&psig=AOvVaw1wn81GbDOId-ZMA7ncxJHd&ust=1736273864270000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCErara4YoDFQAAAAAdAAAAABAE"
  const {red} =style
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1> Welcome to my website</h1>
        <h2 className={heading.main}>Learning NextJs</h2>
        <h3 className={red}>from Youtube</h3>
        <Image
      src="https://via.placeholder.com/150"
      alt="Placeholder"
      width={150}
      height={150}
    />
     <img src="https://via.placeholder.com/150" alt="" />
     {/* font */}

     <h4 className={robot.className}>Using Google font</h4>
   <h4 style={{fontFamily:'Playwrite',fontWeight:"300"}}>font using Link</h4>
      </main>
    </div>
  );
}

