import { useContext } from "react";
import { SequentialContext } from "../components/SequentialController";

export const useSequential = () => useContext(SequentialContext);