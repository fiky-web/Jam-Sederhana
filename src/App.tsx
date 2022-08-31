import { onMount, createSignal, createMemo } from "solid-js";
import type { Component } from "solid-js";
import Card from "./components/Card";

import styles from "./styles/App.module.css";

const updateString = (time: number): string =>
  time < 10 ? `0${(time as unknown) as string}` : ((time as unknown) as string);
