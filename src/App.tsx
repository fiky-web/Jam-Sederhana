import { onMount, createSignal, createMemo } from "solid-js";
import type { Component } from "solid-js";
import Card from "./components/Card";

import styles from "./styles/App.module.css";

const updateString = (time: number): string =>
  time < 10 ? `0${(time as unknown) as string}` : ((time as unknown) as string);
  
const App: Component = () => {
  const [time, setTime] = createSignal<Date>(new Date());
  
  const hour = createMemo<string>(() => updateString(time().getHours()));
  const minute = createMemo<string>(() => updateString(time().getMinutes()));
  const second = createMemo<string>(() => updateString(time().getSeconds()));
  
  onMount(() => {
  function updateTime() {
    setTime(new Date());
    window.requestAnimationFrame(updateTime);
  }
  
  updateTime();
  });
  return (
  <div class={styles.container}>
    <Card hour={hour} minute={minute} second={second} />
  </div>
