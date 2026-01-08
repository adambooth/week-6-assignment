import { useEffect } from "react";

function FrogAPI({ setPhoto }) {
  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://week-6-api.vercel.app/api/images`);
      const data = await response.json();
      setPhoto(data);
    }

    getData();
  }, [setPhoto]);
  return <></>;
}

export default FrogAPI;
