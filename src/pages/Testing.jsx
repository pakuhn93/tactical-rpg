import styles from '../styles/testing.module.css';
import { useState } from 'react';

export default function Testing(){
  const testGrid = [
    
  ];
  const [myGrid, setMyGrid] = useState({
    currentGrid: '6x20',
    cellContents: [{}]
  });

  return (
          <section className={styles.gridLayout}>
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
              <div>Five</div>
              <div>Six</div>
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
              <div>Five</div>
              <div>Six</div>
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
              <div>Five</div>
              <div>Six</div>
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
              <div>Five</div>
              <div>Six</div>
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
              <div>Five</div>
              <div>Six</div>
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
              <div>Five</div>
              <div>Six</div>
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
          </section>
  );
}