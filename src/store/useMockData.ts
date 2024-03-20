import { useEffect } from "react";
import mockdata from "../store/mockdataV1.json";

export default () => useEffect(() => localStorage.setItem("BUDGETING_CHECKOUT_KEY", JSON.stringify(mockdata)), []);