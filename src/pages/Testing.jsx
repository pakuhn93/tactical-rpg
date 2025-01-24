import styles from '../styles/testing.module.css';
import { useState } from 'react';

import { testGrid } from '../utils/testGrid';

export default function Testing(){
  const [myGrid, setMyGrid] = useState({
    currentGrid: '6x20',
    cellContents: [{}]
  });

  return (
          <section className={styles.gridLayout}>
              {
                testGrid.map((cell, index) => {
                  return (
                    <div>
                      { index }
                    </div>
                    )
                })
              }
          </section>
  );
}