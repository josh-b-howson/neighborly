import { useMemo, useState } from 'react'
import styles from './Media.module.scss'

const Image = () => {
  const url = useMemo(() => `https://placedog.net/400/${Math.round(Math.random() * 100 + 300)}`, [])
  return <img src={url} />
}

const Media = () => {
  const [coolState, setCoolState] = useState<string[]>(["", "", "", "", "", "", "", "", "", "",])
  return <section
    className={styles.media}>
    <div className="slider">
      <div className="track">
        {coolState.map((val, index) =>
          <Image key={index} />
        )}
      </div>
    </div>
    <button onClick={() => setCoolState(['wow', ...coolState])}>do another one</button>
  </section>
}

export default Media