import type { Component, Accessor } from "solid-js";
import "@fontsource/cousine/400.css";
import styles from "../styles/Card.module.css";

export interface CardProps {
  hour: Accessor<string>;
  minute: Accessor<string>;
  second: Accessor<string>;
}
