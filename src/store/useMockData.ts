import { useEffect } from "react";
import mockdata from "../store/mockdata.json";

export default () => useEffect(() => localStorage.setItem("BUDGETING_CHECKOUT_KEY", JSON.stringify(mockdata)), []);