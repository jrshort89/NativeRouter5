import React from "react";
import { Image } from "react-native";

export default function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 44 }}
      source={{
        uri:
          "https://static.wikia.nocookie.net/starcraft/images/4/4c/Hydralisk_SC2_Cncpt3.jpg/revision/latest/scale-to-width-down/340?cb=20091028225625",
      }}
    />
  );
}
